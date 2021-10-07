import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import TextInput from '../form/TextInput';
import DropdownMenu from '../form/DropDownMenu';
import ProfilePicForm from '../form/ProfilePicForm';
import { AuthContext } from '../../contexts/authContext';

import api from '../../apis/api';

function PetCreate() {
  const { loggedInUser } = useContext(AuthContext);
  const history = useHistory();

  const [state, setState] = useState({
    name: '',
    imageUrl: '',
    breed: '',
    age: '',
    species: '',
  });

  function handleChange(event) {

    if (event.target.files) {
      return setState({ ...state, [event.target.name]: event.target.files[0] });
    }

    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleUpload(files) {
    const uploadData = new FormData();

    uploadData.append('petImg', files);

    const response = await api.post('/imagepet-upload', uploadData);

    return response.data.url;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const imageUrl = await handleUpload(state.imageUrl);

      const response = await api.post('/pet', {
        ...state,
        user: loggedInUser.user._id, imageUrl,
      });

      console.log(response);
      history.push(`/detalhes-usuario/${loggedInUser.user._id}`);
    } catch (err) {
      console.error(err.response);
    }
  }

  return (
    <div className='container mt-4' style={{ maxWidth: '650px' }}>
      <form onSubmit={handleSubmit} className='m-2'>
        <TextInput
          type='text'
          label='Nome do pet'
          id='petName'
          name='name'
          onChange={handleChange}
          value={state.name}
        />

        <ProfilePicForm
          type='file'
          className='form-control'
          aria-label='text input'
          name='imageUrl'
          onChange={handleChange}
          placeholder='Foto do seu pet'
        />

        <TextInput
          type='text'
          label='Qual a raça do seu bichinho?'
          id='petBreed'
          name='breed'
          onChange={handleChange}
          value={state.breed}
        />

        <TextInput
          type='number'
          label='Idade'
          id='petAge'
          name='age'
          onChange={handleChange}
          value={state.age}
        />

        <DropdownMenu
          label='Espécie'
          options={[
            'cachorro',
            'réptil',
            'peixe',
            'galinha',
            'pequenos pets',
            'gato',
            'cavalo',
            'pássaro',
            'Animal de campo',
          ]}
          id='petSpecies'
          name='species'
          onChange={handleChange}
          value={state.species}
        />

        <button type='submit' className='btn btn-primary my-3 d-block'>
          Criar
        </button>
      </form>
    </div>
  );
}

export default PetCreate;
