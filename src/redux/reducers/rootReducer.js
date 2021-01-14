import { combineReducers } from 'redux';
import boilersReducer from './boilersReducer';
import buildingReducer from './buildingsReducer';
import boilerTypesReducer from './boilerTypesReducer';
import techniciansReducer from './techniciansReducer';
import appointmentsReducer from './appoinmentsReducer';
import companiesReducer from './companiesReducer';

const rootReducer = combineReducers({
  boilers: boilersReducer,
  buildings: buildingReducer,
  boilerTypes: boilerTypesReducer,
  technicians: techniciansReducer,
  appointments: appointmentsReducer,
  companies: companiesReducer,
});

export default rootReducer;
