import { combineReducers } from 'redux';
import boilersReducer from './boilersReducer';

const rootReducer = combineReducers({
  boilers: boilersReducer,
});

export default rootReducer;
