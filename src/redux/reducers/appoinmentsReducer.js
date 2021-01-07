import {
  GET_APPOINTMENTS_FETCHING,
  GET_APPOINTMENTS_FULFILLED,
  GET_APPOINTMENTS_REJECTED,
  ADD_APPOINTMENTS_FETCHING,
  ADD_APPOINTMENTS_FULFILLED,
  ADD_APPOINTMENTS_REJECTED,
  UPDATE_APPOINTMENTS_FETCHING,
  UPDATE_APPOINTMENTS_FULFILLED,
  UPDATE_APPOINTMENTS_REJECTED,
  DELETE_APPOINTMENTS_FETCHING,
  DELETE_APPOINTMENTS_FULFILLED,
  DELETE_APPOINTMENTS_BAD_REQUEST,
  DELETE_APPOINTMENTS_REJECTED,
} from '../types/appointmentsTypes';

const initialState = {
  loading: false,
  list: [],
  error: false,
};

const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_APPOINTMENTS_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case GET_APPOINTMENTS_FULFILLED:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_APPOINTMENTS_REJECTED:
      return {
        ...state,
        error: true,
      };
    case DELETE_APPOINTMENTS_FETCHING:
      return {
        ...state,
        laoding: true,
      };
    case DELETE_APPOINTMENTS_FULFILLED:
      return {
        ...state,
        loading: false,
        list: [...state.list.filter((appointment) => appointment._id !== action.payload.id)],
      };
    case DELETE_APPOINTMENTS_REJECTED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default appointmentsReducer;
