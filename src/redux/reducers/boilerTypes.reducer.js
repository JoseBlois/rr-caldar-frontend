import {
  SHOW_BOILER_TYPES,
  CREATE_BOILER_TYPE,
  UPDATE_BOILER_TYPE_SUCCED,
  DELETE_BOILER_TYPE_FAILED,
} from '../types/TypesToBoilerTypes';

const initState = {
  boilerTypes: [],
  boilerTypesError: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_BOILER_TYPES:
      return {
        ...state,
        boilerTypes: action.payload,
      };
    case CREATE_BOILER_TYPE:
      return {
        ...state,
        boilerTypes: action.payload,
      };
    case UPDATE_BOILER_TYPE_SUCCED:
      return {
        ...state,
        boilerTypes: action.payload,
      };
    case DELETE_BOILER_TYPE_FAILED:
      return {
        ...state,
        boilerTypesError: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
