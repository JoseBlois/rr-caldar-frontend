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
import {
  requestGet,
  requestPost,
  requestPut,
  requestDelete,
} from '../../utils/requestUtils';

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
  return requestGet(URL)
    .then((res) => dispatch(getBoilerTypesFulfilled(res)))
    .catch(() => dispatch(getBoilerTypesRejected()));
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
  return requestDelete(`${URL}/${id}`)
    .then(() => dispatch(deleteBoilerTypeFulfilled(id)))
    .catch(() => dispatch(deleteBoilerTypeRejected()));
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
  return requestPost(URL, {
    data: boilerType,
  })
    .then((res) => dispatch(addBoilerTypeFulfilled(res)))
    .catch(() => dispatch(addBoilerTypeRejected()));
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
  return requestPut(`${URL}/${id}`, {
    data: boilerType,
  })
    .then((res) => dispatch(updateBoilerTypeFulfilled(res, id)))
    .catch(() => dispatch(updateBoilerTypeRejected()));
};
