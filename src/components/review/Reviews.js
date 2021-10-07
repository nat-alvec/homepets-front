import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import api from '../../apis/api';
import TextAreaInput from '../form/TextArea';
import TextInput from '../form/TextInput';
import { AuthContext } from '../../contexts/authContext';
import convertDate from '../../assets/functions/convertDate';

function Reviews() {
  const { id } = useParams();

  const [currentReview, setCurrentReview] = useState({
    author: '',
    to: { toAd: '' },
    text: '',
    date: new Date().toISOString().split('T')[0],
    stars: null,
  });

  const [reviews, setReviews] = useState([]);
  const [adId, setadId] = useState('');
  const [adOwnerId, setAdOwnerId] = useState('');

  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await api.get(`/adv/${id}`);
        setReviews([...response.data.reviews]);
        setadId(response.data._id);
        setAdOwnerId(response.data.user._id);
      } catch (err) {
        console.error(err.response);
      }
    }
    fetchReviews();
  }, [id]);

  function handleChange(event) {
    setCurrentReview({
      ...currentReview,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post('/review', {
        ...currentReview,
        to: { toAd: adId },
        author: loggedInUser.user._id,
        date: new Date().toISOString().split('T')[0],
      });

      console.log(response);
      window.location.reload();
    } catch (err) {
      console.error(err.response);
      //alert('Preencha todos os campos');
    }
  }
  return (
    <div>
      {loggedInUser.user._id === adOwnerId ? null : (
        <div>
          <h5 className='mt-4'>Escreva um review ou comentário</h5>
          <form onSubmit={handleSubmit} className='m-2'>
            <TextAreaInput
              placeholder='Conte mais sobre você'
              id='reviewText'
              name='text'
              onChange={handleChange}
              value={currentReview.text}
            />
            <TextInput
              type='number'
              label='Avalie com uma nota de 1 a 5'
              id='reviewScore'
              name='stars'
              onChange={handleChange}
              value={currentReview.score}
            />
            <button type='submit' className='btn btn-primary my-3 d-block'>
              Avalie
            </button>
          </form>
        </div>
      )}

      {!reviews.length ? null : <h5 className='mt-4'>Reviews</h5>}
      {reviews.map((review, index) => {
        return (
          <div key={index} className='container d-flex justify-content-start'>
            <div className='container'>
              <img
                src={review.author.profilePicUrl}
                alt='Pet'
                className='rounded-circle mx-1 p-3 pet-image'
                width='150px'
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className='container'>
              <h3 className='pet-name mt-4'>{review.author.name}</h3>
              <p className='textsFonts mb-0'>
                Avaliação: {review.stars} estrelas
              </p>
              <p className='textsFonts' style={{ fontSize: '16px' }}>
                {review.text}
              </p>
              <p
                className='textsFonts text-secondary'
                style={{ fontSize: '10px' }}
              >
                {convertDate(review.date)}
              </p>
            </div>
            <div className='container d-flex flex-column'>
              <Link to={`/review-delete/${review._id}`}>
                <i className='fas fa-trash p-2 text-danger'></i>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
