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
        stars: 5,
        date: new Date().toISOString().split('T')[0],
      });

      console.log(response);
      window.location.reload();
    } catch (err) {
      console.error(err.response);
      alert('Escreva seu comentário antes de enviá-lo');
    }
  }
  return (
    <div>
      <div>
        {loggedInUser.user._id === adOwnerId ? (
          <h5 className='mt-4 ms-4'>Responda um comentário</h5>
        ) : (
          <h5 className='mt-4'>Escreva um comentário para o proprietário</h5>
        )}

        <form onSubmit={handleSubmit} className='mx-4'>
          <TextAreaInput
            placeholder='Escreva aqui'
            id='reviewText'
            name='text'
            onChange={handleChange}
            value={currentReview.text}
          />
          <button type='submit' className='btn-sm btn-primary my-4 d-block'>
            Adicione seu comentário
          </button>
        </form>
      </div>

      {!reviews.length ? null : <h5 className='mt-4 mx-4'>Comentários</h5>}
      {reviews.map((review, index) => {
        return (
          <div
            key={index}
            className='container d-flex justify-content-start ms-2 mt-0'
          >
            <div className='container w-25'>
              <img
                src={review.author.profilePicUrl}
                alt='author'
                className='rounded-circle mx-1 p-3 pet-image'
                width='100px'
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className='container d-flex justify-content-start align-items-start'>
              <div className='w-50'>
                <h4 className='pet-name mt-2' style={{ fontSize: '18px' }}>
                  {review.author.name}
                </h4>
                <p className='textsFonts' style={{ fontSize: '14px' }}>
                  {review.text}
                </p>
                <p
                  className='textsFonts text-secondary mt-1'
                  style={{ fontSize: '12px' }}
                >
                  {convertDate(review.date)}
                </p>
              </div>
              {review.author._id === loggedInUser.user._id ? (
                <div className='container d-flex flex-column'>
                  <Link to={`/review-delete/${review._id}`}>
                    <i className='fas fa-trash p-2 text-dark'></i>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
