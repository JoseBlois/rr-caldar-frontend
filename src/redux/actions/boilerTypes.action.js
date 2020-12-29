import { DELETE_BOILER_TYPE, SHOW_BOILER_TYPES, SHOW_BOILER_TYPES_FAILED } from '../types/TypesToBoilerTypes';

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

export const deleteBoilerType = (key) => ({
  type: DELETE_BOILER_TYPE,
  payload: key,
});
