//Importando configurações e bibliotecas
import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import api from '../../apis/api'; // Instância do Axios pré-configurada

//Importando Componentes
import './adDetails.css';
import CarouselComp from '../carousel/Carousel';

function AdDetails() {
  const [hasError, setHasError] = useState(false);
  const [adDetails, setAdDetails] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function fetchAdDetails() {
      try {
        const responseAd = await api.get(`/adv/${id}`);
        setAdDetails({ ...responseAd.data });
      } catch (err) {
        setHasError(true);
        console.error(err);
      }
    }
    fetchAdDetails();
  }, [id]);

  if (hasError) {
    return (
      <h1>
        <i className=' error-color fas fa-exclamation-triangle'></i> Erro ao
        carregar esta página!
      </h1>
    );
  }

  if (!adDetails) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className='container mt-2 mb-2 d-flex flex-column justify-content-center align-items-center'>
      <div
        className='card border-light mt-2 mb-4'
        style={{ width: '98vw', maxWidth: '740px' }}
      >
        {/* LINK PARA VOLTAR À PÁGINA ANTERIOR */}
        <div>
          <Link to='/'>
            <button className='btn btn-danger rounded-pill my-3 mx-5'>
              Home Pets
            </button>
          </Link>
        </div>
        {/* CARD DE DISPONIBILIDADE E INFORMAÇÕES DE CONTATO */}
        <div className='container mt-2 d-flex justify-content-center'>
          <div
            className='card p-4 my-3 adv-first-card '
            style={{ width: '98vw', maxWidth: '740px' }}
          >
            <div className='first'>
              <div className='time d-flex flex-row align-items-center justify-content-between mt-3'></div>
            </div>
            <div className='second d-flex flex-row mt-1'>
              <div className='image mr-3'>
                <img
                  src={adDetails.user.profilePicUrl}
                  className='rounded-circle profPicAd'
                  width='90px'
                  style={{
                    width: '90px',
                    height: '90px',
                  }}
                />
              </div>
              {/* Primera parte do card 1 - Nome e foto do usuário / localização */}
              <div>
                <div className='d-flex flex-row mb-1'>
                  <span className='titleFont mx-3'>{adDetails.user.name}</span>
                </div>
                <p className='localizationFont my-0 mx-3'>
                  {adDetails.location.country}, {adDetails.location.city}
                </p>
                <p className='localizationFont my-0 mx-3'>
                  Rua: {adDetails.location.street}, número:{' '}
                  {adDetails.location.number}{' '}
                </p>
              </div>
              {/* Segunda Parte do card 1 - Data de cuidado dos pets */}
            </div>
            <hr className='line-color' />
            <h6 className='subtitleFont'>Período de cuidado dos pets:</h6>
            <p>
              {
                new Date(adDetails.availableDates.startDate)
                  .toLocaleString()
                  .split(',')[0]
              }
              à
              {
                new Date(adDetails.availableDates.endDate)
                  .toLocaleString()
                  .split(',')[0]
              }
            </p>
            <hr className='line-color' />
            {/* CONTATO */}
            <div className='third mt-2 mx-3'>
              <a href={`mailto:${adDetails.user.email}`}>
                <i class='fas fa-envelope icon-style'></i>
              </a>
            </div>
          </div>
        </div>
        {/* TÍTULO DO ANÚNCIO */}
        <div>
          <h1 className='titleFont mx-3 my-4'>{adDetails.title}</h1>
        </div>
        {/* CARROSSEL */}
        <div className='carousel'>
          <CarouselComp pics={adDetails.picturesUrl} />
        </div>

        {/* AMENIITES */}
        <div className='container d-flex flex-row bd-highlight mb-3 mx-2'>
          <h3 className='smallTitle mt-2'>Características desse lugar:</h3>
          {adDetails.amenities.map((amenitie) => (
            <button className='btn btn-outline-dark btn-sm'>{amenitie}</button>
          ))}
        </div>
        {/* SOBRE MIM DE CADA USER */}
        <div>
          <h3 className='smallTitle mt-2 mx-4'>Sobre mim</h3>
          <p className='textsFonts mx-4'>{adDetails.intro}</p>
          <h3 className='smallTitle mt-2 mx-4'>Sobre a casa</h3>
          <p className='textsFonts mx-4'>{adDetails.homeinfo}</p>
          <h3 className='smallTitle mt-2 mx-4'>Responsabilidades</h3>
          <p className='textsFonts mx-4'>{adDetails.duties}</p>
        </div>
        {/* PETS DO USUÁRIO NO ANÚNCIO */}
        <div>
          <h3 className='smallTitle mt-2 mx-4'>Meus pets</h3>

          <div className='pets-container d-flex'>
            {adDetails.pets.map((pet) => (
              <>
                <div className='container d-flex'>
                  <div className='p-2 bd-highlight'>
                    <img
                      src={pet.imageUrl}
                      alt='Pet picture'
                      className='rounded-circle mx-1 p-3'
                      width='150px'
                      style={{
                        width: '150px',
                        height: '150px',
                      }}
                    />
                  </div>
                  <div className='p-2 bd-highlight'>
                    <h3 className='pet-name mt-4'>Nome: {pet.name}</h3>
                    <p className='textsFonts'>Raça: {pet.breed}</p>
                    <p className='textsFonts mb-0'>Idade: {pet.age}</p>
                  </div>
                </div>
                <div className='mx-5'>
                  <hr className='my-4 line' />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdDetails;
