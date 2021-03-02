import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <h3 className="auth__title">Login</h3>
      <form>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="app__input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="app__input"
        />
        <button type="submit" className="btn btn-block btn-primary">
          Login
        </button>
        <div className="auth__social-networks">
          {/* <p>Inicia sesion con</p> */}
          <p>or</p>
          <div className="google-btn">
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
