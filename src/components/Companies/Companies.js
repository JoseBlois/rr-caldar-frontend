/* eslint-disable radix */
import React, { useState } from 'react';
import CompaniesList from './CompaniesList/CompaniesList';
import AddCompany from './AddCompany/AddCompany';
import UpdateCompany from './UpdateCompany/UpdateCompany';
import companiesData from '../../mocks/companies.json';
import Header from './CompaniesHeader/CompaniesHeader';
import style from './CompaniesApp.module.css';

const Companies = () => {
  const [companies, setCompaniesData] = useState(companiesData);

  // Delete Company
  const delCompany = (id) => {
    setCompaniesData([...companies.filter((company) => company.id !== id)]);
  };

  // Add Company
  const addCompany = (nc) => {
    const newCompany = nc;
    newCompany.id = companies[companies.length - 1].id + 1;
    setCompaniesData([...companies, newCompany]);
  };

  // Update Company
  const searchCompany = (id) => companies.find((company) => parseInt(company.id) === parseInt(id));

  const updateCompany = (updatedCompany) => {
    setCompaniesData(companies.map((company) => {
      if (company.id === updatedCompany.id) {
        return updatedCompany;
      }
      return company;
    }));
  };

  return (
    <div className={style.App}>
      <Header />
      <AddCompany addCompany={addCompany} />
      <UpdateCompany searchCompany={searchCompany} updCompany={updateCompany} />
      <CompaniesList companies={companies} delCompany={delCompany} />
    </div>
  );
};

export default Companies;
