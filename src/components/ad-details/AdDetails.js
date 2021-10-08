//Importando configurações e bibliotecas
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../apis/api'; // Instância do Axios pré-configurada

//Importando Componentes
import './adDetails.css';
import CarouselComp from '../carousel/Carousel';
import Reviews from '../review/Reviews';

//Importando funções
import convertDate from '../../assets/functions/convertDate';

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
    return <h2 className='container'>Carregando...</h2>;
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
            <button className='btn btn-danger rounded-pill my-0 mx-5'>
              Home Pets
            </button>
          </Link>
        </div>
        {/* CARD DE DISPONIBILIDADE E INFORMAÇÕES DE CONTATO */}
        <div className='container mt-1 d-flex justify-content-center'>
          <div
            className='card p-0 px-5 my-3 py-3 adv-first-card border-light bg-warning'
            style={{ width: '98vw', maxWidth: '740px' }}
          >
            <div className='first'></div>
            <div className='second d-flex flex-row mt-0 p-2 align-items-center'>
              <div className='image me-3 justify-content-center d-flex flex-column align-items-center'>
                <img
                  src={adDetails.user.profilePicUrl}
                  alt='profile'
                  className='rounded-circle profPicAd'
                  width='90px'
                  style={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                  }}
                />
              </div>
              {/* Primera parte do card 1 - Nome e foto do usuário / localização */}
              <div className='ms-4 mb-2 me-4'>
                <div className='d-flex flex-row mb-1 mt-2'>
                  <span className='titleFont mx-3'>{adDetails.user.name}</span>
                </div>
                <p className='localizationFont my-0 mx-4 fw-bolder'>
                  Proprietário
                </p>
                <p className='localizationFont my-2 mx-4 text-dark'>
                  {adDetails.user.personalDesc}
                </p>
                <p className='localizationFont my-0 mx-4 text-dark fst-italic'>
                  {adDetails.location.country}, {adDetails.location.city}
                </p>
              </div>
              <div className='time d-flex flex-column align-items-center justify-content-center mt-0 ms-0 w-25'>
                <p className='mb-2 ms-3'>Entre em contato</p>
                {/* CONTATO */}

                <a href={`mailto:${adDetails.user.email}`}>
                  <i
                    className='fas fa-envelope icon-style text-dark fa-lg mt-0 ms-4'
                    style={{ fontSize: '20px' }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* TÍTULO DO ANÚNCIO */}
        <div>
          <h1 className='titleFont mx-3 mt-4 mb-5'>{adDetails.title}</h1>
        </div>
        {/* CARROSSEL */}
        <div className='carousel'>
          <CarouselComp pics={adDetails.picturesUrl} />
        </div>

        {/* AMENIITES */}
        <div className='container d-flex flex-row bd-highlight mb-3 mx-2 flex-wrap justify-content-start'>
          <h3 className='smallTitle mt-2 ms-1 me-3'>Comodidades:</h3>
          {adDetails.amenities.map((amenitie, index) => (
            <button
              key={index}
              className='btn btn-outline-dark btn-sm'
              style={{ cursor: 'default' }}
            >
              {amenitie}
            </button>
          ))}
        </div>
        {/* SOBRE MIM DE CADA USER */}
        <div>
          <h3 className='smallTitle mb-3 mt-1 mx-4'>Disponibilidade</h3>
          <p className='textsFonts mx-4'>
            {convertDate(adDetails.availableDates.startDate)}
            <span> à </span>
            {convertDate(adDetails.availableDates.endDate)}
          </p>
          <h3 className='smallTitle my-3 mx-4'>Sobre mim</h3>
          <p className='textsFonts mx-4'>{adDetails.intro}</p>
          <h3 className='smallTitle my-3 mx-4'>Sobre a casa</h3>
          <p className='textsFonts mx-4'>{adDetails.homeinfo}</p>
          <h3 className='smallTitle my-3 mx-4'>Responsabilidades</h3>
          <p className='textsFonts mx-4'>{adDetails.duties}</p>
        </div>
        {/* PETS DO USUÁRIO NO ANÚNCIO */}
        <div>
          <div className='mx-3 mt-4'>
            <hr className='my-1 line-dark' />
          </div>
          <h3 className='smallTitle mt-4 mb-0 mx-4'>Meus pets</h3>

          <div className='pets-container d-flex'>
            {adDetails.pets.map((pet, index) => (
              <div key={index}>
                <div
                  className='container d-flex mt-0'
                  style={{ height: '140px' }}
                >
                  <div className='p-2 bd-highlight'>
                    <img
                      src={pet.imageUrl}
                      alt='Pet'
                      className='rounded-circle mx-1 p-3'
                      width='150px'
                      style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div className='p-2 bd-highlight'>
                    <h3 className='pet-name mt-4'>
                      {pet.name}, {pet.species}
                    </h3>
                    <p className='textsFonts'>Raça: {pet.breed}</p>
                    <p className='textsFonts mb-0'>Idade: {pet.age}</p>
                  </div>
                </div>
                <div className='mx-3 mt-4'>
                  <hr className='my-1 line-dark' />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Comentários */}
        <div>
          <Reviews />
        </div>
      </div>
    </div>
  );
}

export default AdDetails;
