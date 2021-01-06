import {
  GET_BOILERTYPES_FETCHING,
  GET_BOILERTYPES_FULFILLED,
  GET_BOILERTYPES_REJECTED,
  ADD_BOILERTYPE_FETCHING,
  ADD_BOILERTYPE_FULFILLED,
  ADD_BOILERTYPE_REJECTED,
  UPDATE_BOILERTYPE_FETCHING,
  UPDATE_BOILERTYPE_FULFILLED,
  UPDATE_BOILERTYPE_REJECTED,
  DELETE_BOILERTYPE_FETCHING,
  DELETE_BOILERTYPE_FULFILLED,
  DELETE_BOILERTYPE_REJECTED,
} from '../types/TypesToBoilerTypes';

const initialState = {
  loading: false,
  list: [],
  error: false,
};

const boilerTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOILERTYPES_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case GET_BOILERTYPES_FULFILLED:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_BOILERTYPES_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ADD_BOILERTYPE_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case ADD_BOILERTYPE_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    case ADD_BOILERTYPE_REJECTED:
      return {
        ...state,
        error: true,
      };
    case UPDATE_BOILERTYPE_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_BOILERTYPE_FULFILLED:
      return {
        ...state,
        loading: false,
        list: state.list.map((boilerType) => {
          if (boilerType._id === action.payload.id) {
            const updatedBoilerType = action.payload.boilerType;
            updatedBoilerType.id = action.payload.id;
            return updatedBoilerType;
          }
          return boilerType;
        }),
      };
    case UPDATE_BOILERTYPE_REJECTED:
      return {
        ...state,
        loading: false,
      };
    case DELETE_BOILERTYPE_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BOILERTYPE_FULFILLED:
      return {
        ...state,
        loading: false,
        list: [...state.list.filter((boilerType) => boilerType._id !== action.payload.id)],
      };
    case DELETE_BOILERTYPE_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default boilerTypesReducer;
