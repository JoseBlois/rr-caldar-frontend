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
  DELETE_APPOINTMENTS_REJECTED,
} from '../types/appointmentsTypes';
import {
  requestGet,
  requestPost,
  requestPut,
  requestDelete,
} from '../../utils/requestUtils';

const URL = 'https://caldar-application.herokuapp.com/appointments/';

const getAppointmentsFetching = () => ({
  type: GET_APPOINTMENTS_FETCHING,
});

const getAppointmentsFulfilled = (payload) => ({
  type: GET_APPOINTMENTS_FULFILLED,
  payload,
});

const getAppointmentsRejected = () => ({
  type: GET_APPOINTMENTS_REJECTED,
});

export const getAppointments = () => (dispatch) => {
  dispatch(getAppointmentsFetching());
  return requestGet(URL)
    .then((res) => dispatch(getAppointmentsFulfilled(res)))
    .catch(() => getAppointmentsRejected());
};

const deleteAppointmentFetching = () => ({
  type: DELETE_APPOINTMENTS_FETCHING,
});

const deleteAppointmentFulfilled = (id) => ({
  type: DELETE_APPOINTMENTS_FULFILLED,
  payload: {
    id,
  },
});

const deleteAppointmentRejected = () => ({
  type: DELETE_APPOINTMENTS_REJECTED,
});

export const deleteAppointment = (id) => (dispatch) => {
  dispatch(deleteAppointmentFetching());
  return requestDelete(`${URL}/${id}`)
    .then(() => dispatch(deleteAppointmentFulfilled(id)))
    .catch(() => dispatch(deleteAppointmentRejected()));
};

const addAppointmentFetching = () => ({
  type: ADD_APPOINTMENTS_FETCHING,
});

const addAppointmentFulfilled = (appointment) => ({
  type: ADD_APPOINTMENTS_FULFILLED,
  payload: {
    appointment,
  },
});

const addAppointmentRejected = () => ({
  type: ADD_APPOINTMENTS_REJECTED,
});

export const addAppointment = (appointment) => (dispatch) => {
  dispatch(addAppointmentFetching());
  return requestPost(URL, {
    data: appointment,
  })
    .then((res) => dispatch(addAppointmentFulfilled(res)))
    .catch(() => dispatch(addAppointmentRejected()));
};

const updateAppointmentFetching = () => ({
  type: UPDATE_APPOINTMENTS_FETCHING,
});

const updateAppointmentFulfilled = (appointment, id) => ({
  type: UPDATE_APPOINTMENTS_FULFILLED,
  payload: {
    appointment,
    id,
  },
});

const updateAppointmentRejected = () => ({
  type: UPDATE_APPOINTMENTS_REJECTED,
});

export const updateAppointment = (appointment, id) => (dispatch) => {
  dispatch(updateAppointmentFetching());
  return requestPut(`${URL}/${id}`, {
    data: appointment,
  })
    .then(() => dispatch(updateAppointmentFulfilled(appointment, id)))
    .catch(() => dispatch(updateAppointmentRejected()));
};
