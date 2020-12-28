import { combineReducers } from 'redux';
import boilersReducer from './boilersReducer';
import buildingReducer from './buildingsReducer';

const rootReducer = combineReducers({
  boilers: boilersReducer,
  buildings: buildingReducer,
});

export default rootReducer;
