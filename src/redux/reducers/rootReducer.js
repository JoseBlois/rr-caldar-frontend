import { combineReducers } from 'redux';
import boilersReducer from './boilersReducer';
import buildingReducer from './buildingsReducer';
import boilerTypesReducer from './boilerTypesReducer';
import techniciansReducer from './techniciansReducer';
import appointmentsReducer from './appoinmentsReducer';
import companiesReducer from './companiesReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  boilers: boilersReducer,
  buildings: buildingReducer,
  boilerTypes: boilerTypesReducer,
  technicians: techniciansReducer,
  appointments: appointmentsReducer,
  companies: companiesReducer,
  auth: authReducer,
});

export default rootReducer;
