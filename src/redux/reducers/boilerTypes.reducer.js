import {
  SHOW_BOILER_TYPES,
  CREATE_BOILER_TYPE,
  UPDATE_BOILER_TYPE_SUCCED,
} from '../types/TypesToBoilerTypes';

const initState = {
  boilerTypes: [],
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
        boilerType: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
