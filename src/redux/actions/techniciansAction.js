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
  DELETE_TECHNICIAN_REJECTED,
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
    const data = await fetch(URL);
    const res = await data.json();
    return dispatch(getTechniciansFulfilled(res));
  } catch (err) {
    return dispatch(getTechniciansRejected());
  }
};

const addTechnicianFetching = () => ({
  type: ADD_TECHNICIAN_FETCHING,
});

const addTechnicianFulfilled = (technician) => ({
  type: ADD_TECHNICIAN_FULFILLED,
  payload: technician,
});

const addTechnicianRejected = () => ({
  type: ADD_TECHNICIAN_REJECTED,
});

export const addTechnician = (technician) => async (dispatch) => {
  dispatch(addTechnicianFetching());
  try {
    const data = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(technician),
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (!data.ok) {
      throw new Error(`Error: ${data.statusText} - ${data.status}`);
    }
    const res = await data.json();
    return dispatch(addTechnicianFulfilled(res));
  } catch (err) {
    return dispatch(addTechnicianRejected());
  }
};

const updateTechnicianFetching = () => ({
  type: UPDATE_TECHNICIAN_FETCHING,
});

const updateTechnicianFulfilled = (technician) => ({
  type: UPDATE_TECHNICIAN_FULFILLED,
  payload: technician,
});

const updateTechnicianRejected = () => ({
  type: UPDATE_TECHNICIAN_REJECTED,
});

export const updateTechnician = (technician, id) => async (dispatch) => {
  dispatch(updateTechnicianFetching());
  try {
    const data = await fetch(`${URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(technician),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const res = await data.json();
    return dispatch(updateTechnicianFulfilled(res));
  } catch (err) {
    return dispatch(updateTechnicianRejected());
  }
};

const deleteTechnicianFetching = () => ({
  type: DELETE_TECHNICIAN_FETCHING,
});

const deleteTechnicianFulfilled = (id) => ({
  type: DELETE_TECHNICIAN_FULFILLED,
  payload: {
    id,
  },
});

const deleteTechnicianRejected = () => ({
  type: DELETE_TECHNICIAN_REJECTED,
});

export const deleteTechnician = (id) => async (dispatch) => {
  dispatch(deleteTechnicianFetching());
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((data) => {
      if (!data.ok) {
        throw new Error('Error');
      }
      return data.json();
    })
    .then(() => {
      dispatch(deleteTechnicianFulfilled(id));
    })
    .catch(() => dispatch(deleteTechnicianRejected()));
};
