import { setHeaders } from '../../utils/requestUtils';
import {
  GET_BUILDINGS_FETCHING,
  GET_BUILDINGS_FULFILLED,
  GET_BUILDINGS_REJECTED,
  ADD_BUILDINGS_FETCHING,
  ADD_BUILDINGS_FULFILLED,
  ADD_BUILDINGS_REJECTED,
  UPDATE_BUILDINGS_FETCHING,
  UPDATE_BUILDINGS_FULFILLED,
  UPDATE_BUILDINGS_REJECTED,
  DELETE_BUILDINGS_FETCHING,
  DELETE_BUILDINGS_FULFILLED,
  DELETE_BUILDINGS_BAD_REQUEST,
  DELETE_BUILDINGS_REJECTED,
} from '../types/buildingsTypes';

const URL = 'https://caldar-application.herokuapp.com/buildings';

const getBuildingsFetching = () => ({
  type: GET_BUILDINGS_FETCHING,
});

const getBuildingsFulfilled = (payload) => ({
  type: GET_BUILDINGS_FULFILLED,
  payload,
});

const getBuildingsRejected = () => ({
  type: GET_BUILDINGS_REJECTED,
});

export const getBuildings = () => (dispatch) => {
  dispatch(getBuildingsFetching());
  return fetch(URL, {
    headers: setHeaders(),
  })
    .then((data) => data.json())
    .then((res) => dispatch(getBuildingsFulfilled(res)))
    .catch(() => dispatch(getBuildingsRejected()));
};

const deleteBuildingFetching = () => ({
  type: DELETE_BUILDINGS_FETCHING,
});

const deleteBuildingsFulfilled = (id) => ({
  type: DELETE_BUILDINGS_FULFILLED,
  payload: {
    id,
  },
});

const deleteBuildingsBadRequest = () => ({
  type: DELETE_BUILDINGS_BAD_REQUEST,
});

const deleteBuildingsRejected = () => ({
  type: DELETE_BUILDINGS_REJECTED,
});

export const deleteBuilding = (id) => (dispatch) => {
  dispatch(deleteBuildingFetching());
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: setHeaders(),
  })
    .then((data) => {
      if (!data.ok) {
        return false;
      }
      return true;
    })
    .then((res) => {
      if (res) {
        dispatch(deleteBuildingsFulfilled(id));
      } else {
        dispatch(deleteBuildingsBadRequest());
      }
    })
    .catch(() => dispatch(deleteBuildingsRejected()));
};

const addBuildingFetching = () => ({
  type: ADD_BUILDINGS_FETCHING,
});

const addBuildingFulfilled = (building) => ({
  type: ADD_BUILDINGS_FULFILLED,
  payload: {
    building,
  },
});

const addBuildingRejected = () => ({
  type: ADD_BUILDINGS_REJECTED,
});

export const addBuilding = (building) => (dispatch) => {
  dispatch(addBuildingFetching());
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(building),
    headers: setHeaders(),
  })
    .then((data) => data.json())
    .then((res) => dispatch(addBuildingFulfilled(res)))
    .catch(() => dispatch(addBuildingRejected()));
};

const updateBuildingFetching = () => ({
  type: UPDATE_BUILDINGS_FETCHING,
});

const updateBuildingFulfilled = (building, id) => ({
  type: UPDATE_BUILDINGS_FULFILLED,
  payload: {
    building,
    id,
  },
});

const updateBuildingRejected = () => ({
  type: UPDATE_BUILDINGS_REJECTED,
});

export const updateBuilding = (building, id) => (dispatch) => {
  dispatch(updateBuildingFetching());
  return fetch(`${URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(building),
    headers: setHeaders(),
  })
    .then((data) => data.json())
    .then((res) => dispatch(updateBuildingFulfilled(res, id)))
    .catch(() => dispatch(updateBuildingRejected()));
};
