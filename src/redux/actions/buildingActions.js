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

const URL = 'https://caldar-application.herokuapp.com/buildings'

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
  return fetch(URL)
    .then((data) => data.json())
    .then((res) => dispatch(getBuildingsFulfilled(res)))
    .catch((err) => dispatch(getBuildingsRejected()));
};

const deleteBuildingFetching = () => ({
  type: DELETE_BUILDINGS_FETCHING,
})

const deleteBuildingsFulfilled = (id) => ({
  type: DELETE_BUILDINGS_FULFILLED,
  payload: {
    id,
  }
})

const deleteBuildingsBadRequest = () => ({
  type: DELETE_BUILDINGS_BAD_REQUEST,
})

const deleteBuildingsRejected = () => ({
  type: DELETE_BUILDINGS_REJECTED,
})

export const deleteBuilding = (id) => (dispatch) => {
  dispatch(deleteBuildingFetching());
  return fetch(`${URL}/${id}`, {
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
    dispatch(deleteBuildingsBadRequest());
    }
  })
  .catch((err) => dispatch(deleteBuildingsRejected()));
};

const addBuildingFetching = () => ({
  type: ADD_BUILDINGS_FETCHING
});

const addBuildingFulfilled = (building) => ({
  type: ADD_BUILDINGS_FULFILLED,
  payload: {
    building,
  }
});

const addBuildingRejected = () => ({
  type: ADD_BUILDINGS_REJECTED,
})

export const addBuilding = (building) => (dispatch) => {
  dispatch(addBuildingFetching());
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(building),
  })
  .then((data) => data.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
}

const updateBuildingFetching = () => ({
  type: UPDATE_BUILDINGS_FETCHING
})

const updateBuildingFulfilled = (building) => ({
  type: UPDATE_BUILDINGS_FULFILLED,
  payload: {
    building
  }
})

const updateBuildingRejected = () => ({
  type: UPDATE_BUILDINGS_REJECTED
});

export const updateBuilding = (building) => (dispatch) => {
  dispatch(updateBuildingFetching());
  return fetch(`${URL}/${buidlgin.id}`,{
    method: 'PUT',
    body: JSON.stringify(building)
  })
  .then((data) => data.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
};