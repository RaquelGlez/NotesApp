import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { startRegisterWithEmailAndPassword } from "../../actions/auth";
import { removeErrorAction, setErrorAction } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";

export const Register = () => {
  const dispatch = useDispatch();
  //const state = useSelector(state => state.ui)
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailAndPassword(email, password, name))
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      //console.log('Name is required');
      dispatch(setErrorAction("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      //console.log('Email is not validate');
      dispatch(setErrorAction("Email is not validate"));
      return false;
    } else if (password !== password2 || password.length < 6) {
      //console.log('password should be at least 6 characters and match each other');
      dispatch(
        setErrorAction(
          "Password should be at least 6 characters and match each other"
        )
      );
      return false;
    }

    dispatch(removeErrorAction());
    return true;
  };

  return (
    <div>
      <h3 className="auth__title">Register</h3>
      <form 
        onSubmit={handleRegister}
        className="animate__animated animate__fadeIn animate__faster"
        >
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="app__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
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
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="app__input"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-block btn-primary mb-5">
          Register
        </button>

        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <div className="auth__link">
          <Link className="link" to="/auth/login">
            Already registered?
          </Link>
        </div>
      </form>
    </div>
  );
};
