import {
  SHOW_BOILER_TYPES,
  DELETE_BOILER_TYPE,
  CREATE_BOILER_TYPE_SUCCED,
  CREATE_BOILER_TYPE,
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
    case DELETE_BOILER_TYPE:
      return {
        ...state,
        // boilerTypes: boilerTypes.filter((bl) => bl.id !== boilerType.id),
      };
    default:
      return state;
  }
};

export default reducer;
