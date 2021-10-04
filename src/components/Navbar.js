import { Link } from 'react-router-dom';
import logo from './images/pet-house.png';
import logoBrand from './images/homepets-brand.png'
import { useContext } from "react";
import { AuthContext } from '../contexts/authContext'

function Navbar() {
    const { logout } = useContext(AuthContext);
    return (
        <nav className='py-0 px-4 navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between'>
            <Link
                className='navbar-brand d-flex justify-content-between align-items-center m-0'
                style={{width:"135px"}}
                to='/'
            >
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
                    width='83.57'
                    height='45'
                />
            </Link>
            <ul className='nav justify-content-center align-items-center'>
                <li className='nav-item'>
                    <Link className='nav-link p-0 mr-2' aria-current='page' to='/auth/signup'>
                        <button className="btn btn-warning rounded-pill">Cadastre-se</button>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link p-0 mr-2' aria-current='page' to='/auth/login'>
                    <button className="btn btn-primary rounded-pill">Entre</button>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link p-0' aria-current='page' to='/info' onClick={logout}>
                    <button className="btn btn-danger rounded-pill">Sair</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
