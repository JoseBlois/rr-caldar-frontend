import { setHeaders } from '../../utils/requestUtils';
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
  fetch(URL, {
    headers: setHeaders(),
  })
    .then((data) => data.json())
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
  fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: setHeaders(),
  })
    .then((data) => data.json())
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
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify(appointment),
    headers: setHeaders(),
  })
    .then((data) => {
      if (!data.ok) {
        return false;
      }
      return data.json();
    })
    .then((res) => {
      if (res) {
        dispatch(addAppointmentFulfilled(res));
      } else {
        dispatch(dispatch(addAppointmentRejected()));
      }
    })
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
  return fetch(`${URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(appointment),
    headers: setHeaders(),
  })
    .then((data) => {
      if (!data.ok) {
        return false;
      }
      return data.json();
    })
    .then((res) => {
      if (res) {
        dispatch(updateAppointmentFulfilled(appointment, id));
      } else {
        dispatch(updateAppointmentRejected());
      }
    })
    .catch(() => dispatch(updateAppointmentRejected()));
};
