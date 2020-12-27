import {
  GET_BUILDINGS_FETCHING,
  GET_BUILDINGS_RESOLVED,
  GET_BUILDINGS_REJECTED,
  ADD_BUILDINGS_FETCHING,
  ADD_BUILDINGS_RESOLVED,
  ADD_BUILDINGS_REJECTED,
  UPDATE_BUILDINGS_FETCHING,
  UPDATE_BUILDINGS_RESOLVED,
  UPDATE_BUILDINGS_REJECTED,
  DELETE_BUILDINGS_FETCHING,
  DELETE_BUILDINGS_RESOLVED,
  DELETE_BUILDINGS_REJECTED,
} from '../types/buildingsTypes';

const buildingReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BUILDINGS_FETCHING:
      return [1];
    case GET_BUILDINGS_RESOLVED:
      return [2];
    case GET_BUILDINGS_REJECTED:
      return [3];
    case ADD_BUILDINGS_FETCHING:
      return [4];
    case ADD_BUILDINGS_RESOLVED:
      return [5];
    case ADD_BUILDINGS_REJECTED:
      return [6];
    case UPDATE_BUILDINGS_FETCHING:
      return [7];
    case UPDATE_BUILDINGS_RESOLVED:
      return [8];
    case UPDATE_BUILDINGS_REJECTED:
      return [9];
    case DELETE_BUILDINGS_FETCHING:
      return [10];
    case DELETE_BUILDINGS_RESOLVED:
      return [11];
    case DELETE_BUILDINGS_REJECTED:
      return [12];
    default:
      return state;
  }
};

export default buildingReducer;
