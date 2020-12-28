/* eslint-disable */
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

export const getBuildingsFetching = () => ({
  type: GET_BUILDINGS_FETCHING,
});

export const getBuildingsFulfilled = (payload) => ({
  type: GET_BUILDINGS_FULFILLED,
  payload,
});

export const getBuildingsRejected = () => ({
  type: GET_BUILDINGS_REJECTED,
});

export const getBuildings = () => (dispatch) => {
  dispatch(getBuildingsFetching());
  return fetch('https://caldar-application.herokuapp.com/buildings')
    .then((data) => data.json())
    .then((res) => dispatch(getBuildingsFulfilled(res)))
    .catch((err) => dispatch(getBuildingsRejected()));
};

export const deleteBuildingFetching = () => ({
  type: DELETE_BUILDINGS_FETCHING,
})

export const deleteBuildingsFulfilled = (id) => ({
  type: DELETE_BUILDINGS_FULFILLED,
  payload: {
    id,
  }
})

export const deleteBuildingsBarRequest = () => ({
  type: DELETE_BUILDINGS_BAD_REQUEST,
})

export const deleteBuildingsRejected = () => ({
  type: DELETE_BUILDINGS_REJECTED,
})

export const deleteBuilding = (id) => (dispatch) => {
  dispatch(deleteBuildingFetching());
  return fetch(`https://caldar-application.herokuapp.com/buildings/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    }
  })
  .then((data) => {
    if(data.status === 400) {
      return false
    }
    return true
  })
  .then((res) => {
    if(res){
    dispatch(deleteBuildingsFulfilled(id));
    }else{
    dispatch(deleteBuildingsBarRequest());
    }
  })
  .catch((err) => dispatch(deleteBuildingsRejected()));
};
