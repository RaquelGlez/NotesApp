import React from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {startLoginEmail, startLoginGoogle} from '../../actions/auth';

export const Login = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "maria@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleLogin =(e)=>{
    e.preventDefault()
    dispatch(startLoginEmail(email, password))
  }

  const handleGoogleLogin = () => {
    dispatch(startLoginGoogle());
  }

  return (
    <div>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="app__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="app__input"
          value={password}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-block btn-primary">
          Login
        </button>
        <div className="auth__social-networks">
          {/* <p>Inicia sesion con</p> */}
          <p>or</p>
          <div 
            className="google-btn"
            onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <div className="auth__link">
          <Link className="link" to="/auth/register">
            Create new account
          </Link>
        </div>
      </form>
    </div>
  );
};
