import {
  CREATE_BOILER_TYPE,
  CREATE_BOILER_TYPE_SUCCED,
  CREATE_BOILER_TYPE_FAILED,
  DELETE_BOILER_TYPE,
  SHOW_BOILER_TYPES,
  SHOW_BOILER_TYPES_FAILED,
} from '../types/TypesToBoilerTypes';

export const showBoilerTypes = () => async (dispatch, getState) => {
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

export const createBoilerTypes = (boilerType) => (dispatch) => {
  console.log(boilerType);
  return fetch('https://caldar-application.herokuapp.com/boilertypes', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      description: boilerType.description,
    }),
  })
    .then((data) => data.json())
    .then(() => dispatch(createBoilerTypesSucced()))
    .then(() => dispatch(showBoilerTypes()))
    .catch(() => dispatch(createBoilerTypesFailed()));
};
