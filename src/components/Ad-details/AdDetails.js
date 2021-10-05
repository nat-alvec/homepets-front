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
        <i class=' error-color fas fa-exclamation-triangle'></i> Erro ao
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
          <Link to='/detalhes-anuncio'>Voltar às petHouses</Link>
        </div>
        {/* CALENDÁRIO DE DISPONIBILIDADE E INFORMAÇÕES DE CONTATO */}
        <div className='container mt-5 d-flex justify-content-center'>
          <div
            className='card p-4 my-3 '
            style={{ width: '98vw', maxWidth: '740px' }}
          >
            <div className='first'>
              <div className='time d-flex flex-row align-items-center justify-content-between mt-3'></div>
            </div>
            <div className='second d-flex flex-row mt-2'>
              <div className='image mr-3'>
                <img
                  src={adDetails.user.profilePicUrl}
                  className='rounded-circle'
                  width='60'
                />
              </div>
              <div className=''>
                <div className='d-flex flex-row mb-1'>
                  <span>{adDetails.user.name}</span>
                </div>
                <p>Home and pet owner</p>
              </div>
            </div>
            <hr className='line-color' />
            <h6>Período de cuidado dos pets:</h6>
            <p>
              {
                new Date(adDetails.availableDates.startDate)
                  .toLocaleString()
                  .split(',')[0]
              }
              até
              {
                new Date(adDetails.availableDates.endDate)
                  .toLocaleString()
                  .split(',')[0]
              }
            </p>
            <hr className='line-color' />
            <div className='third mt-4'>
              <h6>Entre em contato:</h6>
              <a href={`mailto:${adDetails.user.email}`}>email</a>
            </div>
          </div>
        </div>

        <div>
          <h1>{adDetails.title}</h1>
          <p>{adDetails.location}</p>
          <p>símbolos de pets na casa</p>
        </div>
        <div>
          {/* CARROSSEL */}
          <div>
            <CarouselComp pics={adDetails.picturesUrl} />
          </div>
        </div>

        <div>
          {/* SOBRE MIM DE CADA USER */}
          <h3>Sobre mim</h3>
          <p>{adDetails.intro}</p>
          <h3>Sobre a casa</h3>
          <p>{adDetails.homeinfo}</p>
          <h3>Responsabilidades</h3>
          <p>{adDetails.duties}</p>
        </div>
        {/* PETS DO USUÁRIO NO ANÚNCIO */}
        <div>
          <h3>Meus pets</h3>
          {adDetails.pets.map((pet) => (
            <>
              <img
                src={pet.imageUrl}
                alt='pet photo'
                className='rounded-circle'
                width='95'
              />
              <div className='mt-3'>
                <h4>{pet.name}</h4>
                <p className='text-secondary mb-1'>{pet.breed}</p>
                <p className='text-muted font-size-sm'>{pet.age}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdDetails;
