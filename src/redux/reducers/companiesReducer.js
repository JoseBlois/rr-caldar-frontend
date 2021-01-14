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

const initialState = {
  loading: false,
  list: [],
  error: false,
};

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case GET_COMPANIES_FULFILLED:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case GET_COMPANIES_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ADD_COMPANY_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case ADD_COMPANY_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    case ADD_COMPANY_REJECTED:
      return {
        ...state,
        error: true,
      };
    case UPDATE_COMPANY_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_COMPANY_FULFILLED:
      return {
        ...state,
        loading: false,
        list: state.list.map((company) => {
          if (company._id === action.payload.id) {
            const updatedCompany = action.payload.company;
            updatedCompany.id = action.payload.id;
            return updatedCompany;
          }
          return company;
        }),
      };
    case UPDATE_COMPANY_REJECTED:
      return {
        ...state,
        loading: false,
      };
    case DELETE_COMPANY_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_COMPANY_FULFILLED:
      return {
        ...state,
        loading: false,
        list: [...state.list.filter((company) => company._id !== action.payload.id)],
      };
    case DELETE_COMPANY_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default companiesReducer;
