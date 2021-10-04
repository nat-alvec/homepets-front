import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../apis/api';

function Signup(props) {
  const [state, setState] = useState({ name: '', password: '', email: '' });
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post('/signup', state);
      console.log(response);
      setErrors({ name: '', password: '', email: '' });
      props.history.push('/auth/login');
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
      if (err.response.data.msg.includes('email')) {
        alert('Esse e-mail já está cadastrado');
      }
    }
  }

  return (
    <div className='container mt-4'>
      <h4>Preencha os campos abaixo pra você se tornar um membro Homepets</h4>
      <form onSubmit={handleSubmit}>
        <div className='mb-3 mt-4'>
          <label htmlFor='InputFullName' className='form-label'>
            Nome completo
          </label>
          <input
            type='text'
            className='form-control'
            id='InputFullName'
            name='name'
            value={state.name}
            error={errors.name}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='InputEmail' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='InputEmail'
            name='email'
            aria-describedby='emailHelp'
            value={state.email}
            error={errors.email}
            onChange={handleChange}
          />
          <div id='emailHelp' className='form-text'>
            Nós nunca compartilharemos seu e-mail com ninguém.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='InputPassword' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='InputPassword'
            name='password'
            value={state.password}
            error={errors.password}
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Cadastrar
        </button>
        <Link to='/auth/login' className='link-primary fs-5 d-block mt-3'>
          Já está cadastrado? Clique aqui para entrar!
        </Link>
      </form>
    </div>
  );
}

export default Signup;
