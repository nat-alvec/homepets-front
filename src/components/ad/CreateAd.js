import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import api from '../../apis/api';
import { AuthContext } from '../../contexts/authContext';

import TextInput from '../form/TextInput';
import TextAreaInput from '../form/TextArea';
import DropdownMenu from '../form/DropDownMenu';
import CheckForm from '../form/CheckForm';
import PictureForm from '../form/PictureForm';

function CreateAd() {
  const [state, setState] = useState({
    title: '',
    intro: '',
    homeinfo: '',
    duties: '',
    pets: [],
    picturesUrl: [],
  });

  const [location, setLocation] = useState({
    country: '',
    city: '',
    number: '',
    street: '',
  });

  const [amenities, setAmenities] = useState([]);

  const [pets, setPets] = useState([]);

  const [availableDates, setAvailableDates] = useState({
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
  });

  const [pictureUrl, setPictureUrl] = useState("")

  const emptyState = { ...state };
  const history = useHistory();
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
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
    fetchPets();
  }, [loggedInUser.user._id]);

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleAmenities(event) {
    if (event.target.checked) {
      amenities.push(event.target.value);
      setAmenities([...amenities]);
    } else {
      const index = amenities.findIndex((elem) => elem === event.target.value);
      if (index > -1) {
        amenities.splice(index, 1);
      }

      setAmenities([...amenities]);
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
    setAvailableDates({
      ...availableDates,
      [event.target.name]: event.target.value,
    });
  }

  function handleLocation(event) {
    setLocation({ ...location, [event.target.name]: event.target.value });
  }

  function handlePictures(event) {
    setPictureUrl(event.target.value);
    state.picturesUrl.push(pictureUrl)

    setState({...state, picturesUrl: [...state.picturesUrl]})
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const stateToPush = {
        ...state,
        user: loggedInUser.user._id,
        location: { ...location },
        amenities: [...amenities],
        availableDates: { ...availableDates },
      };

      console.log(stateToPush);
      const response = await api.post('/adv', {
        ...state,
        pets: state.pets.map((elem) => elem._id),
        user: loggedInUser.user._id,
        location: { ...location },
        amenities: [...amenities],
        availableDates: { ...availableDates },
      });
      console.log(response);
      //setState({ emptyState });
      //history.push('/');
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className='container mt-4' style={{ maxWidth: '650px' }}>
      <form onSubmit={handleSubmit} className='m-2'>
        <TextInput
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
              value={availableDates.startDate}
            />
          </div>
          <div className='col-6'>
            <TextInput
              type='date'
              label='Data Final'
              id='adFormEndDate'
              name='endDate'
              onChange={handleDate}
              value={availableDates.endDate}
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
              value={location.country}
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
              value={location.city}
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
              value={location.street}
            />
          </div>
          <div className='col-3'>
            <TextInput
              type='number'
              label='Número'
              id='adFormTitle'
              name='number'
              onChange={handleLocation}
              value={location.number}
            />
          </div>
        </div>
        <h6>Selecione fotos do seu imóvel e do seu bichinho</h6>
        <TextInput
          type='text'
          label='Url da foto 1'
          id='adFormTitle'
          name='picture'
          onBlur={handlePictures}
          value={pictureUrl}
        />

        <button type='submit' className='btn btn-primary mb-3 d-block'>
          Criar
        </button>
      </form>
    </div>
  );
}

export default CreateAd;
