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
      return {
        ...state,
        loading: true,
      };
    case ADD_BUILDINGS_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload.building],
        loading: false,
      };
    case ADD_BUILDINGS_REJECTED:
      return {
        ...state,
        error: true,
      };
    case UPDATE_BUILDINGS_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_BUILDINGS_FULFILLED:
      return {
        ...state,
        loading: false,
        list: state.list.map((building) => {
          // eslint-disable-next-line
          if (building._id === action.payload.id) {
            const updatedBuilding = action.payload.building;
            updatedBuilding.id = action.payload.id;
            return updatedBuilding;
          }
          return building;
        }),
      };
    case UPDATE_BUILDINGS_REJECTED:
      return {
        ...state,
        loading: false,
      };
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
