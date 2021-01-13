import firebase from 'firebase/app';
import 'firebase/auth';

import rootReducer from '../redux/reducers/rootReducer';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY || '',
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || '',
  appProjectId: process.env.REACT_APP_PROJECT_ID || '',
  appStorageBucket: process.env.REACT_APP_STORAGE_BUCKET || '',
  appMessagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || '',
  appId: process.env.REACT_APP_APP_ID || '',
  appMeasurementId: process.env.REACT_APP_MEASUREMENT_ID || '',
};

console.log(process.env);
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
