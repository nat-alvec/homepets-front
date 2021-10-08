//Importando configurações e bibliotecas
import api from '../../apis/api'; // Instância do Axios pré-configurada
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import UserAds from './UserAds';

//Importado Componentes
import './userDetails.css';

function UserDetails() {
  const [userDetails, setUserDetails] = useState();
  const [hasError, setHasError] = useState(false);
  const [showPets, setShowPets] = useState(false);
  const [showAdvs, setShowAdvs] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = await api.get(`/profile/${id}`);
        setUserDetails({ ...response.data });
      } catch (err) {
        setHasError(true);
        console.error(err);
      }
    }
    fetchUserDetails();
  }, [id]);

  // Funções para os botões do Perfil do Usuário
  function handleShowPets() {
    if (!showPets) {
      setShowPets(true);
      setShowAdvs(false);
    }
  }

  function handleShowAdvs() {
    if (!showAdvs) {
      setShowAdvs(true);
      setShowPets(false);
    }
  }

  // Condições de erro e de carregamento da página
  if (hasError) {
    <h1>
      <i className='error-color fas fa-exclamation-triangle'></i> Erro ao
      carregar esta página!
    </h1>;
  }

  if (!userDetails) {
    return <h2 className='container'>Carregando...</h2>;
  }

  return (
    <>
      <div className='container mt-2 mb-2 d-flex flex-column justify-content-center align-items-center'>
        <div
          className='card border-light mt-2 mb-4 bg-light'
          style={{ width: '98vw', maxWidth: '740px' }}
        >
          {/* CARD COM AS INFORMAÇÕES DO USUÁRIO */}
          <div className='page-heading'>
            <div className='d-flex justify-content-around align-items-center bg-warning'>
              <img
                src={userDetails.profilePicUrl}
                alt='User profile'
                className='rounded-circle mx-1 p-3 picUserPof'
                style={{
                  height: '190px',
                  width: '190px',
                  objectFit: 'cover',
                }}
              />
              {/* LINK PARA EDITAR USUÁRIO */}
              <div className=''>
                <h2 className='titleFont mt-4'>{userDetails.name}</h2>
                <p className='subtitleFont ms-2 mt-3'>{userDetails.email}</p>
                <div className='d-flex text-center justify-content-center mt-2 mb-0'>
                  <Link to={`/edit-profile/${id}`}>
                    <i
                      className='fas fa-pen-square text-dark me-0 mt-2'
                      style={{ fontSize: '25px' }}
                    />
                  </Link>
                </div>
                <p className='subtitleFont text-center fst-italic'>
                  {userDetails.personalDesc}
                </p>
              </div>
            </div>
            {/* CARD COM ANÚNCIOS E PETS DO USUÁRIO */}
            <div className='tab-block d-flex justify-content-around'>
              <button
                className='btn btn-danger rounded-pill my-3'
                onClick={handleShowAdvs}
              >
                Meus Anúncios
              </button>
              <button
                className='btn btn-warning rounded-pill my-3'
                onClick={handleShowPets}
              >
                Meus Pets
              </button>
            </div>
          </div>
          {/* CONDIÇÃO PARA RENDERIZAÇÃO DE INFORMAÇÕES DE ACORDO COM CADA BOTÃO */}
          {showPets ? (
            <div className='pets-container'>
              {userDetails.pets.map((pet) => (
                <>
                  <div className='container d-flex'>
                    <div className='container'>
                      <img
                        src={pet.imageUrl}
                        alt='Pet'
                        className='rounded-circle mx-1 p-3 pet-image'
                        width='150px'
                        style={{
                          width: '150px',
                          height: '150px',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <div className='container'>
                      <h3 className='pet-name mt-4'>Nome: {pet.name}</h3>
                      <p className='textsFonts'>Raça: {pet.breed}</p>
                      <p className='textsFonts mb-0'>Idade: {pet.age}</p>
                    </div>
                    <div className='container d-flex flex-column'>
                      <Link to={`/pet-edit/${pet._id}`}>
                        <i className='fas fa-pen-square pl-20 edit-user p-2 text-warning'></i>
                      </Link>
                      <Link to={`/pet-delete/${pet._id}`}>
                        <i className='fas fa-trash p-2 text-danger'></i>
                      </Link>
                    </div>
                  </div>
                  <div className='mx-5'>
                    <hr className='my-2 line' />
                  </div>
                </>
              ))}
              <div className='container adPetBtn'>
                <Link to={`/pet-create`}>
                  <button type='button' className='btn btn-warning mt-2'>
                    Adicionar um novo pet
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <UserAds />
          )}
        </div>
      </div>
    </>
  );
}

export default UserDetails;
