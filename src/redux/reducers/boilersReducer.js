import {
  GET_BOILERS_FETCHING,
  GET_BOILERS_FULFILLED,
  GET_BOILERS_REJECTED,
  ADD_BOILER_FETCHING,
  ADD_BOILER_FULFILLED,
  ADD_BOILER_REJECTED,
  UPDATE_BOILER_FETCHING,
  UPDATE_BOILER_FULFILLED,
  UPDATE_BOILER_REJECTED,
  DELETE_BOILER_FETCHING,
  DELETE_BOILER_FULFILLED,
  DELETE_BOILER_BAD_REQUEST,
  DELETE_BOILER_REJECTED,
} from '../types/boilersTypes';

const initialState = {
  loading: false,
  list: [],
  error: false,
};

const boilersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOILERS_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case GET_BOILERS_FULFILLED:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_BOILERS_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ADD_BOILER_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case ADD_BOILER_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload.building],
        loading: false,
      };
    case ADD_BOILER_REJECTED:
      return {
        ...state,
        error: true,
      };
    case UPDATE_BOILER_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_BOILER_FULFILLED:
      return {
        ...state,
        loading: false,
        list: state.list.map((boiler) => {
          // eslint-disable-next-line
          if (boiler._id === action.payload.id) {
            const updatedBoiler = action.payload.boiler;
            updatedBoiler.id = action.payload.id;
            return updatedBoiler;
          }
          return boiler;
        }),
      };
    case UPDATE_BOILER_REJECTED:
      return {
        ...state,
        loading: false,
      };
    case DELETE_BOILER_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BOILER_BAD_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case DELETE_BOILER_FULFILLED:
      return {
        ...state,
        loading: false,
        // eslint-disable-next-line
        list: [...state.list.filter((boiler) => boiler._id !== action.payload.id)],
      };
    case DELETE_BOILER_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default boilersReducer;
