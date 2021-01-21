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
  DELETE_BOILER_REJECTED,
} from '../types/boilersTypes';
import {
  requestGet,
  requestPost,
  requestPut,
  requestDelete,
} from '../../utils/requestUtils';

const URL = 'https://caldar-application.herokuapp.com/boilers';

const getBoilersFetching = () => ({
  type: GET_BOILERS_FETCHING,
});

const getBoilersFulfilled = (payload) => ({
  type: GET_BOILERS_FULFILLED,
  payload,
});

const getBoilersRejected = () => ({
  type: GET_BOILERS_REJECTED,
});

export const getBoilers = () => async (dispatch) => {
  dispatch(getBoilersFetching());
  return requestGet(URL)
    .then((res) => dispatch(getBoilersFulfilled(res)))
    .catch(() => dispatch(getBoilersRejected()));
};

const deleteBoilerFetching = () => ({
  type: DELETE_BOILER_FETCHING,
});

const deleteBoilerFulfilled = (id) => ({
  type: DELETE_BOILER_FULFILLED,
  payload: {
    id,
  },
});

const deleteBoilerRejected = () => ({
  type: DELETE_BOILER_REJECTED,
});

export const deleteBoiler = (id) => async (dispatch) => {
  dispatch(deleteBoilerFetching());
  return requestDelete(`${URL}/${id}`)
    .then(() => dispatch(deleteBoilerFulfilled(id)))
    .catch(() => dispatch(deleteBoilerRejected()));
};

const addBoilerFetching = () => ({
  type: ADD_BOILER_FETCHING,
});

const addBoilerFulfilled = (boiler) => ({
  type: ADD_BOILER_FULFILLED,
  payload: boiler,
});

const addBoilerRejected = () => ({
  type: ADD_BOILER_REJECTED,
});

export const addBoiler = (boiler) => async (dispatch) => {
  dispatch(addBoilerFetching());
  return requestPost(URL, {
    data: boiler,
  })
    .then((res) => dispatch(addBoilerFulfilled(res)))
    .catch(() => dispatch(addBoilerRejected()));
};

const updateBoilerFetching = () => ({
  type: UPDATE_BOILER_FETCHING,
});

const updateBoilerFulfilled = (boiler, id) => ({
  type: UPDATE_BOILER_FULFILLED,
  payload: {
    boiler,
    id,
  },
});

const updateBoilerRejected = () => ({
  type: UPDATE_BOILER_REJECTED,
});

export const updateBoiler = (boiler, id) => async (dispatch) => {
  dispatch(updateBoilerFetching());
  return requestPut(`${URL}/${id}`, {
    data: boiler,
  })
    .then((res) => dispatch(updateBoilerFulfilled(res, id)))
    .catch(() => dispatch(updateBoilerRejected()));
};
