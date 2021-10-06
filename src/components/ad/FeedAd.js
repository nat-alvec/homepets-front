import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../apis/api';

import convertDate from '../../assets/functions/convertDate';
import convertToAnimalIcons from '../../assets/functions/convertToAnimalIcons';

function FeedAd() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    async function fetchAds() {
      try {
        const response = await api.get('/adv');
        setAds([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchAds();
  }, []);

  return (
    <div className='row d-flex justify-content-around mx-3'>
      {ads.map((elem, index) => {
        return (
          <div
            className='card border-light col-md-3 mb-3'
            key={index}
            style={{ width: '24rem' }}
          >
            <Link to={`/detalhes-anuncio/${elem._id}`}>
              <img
                src={elem.picturesUrl[index % elem.picturesUrl.length]}
                className='card-img-top'
                alt='anúncio'
                style={{
                  height: '22rem',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </Link>
            <div className='card-body'>
              <h5 className='card-text'>{elem.title}</h5>
              <div className="card-text">{convertToAnimalIcons(elem.pets)}</div>
              <p className="m-0 mt-1 card-text">
                <span className='me-2'>
                  {convertDate(elem.availableDates.startDate.split('T')[0])}
                </span>
                <span> - </span>
                <span>{convertDate(elem.availableDates.endDate.split('T')[0])}</span>
              </p>
              <p className="m-0 my-1 card-text text-secondary">{`${elem.location.city}, ${elem.location.country}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeedAd;
