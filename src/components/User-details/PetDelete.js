import { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';

import api from '../../apis/api';

function PetDelete() {
    const history = useHistory();
    const { id } = useParams();
    const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function deletePet() {
      try {
        const response = await api.delete(`/pet/${id}`);

        console.log(response.data);
        history.push(`/detalhes-usuario/${loggedInUser.user._id}`);
      } catch (err) {
        console.error(err);
      }
    }
    deletePet();
  }, [id, history]);

  return <h1>Deletando</h1>;
}

export default PetDelete;
