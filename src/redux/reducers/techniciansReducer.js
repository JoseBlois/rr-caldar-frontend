import {
  GET_TECHNICIANS_FETCHING,
  GET_TECHNICIANS_FULFILLED,
  GET_TECHNICIANS_REJECTED,
  ADD_TECHNICIAN_FETCHING,
  ADD_TECHNICIAN_FULFILLED,
  ADD_TECHNICIAN_REJECTED,
  UPDATE_TECHNICIAN_FETCHING,
  UPDATE_TECHNICIAN_FULFILLED,
  UPDATE_TECHNICIAN_REJECTED,
  DELETE_TECHNICIAN_FETCHING,
  DELETE_TECHNICIAN_FULFILLED,
  DELETE_TECHNICIAN_BAD_REQUEST,
  DELETE_TECHNICIAN_REJECTED,
} from '../types/technicians';

const initialState = {
  loading: false,
  list: [],
  error: false,
};

const techniciansReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHNICIANS_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case GET_TECHNICIANS_FULFILLED:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_TECHNICIANS_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ADD_TECHNICIAN_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TECHNICIAN_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    case ADD_TECHNICIAN_REJECTED:
      return {
        ...state,
        error: true,
      };
    case UPDATE_TECHNICIAN_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TECHNICIAN_FULFILLED:
      return {
        ...state,
        loading: false,
        list: state.list.map((technician) => {
          if (technician._id === action.payload._id) {
            return action.payload;
          }
          return technician;
        }),
      };
    case UPDATE_TECHNICIAN_REJECTED:
      return {
        ...state,
        loading: false,
      };
    case DELETE_TECHNICIAN_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TECHNICIAN_BAD_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case DELETE_TECHNICIAN_FULFILLED:
      return {
        ...state,
        loading: false,
        list: [...state.list.filter((technician) => technician._id !== action.payload.id)],
      };
    case DELETE_TECHNICIAN_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default techniciansReducer;
