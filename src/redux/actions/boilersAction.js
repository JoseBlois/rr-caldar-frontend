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
  DELETE_BOILER_BAD_REQUEST,
  DELETE_BOILER_REJECTED,
} from '../types/boilersTypes';

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

const getBoilers = () => (dispatch) => {
  dispatch(getBoilersFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((res) => dispatch(getBoilersFulfilled(res)))
    .catch((err) => dispatch(getBoilersRejected()));
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

const deleteBoilerBadRequest = () => ({
  type: DELETE_BOILER_BAD_REQUEST,
});

const deleteBoilerRejected = () => ({
  type: DELETE_BOILER_REJECTED,
});

const deleteBoiler = (id) => (dispatch) => {
  dispatch(deleteBoilerFetching());
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((data) => {
      if (data.status === 400) {
        return false;
      }
      return true;
    })
    .then((res) => {
      if (res) {
        dispatch(deleteBoilerFulfilled(id));
      } else {
        dispatch(deleteBoilerBadRequest());
      }
    })
    .catch((err) => dispatch(deleteBoilerRejected()));
};

const addBoilerFetching = () => ({
  type: ADD_BOILER_FETCHING,
});

const addBoilerFulfilled = (boiler) => ({
  type: ADD_BOILER_FULFILLED,
  payload: {
    boiler,
  },
});

const addBoilerRejected = () => ({
  type: ADD_BOILER_REJECTED,
});

const addBoiler = (boiler) => (dispatch) => {
  dispatch(addBoilerFetching());
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(boiler),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((data) => data.json())
    .then((res) => dispatch(addBoilerFulfilled(res)))
    .catch((err) => dispatch(addBoilerRejected()));
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

const updateBoiler = (boiler, id) => (dispatch) => {
  dispatch(updateBoilerFetching());
  console.log(id);
  return fetch(`${URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(boiler),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((data) => data.json())
    .then((res) => dispatch(updateBoilerFulfilled(res, id)))
    .catch((err) => dispatch(updateBoilerRejected()));
};

export {
  getBoilers,
  deleteBoiler,
  addBoiler,
  updateBoiler,
};
