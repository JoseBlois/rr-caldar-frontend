/* eslint-disable radix */
import React, { useState } from 'react';
import CompaniesList from '../Companies/CompaniesList';
import AddCompany from '../Companies/AddCompany';
import UpdateCompany from '../Companies/UpdateCompany';
import companiesData from '../mocks/companies.json';
// import Header from './Header';
import './App.css';

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
    <div className="App">
      {/* <Header /> */}
      <AddCompany addCompany={addCompany} />
      <UpdateCompany searchCompany={searchCompany} updateCompany={updateCompany} />
      <CompaniesList companies={companies} delCompany={delCompany} />
    </div>
  );
};

export default Companies;
