import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { Notes } from "../components/notes/Notes";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebase-config";
import { login } from "../actions/auth";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [ checking, setChecking ] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged( async (user) => {
     // console.log(user);

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setisLoggedIn(true);

        //const notes = await loadNotes(user.uid)
        dispatch(startLoadingNotes(user.uid))

      } else {
        setisLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking]);

  return (
    <>
      {checking ? (
        <h1>Please wait...</h1>
      ) : (
        <Router>
          <div>
            <Switch>
              <PublicRoute 
                path="/auth" 
                isAuthenticated={isLoggedIn}
                component={AuthRouter} />
              <PrivateRoute 
                exact 
                isAuthenticated={isLoggedIn}
                path="/" 
                component={Notes} />
              <Redirect to="/auth/login" />
            </Switch>
          </div>
        </Router>
      )}
    </>
  );
};
