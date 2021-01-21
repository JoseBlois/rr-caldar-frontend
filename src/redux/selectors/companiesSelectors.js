import { createSelector } from 'reselect';

const getCompanies = (state) => state.companies.list;

export const getFormattedCompanies = createSelector(
  [getCompanies],
  (companies) => companies.map(
    (company) => ({
      label: company.name,
      value: company._id,
    }),
  ),
);
