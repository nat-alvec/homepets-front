import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../apis/api';

import convertDate from '../../assets/functions/convertDate';
import convertToAnimalIcons from '../../assets/functions/convertToAnimalIcons';

function UserAds() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    async function fetchAds() {
      try {
        const response = await api.get('/adv');
        response.data.sort((a, b) => {
          return b._id.localeCompare(a._id);
        });
        setAds([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchAds();
  }, []);

  return (
    <div className='row d-flex justify-content-around'>
      {ads.map((elem, index) => {
        return (
          <div
            className='card border-light col-md-3 mb-3'
            key={index}
            style={{ width: '46rem' }}
          >
            <Link to={`/detalhes-anuncio/${elem._id}`}>
              <img
                src={elem.picturesUrl[index % elem.picturesUrl.length]}
                className='card-img-top'
                alt='anúncio'
                style={{
                  height: '8rem',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </Link>
            <div className='card-body'>
              <div className='d-flex justify-content-between'>
                <h5 className='card-text' style={{ fontSize: '22px' }}>
                  {elem.title}
                </h5>
                <div className='d-flex'>
                  <div className='card-text me-3'>
                    <Link
                      to={`/adv/edit/${elem._id}`}
                      className='card-link text-dark'
                    >
                      <i id='edit' className='far fa-edit fa-lg'></i>
                    </Link>
                  </div>
                  <div className='card-text'>
                    <Link
                      to={`/adv/delete/${elem._id}`}
                      className='card-link text-dark'
                    >
                      <i id='delete' className='far fa-trash-alt fa-lg'></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='card-text mb-2'>
                {convertToAnimalIcons(elem.pets)}
              </div>
              <p className='m-0 mt-1 card-text' style={{ fontSize: '16px' }}>
                <span className='me-2'>
                  {convertDate(elem.availableDates.startDate.split('T')[0])}
                </span>
                <span> - </span>
                <span>
                  {convertDate(elem.availableDates.endDate.split('T')[0])}
                </span>
              </p>
              <p
                className='m-0 my-1 card-text text-secondary'
                style={{ fontSize: '14px' }}
              >{`${elem.location.city}, ${elem.location.country}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserAds;
