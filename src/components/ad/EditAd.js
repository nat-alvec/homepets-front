import { useState, useEffect, useContext } from 'react';
import api from '../../apis/api';
import { useParams, useHistory } from 'react-router-dom';
import TextInput from '../form/TextInput';
import TextAreaInput from '../form/TextArea';
import CheckForm from '../form/CheckForm';
import DropdownMenu from '../form/DropDownMenu';
import PictureFormEdit from '../form/PictureFormEdit';
import { AuthContext } from '../../contexts/authContext';

function EditAd() {
  const [state, setState] = useState({
    title: '',
    intro: '',
    homeinfo: '',
    duties: '',
    pets: [],
    picturesUrl: [],
    availableDates: {
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0],
    },
    location: {country: "", city: "", street: "", number: ""},
    amenities: [],
  });
  
  const [pets, setPets] = useState([]);
  
  const { id } = useParams();
  const history = useHistory();
  const { loggedInUser } = useContext(AuthContext);
  
  useEffect(() => {
    async function fetchAd() {
      try {
        const response = await api.get(`/adv/${id}`);
        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    async function fetchPets() {
      try {
        if (loggedInUser.user._id) {
          const response = await api.get(`/profile/${loggedInUser.user._id}`);
          setPets([...response.data.pets]);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchAd();
    fetchPets();
  }, [id, loggedInUser.user._id]);

  function handleChange(event) {
    if (Array.isArray(state[event.target.name])) {
      console.log('array');
    } else if (typeof state[event.target.name] === 'object') {
      console.log('object');
    } else {
      setState({ ...state, [event.target.name]: event.target.value });
    }
  }

  function handlePets(event) {
    if (event.target.checked) {
      const petToPush = pets.find((elem) => elem.name === event.target.value);
      state.pets.push(petToPush);
      setState({ ...state, pets: [...state.pets] });
    } else {
      const index = state.pets.findIndex(
        (elem) => elem.name === event.target.value
      );
      if (index > -1) {
        state.pets.splice(index, 1);
      }

      setState({ ...state, pets: [...state.pets] });
    }
  }

  function handleDate(event) {
    setState({
      ...state,
      availableDates: {...state.availableDates, [event.target.name]: event.target.value },
    });
  }

  function handleAmenities(event) {
    if (event.target.checked) {
      state.amenities.push(event.target.value);
      setState({ ...state, amenities: state.amenities });
    } else {
      const index = state.amenities.findIndex(
        (elem) => elem === event.target.value
      );
      if (index > -1) {
        state.amenities.splice(index, 1);
      }

      setState({ ...state, amenities: state.amenities });
    }
  }

  function handleLocation(event) {
    setState({
      ...state,
      location: { ...state.location, [event.target.name]: event.target.value },
    });
  }

  function handlePictures(event) {
    state.picturesUrl[event.target.name] = event.target.value;
    setState({ ...state, picturesUrl: state.picturesUrl });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.patch(`/adv/${id}`, {
        ...state,
      });
      console.log(response);
      history.push(`/detalhes-usuario/${loggedInUser.user._id}`);
    } catch (err) {
      console.log(err.response);
      alert("Preencha todos os campos")
    }
  }

  return (
    <div className='container mt-4' style={{ maxWidth: '650px' }}>
      <form onSubmit={handleSubmit} className='m-2'>
        <TextInput
          type='text'
          label='Título do anúncio'
          id='adFormTitle'
          name='title'
          onChange={handleChange}
          value={state.title}
        />
        <TextAreaInput
          label='Introdução'
          placeholder='Conte mais sobre você'
          id='adFormIntro'
          name='intro'
          onChange={handleChange}
          value={state.intro}
        />
        <CheckForm
          label='Quais pets estão na casa?'
          options={pets.map((elem) => elem.name)}
          handle={handlePets}
          name='pets'
          marked={state.pets.map((elem) => elem.name)}
        />
        <TextAreaInput
          label='Sobre a casa'
          placeholder='Conte mais sobre sua casa'
          id='adFormHomeInfo'
          name='homeinfo'
          onChange={handleChange}
          value={state.homeinfo}
        />
        <div className='row'>
          <div className='col-6'>
            <TextInput
              type='date'
              label='Data inicial'
              id='adFormStartDate'
              name='startDate'
              onChange={handleDate}
              value={
                new Date(state.availableDates.startDate)
                  .toISOString()
                  .split('T')[0]
              }
            />
          </div>
          <div className='col-6'>
            <TextInput
              type='date'
              label='Data Final'
              id='adFormEndDate'
              name='endDate'
              onChange={handleDate}
              value={
                new Date(state.availableDates.endDate)
                  .toISOString()
                  .split('T')[0]
              }
            />
          </div>
        </div>

        <CheckForm
          label='Escolha as comodidades oferecidas'
          options={[
            'Casa',
            'Apartamento',
            'Montanha',
            'Praia',
            'Cidade',
            'Wifi',
            'Interior',
            'Acessibilidade',
          ]}
          handle={handleAmenities}
          marked={state.amenities}
        />
        <TextAreaInput
          label='Responsabilidades'
          placeholder='Descreva as responsabilidades do cuidador do seu bichinho'
          id='adFormDuties'
          name='duties'
          onChange={handleChange}
          value={state.duties}
        />
        <div className='row'>
          <p>Qual a localização do seu imóvel?</p>
          <div className='col-6'>
            <DropdownMenu
              label='País'
              options={[
                'Argentina',
                'Brasil',
                'Chile',
                'Mexico',
                'Estados Unidos',
                'Canadá',
                'Inglaterra',
                'Espanha',
                'Indonesia',
                'Japão',
              ]}
              id='adFormCountry'
              name='country'
              onChange={handleLocation}
              value={state.location.country}
            />
          </div>
          <div className='col-6'>
            <DropdownMenu
              label='Cidade'
              options={[
                'Buenos Aires',
                'Bariloche',
                'São Paulo',
                'Rio de Janeiro',
                'Santiago',
                'Cancun',
                'Nova York',
                'Miami',
                'São Francisco',
                'Toronto',
                'Vancouver',
                'Londres',
                'Madri',
                'Barcelona',
                'Bali',
                'Tokyo',
              ]}
              id='adFormCity'
              name='city'
              onChange={handleLocation}
              value={state.location.city}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-9'>
            <TextInput
              type='text'
              label='Rua'
              id='adFormStreet'
              name='street'
              onChange={handleLocation}
              value={state.location.street}
            />
          </div>
          <div className='col-3'>
            <TextInput
              type='number'
              label='Número'
              id='adFormTitle'
              name='number'
              onChange={handleLocation}
              value={state.location.number}
            />
          </div>
        </div>
        <PictureFormEdit
          pictures={state.picturesUrl}
          onChange={handlePictures}
          placeholder='Coloque a Url da foto'
        />

        <button type='submit' className='btn btn-primary my-3 d-block'>
          Editar
        </button>
      </form>
    </div>
  );
}

export default EditAd;
