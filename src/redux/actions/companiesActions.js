import { setHeaders } from '../../utils/requestUtils';
import {
  GET_COMPANIES_FETCHING,
  GET_COMPANIES_FULFILLED,
  GET_COMPANIES_REJECTED,
  ADD_COMPANY_FETCHING,
  ADD_COMPANY_FULFILLED,
  ADD_COMPANY_REJECTED,
  UPDATE_COMPANY_FETCHING,
  UPDATE_COMPANY_FULFILLED,
  UPDATE_COMPANY_REJECTED,
  DELETE_COMPANY_FETCHING,
  DELETE_COMPANY_FULFILLED,
  DELETE_COMPANY_REJECTED,
} from '../types/companiesTypes';

const URL = 'https://caldar-application.herokuapp.com/companies';

const getCompaniesFetching = () => ({
  type: GET_COMPANIES_FETCHING,
});

const getCompaniesFulfilled = (payload) => ({
  type: GET_COMPANIES_FULFILLED,
  payload,
});

const getCompaniesRejected = () => ({
  type: GET_COMPANIES_REJECTED,
});

export const getCompanies = () => async (dispatch) => {
  dispatch(getCompaniesFetching());
  try {
    const data = await fetch(URL, {
      headers: setHeaders(),
    });
    const res = await data.json();
    return dispatch(getCompaniesFulfilled(res));
  } catch (err) {
    return dispatch(getCompaniesRejected());
  }
};

const deleteCompanyFetching = () => ({
  type: DELETE_COMPANY_FETCHING,
});

const deleteCompanyFulfilled = (id) => ({
  type: DELETE_COMPANY_FULFILLED,
  payload: {
    id,
  },
});

const deleteCompanyRejected = () => ({
  type: DELETE_COMPANY_REJECTED,
});

export const deleteCompany = (id) => async (dispatch) => {
  dispatch(deleteCompanyFetching());
  try {
    const data = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
      headers: setHeaders(),
    });
    if (data.ok) {
      return dispatch(deleteCompanyFulfilled(id));
    }
    throw new Error('Error');
  } catch (err) {
    return dispatch(deleteCompanyRejected());
  }
};

const addCompanyFetching = () => ({
  type: ADD_COMPANY_FETCHING,
});

const addCompanyFulfilled = (company) => ({
  type: ADD_COMPANY_FULFILLED,
  payload: company,
});

const addCompanyRejected = () => ({
  type: ADD_COMPANY_REJECTED,
});

export const addCompany = (company) => async (dispatch) => {
  dispatch(addCompanyFetching());
  try {
    const data = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(company),
      headers: setHeaders(),
    });
    const res = await data.json();
    return dispatch(addCompanyFulfilled(res));
  } catch (err) {
    return dispatch(addCompanyRejected());
  }
};

const updateCompanyFetching = () => ({
  type: UPDATE_COMPANY_FETCHING,
});

const updateCompanyFulfilled = (company, id) => ({
  type: UPDATE_COMPANY_FULFILLED,
  payload: {
    company,
    id,
  },
});

const updateCompanyRejected = () => ({
  type: UPDATE_COMPANY_REJECTED,
});

export const updateCompany = (company, id) => async (dispatch) => {
  dispatch(updateCompanyFetching());
  try {
    const data = await fetch(`${URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(company),
      headers: setHeaders(),
    });
    const res = await data.json();
    return dispatch(updateCompanyFulfilled(res, id));
  } catch (err) {
    return dispatch(updateCompanyRejected());
  }
};
