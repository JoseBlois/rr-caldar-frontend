import {
  GET_TECHNICIANS_FETCHING,
  GET_TECHNICIANS_FULFILLED,
  GET_TECHNICIANS_REJECTED,
  ADD_TECHNICIANS_FETCHING,
  ADD_TECHNICIANS_FULFILLED,
  ADD_TECHNICIANS_REJECTED,
  UPDATE_TECHNICIANS_FETCHING,
  UPDATE_TECHNICIANS_FULFILLED,
  UPDATE_TECHNICIANS_REJECTED,
  DELETE_TECHNICIANS_FETCHING,
  DELETE_TECHNICIANS_FULFILLED,
  DELETE_TECHNICIANS_REJECTED,
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
    case ADD_TECHNICIANS_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TECHNICIANS_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    case ADD_TECHNICIANS_REJECTED:
      return {
        ...state,
        error: true,
      };
    case UPDATE_TECHNICIANS_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TECHNICIANS_FULFILLED:
      return {
        ...state,
        loading: false,
        list: state.list.map((technician) => {
          if (technician.id === action.payload.id) {
            const updateTechnician = action.payload.technician;
            updateTechnician.id = action.payload.id;
            return updateTechnician;
          }
          return technician;
        }),
      };
    case UPDATE_TECHNICIANS_REJECTED:
      return {
        ...state,
        loading: false,
      };
    case DELETE_TECHNICIANS_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TECHNICIANS_FULFILLED:
      return {
        ...state,
        loading: false,
        list: [...state.list.filter((technician) => technician._id !== action.payload.id)],
      };
    case DELETE_TECHNICIANS_REJECTED:
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
