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
  DELETE_BUILDINGS_REJECTED,
} from '../types/buildingsTypes';
import {
  requestGet,
  requestPost,
  requestPut,
  requestDelete,
} from '../../utils/requestUtils';

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
  return requestGet(URL)
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

const deleteBuildingsRejected = () => ({
  type: DELETE_BUILDINGS_REJECTED,
});

export const deleteBuilding = (id) => (dispatch) => {
  dispatch(deleteBuildingFetching());
  return requestDelete(`${URL}/${id}`)
    .then(() => dispatch(deleteBuildingsFulfilled(id)))
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
  return requestPost(URL, {
    data: building,
  })
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
  return requestPut(`${URL}/${id}`, {
    data: building,
  })
    .then((res) => dispatch(updateBuildingFulfilled(res, id)))
    .catch(() => dispatch(updateBuildingRejected()));
};
