import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../apis/api';

import { AuthContext } from '../../contexts/authContext';

function Signup(props) {
  const [state, setState] = useState({ name: '', password: '', email: '' });
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
  });
  const history = useHistory();
  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    // Caso o usuário já esteja logado, redirecione para página principal
    if (loggedInUser.token) {
      history.push('/');
    }
  }, [loggedInUser, history]);

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
      history.push('/auth/login');
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
      if (err.response.data.msg.includes('email')) {
        alert('Esse e-mail já está cadastrado');
      } else if (err.response.data.msg.includes('Password')) {
        alert(
          'Senha muito fraca, escolha uma mais forte com no mínimo 8 caracteres. Inclua caracteres especiais, letras maiúsculas, minúsculas e números!'
        );
      } else {
        alert('Preencha todos os campos');
      }
    }
  }

  return (
    <div className='container mt-4 w-50'>
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
        <Link to='/auth/login' className='link-primary fs-6 d-block mt-3'>
          Já está cadastrado? Clique aqui para entrar!
        </Link>
      </form>
    </div>
  );
}

export default Signup;
