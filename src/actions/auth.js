import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startLoginEmail = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "pedro"));
    }, 3500);
  };
};

export const startLoginGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({user}) => {
        dispatch(
          login(user.uid, user.displayName)
        )
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
