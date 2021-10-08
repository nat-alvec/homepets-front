import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import logo from './images/pet-house.png';
import logoBrand from './images/homepets-brand.png';
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

function NavBarResponsive() {
  const { logout, loggedInUser } = useContext(AuthContext);

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='light'
      variant='light'
      className='m-0'
    >
      <Container className='m-0'>
        <Navbar.Brand className='ms-0' href='/'>
          <img
            className='is-logo'
            src={logo}
            alt='logo'
            width='45'
            height='45'
          />
          <img
            className='is-logo'
            src={logoBrand}
            alt='logo name'
            width='65'
            height='35'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {/* <Nav className='me-auto'></Nav> */}
          <Nav className='ms-auto'>
            {loggedInUser.token ? (
              <Nav.Link eventKey={2} href='/adv/create'>
                Criar anúncio
              </Nav.Link>
            ) : null}

            {loggedInUser.token ? null : (
              <Nav.Link href='/auth/signup'>Cadastre-se</Nav.Link>
            )}
            {loggedInUser.token ? null : (
              <Nav.Link href='/auth/login'>Entre</Nav.Link>
            )}
            {loggedInUser.token ? (
              <NavDropdown
                title={loggedInUser.user.name.split(' ')[0]}
                id='collasible-nav-dropdown'
              >
                <NavDropdown.Item
                  href={`/detalhes-usuario/${loggedInUser.user._id}`}
                >
                  Ver anúncios
                </NavDropdown.Item>
                <NavDropdown.Item
                  href={`/detalhes-usuario/${loggedInUser.user._id}`}
                >
                  Ver perfil
                </NavDropdown.Item>
                <NavDropdown.Item
                  href={`/edit-profile/${loggedInUser.user._id}`}
                >
                  Editar perfil
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href={`/pet-create`}
                >
                  Adicionar pet
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='/' onClick={logout}>
                  Sair
                </NavDropdown.Item>
              </NavDropdown>
            ) : null}
            <Nav.Link href='/info'>Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarResponsive;
