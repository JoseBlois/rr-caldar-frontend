/* eslint-disable */
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

const URL = 'https://caldar-application.herokuapp.com/technicians';

const getTechniciansFetching = () => ({
  type: GET_TECHNICIANS_FETCHING,
});

const getTechniciansFulfilled = (payload) => ({
  type: GET_TECHNICIANS_FULFILLED,
  payload,
});

const getTechniciansRejected = () => ({
  type: GET_TECHNICIANS_REJECTED,
});

export const getTechnicians = () => async (dispatch) => {
  dispatch(getTechniciansFetching());
  try {
    const data = await fecth(URL);
    const res = await data.json();
    return dispatch(getTechniciansFulfilled(res));
  } catch (err) {
    return dispatch(getTechniciansRejected())
  }
};

const addTechnicianFetching = () => ({
  type: ADD_TECHNICIANS_FETCHING,
});

const addTechnicianFulfilled = (technician) => ({
  type: ADD_TECHNICIANS_FULFILLED,
  payload: technician,
});

const addTechnicianRejected = () => ({
  type: ADD_TECHNICIANS_REJECTED,
});

export const addTechnician = (technician) => async (dispatch) => {
  dispatch(addTechnicianFetching());
  try {
    const data = await fecth(URL, {
      method: 'POST',
      body: JSON.stringify(technician),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const res = await data.json();
    return dispatch(addTechnicianFulfilled(res));
  } catch (err) {
    return dispatch(addTechnicianRejected());
  }
};

const updateTechnicianFetching = () => ({
  type: UPDATE_TECHNICIANS_FETCHING,
});

const updateTechnicianFulfilled = (technician, id) => ({
  type: UPDATE_TECHNICIANS_FULFILLED,
  payload: {
    technician,
    id,
  },
});

const updateTechnicianRejected = () => ({
  type: UPDATE_TECHNICIANS_REJECTED,
});

export const updateTechnician = (technician, id) => async (dispatch) => {
  dispatch(updateTechnicianFetching());
  try {
    const data = await fecth(`${URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(technician),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const res = await data.json();
    return dispatch(updateTechnicianFulfilled(res, id));
  } catch (err) {
    return dispatch(updateTechnicianRejected());
  }
};

const deleteTechnicianFetching = () => ({
  type: DELETE_TECHNICIANS_FETCHING,
});

const deleteTechnicianFulfilled = (id) => ({
  type: DELETE_TECHNICIANS_FULFILLED,
  payload: {
    id,
  },
});

const deleteTechnicianRejected = () => ({
  type: DELETE_TECHNICIANS_REJECTED,
});

export const deleteTechnician = (id) => async (dispatch) => {
  dispatch(deleteTechnicianFetching());
  try {
    const data = await fecth(`${URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (data.ok) {
      dispatch(deleteTechnicianFulfilled(id));
    } else {
      throw new Error('Error!');
    }
  } catch (err) {
    return dispatch(deleteTechnicianRejected());
  }
};
