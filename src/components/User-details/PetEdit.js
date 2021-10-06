import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import TextInput from '../form/TextInput';
import ProfilePicForm from '../form/ProfilePicForm';
import { AuthContext } from '../../contexts/authContext';

import api from '../../apis/api';

function PetEdit(){
    
    const [state, setState] = useState({
        name: '',
        breed: '',
        age: '',
        imageUrl: '',
    })
    
    const { id } = useParams();
  const history = useHistory();
  const { loggedInUser } = useContext(AuthContext);
    
  useEffect(() => {
    async function fetchPetDetails() {
      try {
        const response = await api.get(`/pet/${id}`);
        setState({ ...response.data });
      } catch (error) {
        console.error(error);
      }
    }
    fetchPetDetails();
  }, [id]);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    api
      .patch(`/pet/${id}`, { ...state })
      .then(() => {
        history.push(`/detalhes-usuario/${loggedInUser.user._id}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }
    
    
    return(
        <div className='container mt-4' style={{ maxWidth: '650px' }}>
      <form onSubmit={handleSubmit} className='m-2'>
        <h1>Editar Informações de usuário</h1>
        <TextInput
          type='text'
          label='Nome do seu pet'
          id='petName'
          name='name'
          onChange={handleChange}
          value={state.name}
        />
        <TextInput
          type='text'
          label='Raça'
          id='petBreed'
          name='breed'
          onChange={handleChange}
          value={state.breed}
        />
        <TextInput
          type='text'
          label='Idade'
          id='petAge'
          name='age'
          onChange={handleChange}
          value={state.age}
        />
        <ProfilePicForm
          type='text'
          className='form-control'
          aria-label='text input'
          name='imageUrl'
          value={state.imageUrl}
          onChange={handleChange}
          placeholder='Foto do seu pet'
        />

        <button type='submit' className='btn btn-primary my-3 d-block'>
          Editar
        </button>
      </form>
    </div>
    )
}

export default PetEdit;