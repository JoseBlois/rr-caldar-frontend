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
    case ADD_APPOINTMENTS_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case ADD_APPOINTMENTS_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload.appointment],
        loading: false,
      };
    case ADD_APPOINTMENTS_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case UPDATE_APPOINTMENTS_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_APPOINTMENTS_FULFILLED:
      return {
        ...state,
        loading: false,
        list: state.list.map((appointment) => {
          if (appointment._id === action.payload.id) {
            const updatedAppointment = action.payload.appointment;
            updatedAppointment._id = action.payload.id;
            return updatedAppointment;
          }
          return appointment;
        }),
      };
    case UPDATE_APPOINTMENTS_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default appointmentsReducer;
