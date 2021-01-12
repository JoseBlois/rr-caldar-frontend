import {
  LOGIN_FETCHING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  SET_AUTHENTICATION,
  LOGOUT_FETCHING,
  LOGOUT_FULFILLED,
  LOGOUT_REJECTED,
} from '../types/authTypes';
import firebase from '../../firebase/firebase';

const loginFetching = () => ({
  type: LOGIN_FETCHING,
});

const loginFulfilled = () => ({
  type: LOGIN_FULFILLED,
});

const loginRejected = () => ({
  type: LOGIN_REJECTED,
});

export const loginWithFirebase = (credentials) => (dispatch) => {
  dispatch(loginFetching());
  return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(async (response) => {
      const token = await response.user.getIdToken();
      localStorage.setItem('token', token);
      return dispatch(loginFulfilled());
    })
    .catch(() => (dispatch(loginRejected())));
};

export const setAuthentication = () => ({
  type: SET_AUTHENTICATION,
});

const logoutFetching = () => ({
  type: LOGOUT_FETCHING,
});

const logoutFulfilled = () => ({
  type: LOGOUT_FULFILLED,
});

const logoutRejected = () => ({
  type: LOGOUT_REJECTED,
});

export const logout = () => (dispatch) => {
  dispatch(logoutFetching());
  return firebase.auth().signOut()
    .then(() => {
      localStorage.removeItem('token');
      return dispatch(logoutFulfilled());
    }).catch(() => (dispatch(logoutRejected)));
};
