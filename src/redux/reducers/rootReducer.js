import { combineReducers } from 'redux';
import boilersReducer from './boilersReducer';
import buildingReducer from './buildingsReducer';
import boilerTypesReducer from './boilerTypesReducer';
import techniciansReducer from './techniciansReducer';

const rootReducer = combineReducers({
  boilers: boilersReducer,
  buildings: buildingReducer,
  boilerTypes: boilerTypesReducer,
  technicians: techniciansReducer,
});

export default rootReducer;
