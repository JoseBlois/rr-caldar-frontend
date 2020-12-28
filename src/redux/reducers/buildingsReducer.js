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

const initialState = {
  loading: false,
  list: [],
  error: false,
};

const buildingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUILDINGS_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case GET_BUILDINGS_FULFILLED:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_BUILDINGS_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ADD_BUILDINGS_FETCHING:
      return [4];
    case ADD_BUILDINGS_FULFILLED:
      return [5];
    case ADD_BUILDINGS_REJECTED:
      return [6];
    case UPDATE_BUILDINGS_FETCHING:
      return [7];
    case UPDATE_BUILDINGS_FULFILLED:
      return [8];
    case UPDATE_BUILDINGS_REJECTED:
      return [9];
    case DELETE_BUILDINGS_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BUILDINGS_BAD_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case DELETE_BUILDINGS_FULFILLED:
      return {
        ...state,
        loading: false,
        // eslint-disable-next-line
        list: [...state.list.filter((building) => building._id !== action.payload.id)],
      };
    case DELETE_BUILDINGS_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default buildingReducer;
