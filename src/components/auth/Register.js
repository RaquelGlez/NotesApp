import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div>
      <h3 className="auth__title">Register</h3>
      <form>
      <input
          type="text"
          placeholder="Name"
          name="name"
          className="app__input"
          autoComplete="off"
        />
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
         <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="app__input"
        />
        <button type="submit" className="btn btn-block btn-primary mb-5">
          Register
        </button>
        <div className="auth__link">
          <Link className="link" to="/auth/login">
            Already registered?
          </Link>
        </div>
      </form>
    </div>
  );
};
