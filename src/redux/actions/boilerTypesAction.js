/* eslint-disable */
import {
  GET_BOILERTYPES_FETCHING,
  GET_BOILERTYPES_FULFILLED,
  GET_BOILERTYPES_REJECTED,
  ADD_BOILERTYPE_FETCHING,
  ADD_BOILERTYPE_FULFILLED,
  ADD_BOILERTYPE_REJECTED,
  UPDATE_BOILERTYPE_FETCHING,
  UPDATE_BOILERTYPE_FULFILLED,
  UPDATE_BOILERTYPE_REJECTED,
  DELETE_BOILERTYPE_FETCHING,
  DELETE_BOILERTYPE_FULFILLED,
  DELETE_BOILERTYPE_REJECTED,
} from '../types/TypesToBoilerTypes';

const URL = 'https://caldar-application.herokuapp.com/boilerTypes';

const getBoilerTypesFetching = () => ({
  type: GET_BOILERTYPES_FETCHING,
});

const getBoilerTypesFulfilled = (payload) => ({
  type: GET_BOILERTYPES_FULFILLED,
  payload,
});

const getBoilerTypesRejected = () => ({
  type: GET_BOILERTYPES_REJECTED,
});

export const getBoilerTypes = () => async (dispatch) => {
  dispatch(getBoilerTypesFetching());
  try {
    const data = await fetch(URL);
    const res = await data.json();
    return dispatch(getBoilerTypesFulfilled(res));
  } catch (err) {
    return dispatch(getBoilerTypesRejected());
  }
};

const deleteBoilerTypeFetching = () => ({
  type: DELETE_BOILERTYPE_FETCHING,
});

const deleteBoilerTypeFulfilled = (id) => ({
  type: DELETE_BOILERTYPE_FULFILLED,
  payload: {
    id,
  },
});

const deleteBoilerTypeRejected = () => ({
  type: DELETE_BOILERTYPE_REJECTED,
});

export const deleteBoilerType = (id) => async (dispatch) => {
  dispatch(deleteBoilerTypeFetching());
  try {
    const data = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (data.ok) {
      dispatch(deleteBoilerTypeFulfilled(id));
    } else {
      throw new Error('Error');
    }
  } catch (err) {
    return dispatch(deleteBoilerTypeRejected());
  }
};

const addBoilerTypeFetching = () => ({
  type: ADD_BOILERTYPE_FETCHING,
});

const addBoilerTypeFulfilled = (boilerType) => ({
  type: ADD_BOILERTYPE_FULFILLED,
  payload: boilerType,
});

const addBoilerTypeRejected = () => ({
  type: ADD_BOILERTYPE_REJECTED,
});

export const addBoilerType = (boilerType) => async (dispatch) => {
  dispatch(addBoilerTypeFetching());
  try {
    const data = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(boilerType),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const res = await data.json();
    return dispatch(addBoilerTypeFulfilled(res));
  } catch (err) {
    return dispatch(addBoilerTypeRejected());
  }
};

const updateBoilerTypeFetching = () => ({
  type: UPDATE_BOILERTYPE_FETCHING,
});

const updateBoilerTypeFulfilled = (boilerType, id) => ({
  type: UPDATE_BOILERTYPE_FULFILLED,
  payload: {
    boilerType,
    id,
  },
});

const updateBoilerTypeRejected = () => ({
  type: UPDATE_BOILERTYPE_REJECTED,
});

export const updateBoilerType = (boilerType, id) => async (dispatch) => {
  dispatch(updateBoilerTypeFetching());
  try {
    const data = await fetch(`${URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(boilerType),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const res = await data.json();
    return dispatch(updateBoilerTypeFulfilled(res, id));
  } catch (err) {
    return dispatch(updateBoilerTypeRejected());
  }
};
