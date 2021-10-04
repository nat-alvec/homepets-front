import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../apis/api';

import { AuthContext } from '../../contexts/authContext';

function Login(props) {
  const authContext = useContext(AuthContext);

  const history = useHistory();

  const [state, setState] = useState({ password: '', email: '' });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  useEffect(() => {
    // Caso o usuário já esteja logado, redirecione para página principal
    if (authContext.loggedInUser.token) {
      history.push('/ads');
    }
  }, [authContext.loggedInUser, history]);

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post('/login', state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: '', email: '' });
      props.history.push('/book/all');
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className='container mt-4'>
      <form onSubmit={handleSubmit}>
        <h4>Preencha seus dados para entrar</h4>

        <div className='mb-3 mt-4'>
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
          Login
        </button>
        <Link to='/auth/signup' className='link-primary fs-5 d-block mt-3'>
          Não possui cadastro? Clique aqui para se cadastrar!
        </Link>
      </form>
    </div>
  );
}

export default Login;
