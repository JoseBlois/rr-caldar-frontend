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
import {
  requestGet,
  requestPost,
  requestPut,
  requestDelete,
} from '../../utils/requestUtils';

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
  return requestGet(URL)
    .then((res) => dispatch(getTechniciansFulfilled(res)))
    .catch(() => dispatch(getTechniciansRejected()));
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
  return requestPost(URL, {
    data: technician,
  })
    .then((res) => dispatch(addTechnicianFulfilled(res)))
    .catch(() => dispatch(addTechnicianRejected()));
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
  return requestPut(`${URL}/${id}`, {
    data: technician,
  })
    .then((res) => dispatch(updateTechnicianFulfilled(res)))
    .catch(() => dispatch(updateTechnicianRejected()));
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
  return requestDelete(`${URL}/${id}`)
    .then(() => dispatch(deleteTechnicianFulfilled(id)))
    .catch(() => dispatch(deleteTechnicianRejected()));
};
