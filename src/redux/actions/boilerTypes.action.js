import {
  CREATE_BOILER_TYPE_SUCCED,
  CREATE_BOILER_TYPE_FAILED,
  DELETE_BOILER_TYPE_SUCCED,
  DELETE_BOILER_TYPE_FAILED,
  SHOW_BOILER_TYPES,
  SHOW_BOILER_TYPES_FAILED,
  UPDATE_BOILER_TYPE_SUCCED,
  UPDATE_BOILER_TYPE_FAILED,
} from '../types/TypesToBoilerTypes';

export const showBoilerTypes = () => async (dispatch) => {
  try {
    const resp = await fetch('https://caldar-application.herokuapp.com/boilertypes', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    const json = await resp.json();

    return dispatch({
      type: SHOW_BOILER_TYPES,
      payload: json,
    });
  } catch (error) {
    return {
      type: SHOW_BOILER_TYPES_FAILED,
    };
  }
};

const createBoilerTypesSucced = (payload) => ({
  type: CREATE_BOILER_TYPE_SUCCED,
  payload,
});

const createBoilerTypesFailed = () => ({
  type: CREATE_BOILER_TYPE_FAILED,
});

export const createBoilerTypes = (boilerType) => (dispatch) => fetch('https://caldar-application.herokuapp.com/boilertypes', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    description: boilerType.description,
  }),
})
  .then(() => dispatch(createBoilerTypesSucced()))
  .then(() => dispatch(showBoilerTypes()))
  .catch(() => dispatch(createBoilerTypesFailed()));

const deleteBoilerTypesSucced = (payload) => ({
  type: DELETE_BOILER_TYPE_SUCCED,
  payload,
});

const deleteBoilerTypesFailed = () => ({
  type: DELETE_BOILER_TYPE_FAILED,
});

export const deleteBoilerTypesById = (boilerType) => (dispatch) => {
  // eslint-disable-next-line no-underscore-dangle
  const boilerTypeId = boilerType._id;
  return fetch(`https://caldar-application.herokuapp.com/boilertypes/${boilerTypeId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((data) => data.json())
    .then(() => dispatch(deleteBoilerTypesSucced()))
    .then(() => dispatch(showBoilerTypes()))
    .catch(() => dispatch(deleteBoilerTypesFailed()));
};

const updateBoilerTypesSucced = (payload) => ({
  type: UPDATE_BOILER_TYPE_SUCCED,
  payload,
});

const updateBoilerTypesFailed = () => ({
  type: UPDATE_BOILER_TYPE_FAILED,
});

export const updateBoilerTypesById = (id, description) => (dispatch) => fetch(`https://caldar-application.herokuapp.com/boilerTypes/${id}`, {
  method: 'PUT',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    description,
  }),
})
  .then(() => dispatch(updateBoilerTypesSucced()))
  .then(() => dispatch(showBoilerTypes()))
  .catch(() => dispatch(updateBoilerTypesFailed()));
