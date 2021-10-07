import { useParams, useHistory } from 'react-router-dom';
import api from '../../apis/api';

function DeleteReview() {
  const { id } = useParams();
  const history = useHistory();

  console.log(id);
  async function deleteThisReview() {
    try {
      const response = await api.delete(`/review/${id}`);
      console.log(response.data);
      history.goBack();
    } catch (err) {
      console.error(err.response);
    }
  }

  return (
    <div className='container mt-5 text-center'>
      <h1>Tem certeza?</h1>
      <button onClick={deleteThisReview} className='btn btn-danger m-4 p-3'>
        Confirme aqui!
      </button>
    </div>
  );
}

export default DeleteReview;
