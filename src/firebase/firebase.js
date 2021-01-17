/* eslint-disable prefer-destructuring */
import firebase from 'firebase/app';
import 'firebase/auth';

import store from '../redux';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY || '',
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || '',
  appProjectId: process.env.REACT_APP_PROJECT_ID || '',
  appStorageBucket: process.env.REACT_APP_STORAGE_BUCKET || '',
  appMessagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || '',
  appId: process.env.REACT_APP_APP_ID || '',
  appMeasurementId: process.env.REACT_APP_MEASUREMENT_ID || '',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;

const setToken = async (user) => {
  const auth = store.getState().auth;
  if (auth.authenticated) {
    const token = await user.getIdToken();
    localStorage.setItem('token', token);
  }
};

export const tokenListener = () => {
  firebase.auth().onIdTokenChanged((user) => {
    if (user) {
      setToken(user);
    }
  });
};
