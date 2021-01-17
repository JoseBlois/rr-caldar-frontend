/* eslint-disable */
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
import setHeaders from '../utils/headersJwt';

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
  try {
    const data = await fetch(URL);
    const res = await data.json();
    return dispatch(getBoilersFulfilled(res));
  } catch (err) {
    return dispatch(getBoilersRejected());
  }
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
  try {
    const data = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
      headers: setHeaders(),
    });
    if (data.ok) {
      dispatch(deleteBoilerFulfilled(id));
    } else {
      throw new Error('Error');
    }
  } catch (err) {
    return dispatch(deleteBoilerRejected());
  }
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
  try {
    const data = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(boiler),
      headers: setHeaders(),
    });
    const res = await data.json();
    return dispatch(addBoilerFulfilled(res));
  } catch (err) {
    return dispatch(addBoilerRejected());
  }
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
  try {
    const data = await fetch(`${URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(boiler),
      headers: setHeaders(),
    });
    const res = await data.json();
    return dispatch(updateBoilerFulfilled(res, id));
  } catch (err) {
    return dispatch(updateBoilerRejected());
  }
};
