import { useParams, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import api from '../../apis/api';
import { AuthContext } from '../../contexts/authContext';

function DeleteAd() {
  const { id } = useParams();
  const history = useHistory();
  const { loggedInUser } = useContext(AuthContext);
  console.log(id);

  async function deleteThisAd() {
    try {
      const response = await api.delete(`/adv/${id}`);
      console.log(response.data);
      history.push(`/detalhes-usuario/${loggedInUser.user._id}`);
    } catch (err) {
      console.error(err.response);
    }
  }

  return (
    <div className='container mt-5 text-center'>
      <h1>Tem certeza?</h1>
      <button onClick={deleteThisAd} className='btn btn-danger m-4 p-3'>
        Confirme aqui!
      </button>
    </div>
  );
}

export default DeleteAd;
