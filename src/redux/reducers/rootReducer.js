import { combineReducers } from 'redux';
import boilersReducer from './boilersReducer';
import buildingReducer from './buildingsReducer';
import boilerTypesReducer from './boilerTypesReducer';

const rootReducer = combineReducers({
  boilers: boilersReducer,
  buildings: buildingReducer,
  boilerTypes: boilerTypesReducer,
});

export default rootReducer;
