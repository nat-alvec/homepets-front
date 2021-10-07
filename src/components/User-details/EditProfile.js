import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import TextInput from '../form/TextInput';
import TextAreaInput from '../form/TextArea';
import ProfilePicForm from '../form/ProfilePicForm';
import { AuthContext } from '../../contexts/authContext';

import api from '../../apis/api';

function EditProfile() {
  const [state, setState] = useState({
    name: '',
    email: '',
    personalDesc: '',
    profilePicUrl: '',
  });

  const { id } = useParams();
  const history = useHistory();
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = await api.get(`/profile/${id}`);
        setState({ ...response.data });
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserDetails();
  }, [id]);

  function handleChange(event) {
    if (event.target.files) {
      return setState({ ...state, [event.target.name]: event.target.files[0] });
    }

    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleUpload(files) {
    const uploadData = new FormData();

    uploadData.append('picture', files);

    const response = await api.post('image-upload', uploadData);

    return response.data.url;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const profilePicUrl = await handleUpload(state.profilePicUrl);

      const response = api.patch(`/profile/${id}`, { ...state, profilePicUrl });

      console.log(response);
      history.push(`/detalhes-usuario/${id}`);
    } catch (error) {
      console.error(error.response);
    }
  }

  return (
    <div className='container mt-4' style={{ maxWidth: '650px' }}>
      <form onSubmit={handleSubmit} className='m-2'>
        <h1>Editar Informações de usuário</h1>
        <TextInput
          type='text'
          label='Nome e sobrenome'
          id='userName'
          name='name'
          onChange={handleChange}
          value={state.name}
        />
        <TextInput
          type='text'
          label='email'
          id='userEmail'
          name='email'
          onChange={handleChange}
          value={state.email}
        />
        <TextAreaInput
          type='text'
          label='Biografia'
          id='personalDescription'
          name='personalDesc'
          onChange={handleChange}
          value={state.personalDesc}
        />
        <ProfilePicForm
          type='file'
          className='form-control'
          aria-label='text input'
          name='profilePicUrl'
          onChange={handleChange}
          placeholder='Nova foto de perfil'
        />

        <button type='submit' className='btn btn-primary my-3 d-block'>
          Editar
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
