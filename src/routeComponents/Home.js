import React from 'react';
//import { Link } from 'react-router-dom';
import logo from '../components/images/pet-house.png';
import dogHomepage from '../components/images/homepage-dog.jpg';
import brandName from '../components/images/homepets-brand.png';
import FeedAd from '../components/ad/FeedAd';

function Home() {
  
  return (
    <div className='mb-4'>
      <div className='card text-dark mx-2 mt-2'>
        <img
          src={dogHomepage}
          className='card-img'
          alt='dog in the garden'
          style={{
            height: '25rem',
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <div className='card-img-overlay text-center d-flex justify-content-end align-items-center'>
          <div
            className='bg-warning rounded ms-3 my-5 p-3 h-auto'
            style={{ width: '42%' }}
          >
            <h3 className='card-title'>
              Cuide de um Pet em qualquer lugar do mundo
            </h3>
            <p className='card-text mt-2'>
              Hospede-se de graça e cuide de um bichinho fofinho!
            </p>
          </div>
        </div>
      </div>
      <div className='text-center d-flex flex-column justify-content-center align-items-center'>
        <div className='mt-4 mb-0'>
          <img src={logo} alt='homepets logo' width='50px' height='50px' />
          <img
            src={brandName}
            alt='homepets logo'
            width='92.86px'
            height='50px'
          />
        </div>
        <div>
          <p className='mt-4 mb-4' style={{ fontSize: '24px' }}>
            Explore e descubra centenas de casas e pets!
          </p>
        </div>
        <FeedAd />
      </div>
    </div>
  );
}

export default Home;
