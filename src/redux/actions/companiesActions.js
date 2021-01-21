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
import {
  requestGet,
  requestPost,
  requestPut,
  requestDelete,
} from '../../utils/requestUtils';

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
  return requestGet(URL)
    .then((res) => dispatch(getCompaniesFulfilled(res)))
    .catch(() => dispatch(getCompaniesRejected()));
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
  return requestDelete(`${URL}/${id}`)
    .then(() => dispatch(deleteCompanyFulfilled(id)))
    .catch(() => dispatch(deleteCompanyRejected()));
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
  return requestPost(URL, {
    data: company,
  })
    .then((res) => dispatch(addCompanyFulfilled(res)))
    .catch(() => dispatch(addCompanyRejected()));
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
  return requestPut(`${URL}/${id}`, {
    data: company,
  })
    .then((res) => dispatch(updateCompanyFulfilled(res, id)))
    .catch(() => dispatch(updateCompanyRejected()));
};
