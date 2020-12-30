import { combineReducers } from 'redux';
import boilersReducer from './boilersReducer';

const rootReducer = combineReducers({
  boilerss: boilersReducer,
});

export default rootReducer;
