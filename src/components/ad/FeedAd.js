import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../apis/api';

import convertDate from '../../assets/functions/convertDate';
import convertToAnimalIcons from '../../assets/functions/convertToAnimalIcons';
import Searchbar from '../search/SearchBar';

function FeedAd(props) {
  const [ads, setAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  
  useEffect(() => {
    async function fetchAds() {
      try {
        const response = await api.get('/adv');
        response.data.sort((a, b) => {
          return b._id.localeCompare(a._id);
        });
        setAds([...response.data]);
        setFilteredAds([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchAds();
  }, []);

  function filterCards(searchTerm) {
    const normalizedSearchTerm = searchTerm.toLowerCase();
    
    if (!searchTerm) {
      return setFilteredAds([...ads]);
    }

    const allAdsClone = [...ads];

    const filtered = allAdsClone.filter((textCard) => {
      const hasCountry = textCard.location.country
        .toLowerCase()
        .includes(normalizedSearchTerm);
      const hasCity = textCard.location.city
        .toLowerCase()
        .includes(normalizedSearchTerm);

      return hasCountry || hasCity;
    });

    setFilteredAds([...filtered]);
  }

  return (
    <div className='row d-flex justify-content-around mx-2'>
      <Searchbar onChange={filterCards} />
      {filteredAds.map((elem, index) => {
        return (
          <div
            className='card border-light col-md-3 mb-3'
            key={index}
            style={{ minWidth: '26rem', maxWidth: '100vw' }}
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
              <div className='card-text'>{convertToAnimalIcons(elem.pets)}</div>
              <p className='m-0 mt-1 card-text'>
                <span className='me-2'>
                  {convertDate(elem.availableDates.startDate.split('T')[0])}
                </span>
                <span> - </span>
                <span>
                  {convertDate(elem.availableDates.endDate.split('T')[0])}
                </span>
              </p>
              <p className='m-0 my-1 card-text text-secondary'>{`${elem.location.city}, ${elem.location.country}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeedAd;
