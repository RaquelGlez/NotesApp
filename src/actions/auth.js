import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import Swal from 'sweetalert2'
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";
import { 
  noteLogout, 
  //startLoadingNotes
 } from "./notes";

export const startLoginEmail = (email, password) => {
  return (dispatch) => {

    dispatch(startLoading());

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({user})=>{
        dispatch(login(user.uid, user.displayName))

        dispatch(finishLoading());
      })
      .catch(e=>{
        console.log(e);
        dispatch(finishLoading());
        Swal.fire('Error', e.message, 'error')
      })

    /* setTimeout(() => {
      dispatch(login(123, "pedro"));
    }, 3500); */
  };
};

export const startRegisterWithEmailAndPassword = (email, password, name) => {
  return (dispatch) => {

    dispatch(startLoading());

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async({ user }) => {

        await user.updateProfile({displayName:name});
        dispatch(
          login(user.uid, user.displayName)
        );
        dispatch(finishLoading());
      })
      .catch(e=>{
        console.log(e);
        Swal.fire('Error', e.message, 'error')
        dispatch(finishLoading());
      });
  };
};

export const startLoginGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
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

export const startLogout = () => {
  return async(dispatch)=> {
    await firebase.auth().signOut();

    dispatch(logout());

    dispatch( noteLogout() );

  }
}


export const logout = () => ({
  type: types.logout
})