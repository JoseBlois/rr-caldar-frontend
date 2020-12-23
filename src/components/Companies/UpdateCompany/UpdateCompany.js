import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './UpdateCompany.module.css';

const updateCompany = ({
  searchCompany,
  updCompany,
}) => {
  const [company, setCompany] = useState({
    id: '',
    name: '',
    address: '',
    email: '',
    cuit: '',
    phone: '',
  });

  const onChange = (e) => {
    setCompany({ ...company, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedCompany = {
      id: company.id,
      name: company.name,
      address: company.address,
      email: company.email,
      cuit: company.cuit,
      phone: company.phone,
    };
    updCompany(updatedCompany);
  };

  const findCompany = (e) => {
    const comp = searchCompany(e.target.value);
    if (comp) {
      setCompany({
        id: comp.id,
        name: comp.name,
        address: comp.address,
        email: comp.email,
        cuit: comp.cuit,
        phone: comp.phone,
      });
    } else {
      setCompany({
        name: 'Not found',
        address: 'Not found',
        email: 'Not found',
        cuit: 'Not found',
        phone: 'Not found',
      });
    }
  };

  return (
    <div className={style.updateCompany}>
      <h3>Update Company</h3>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          min="1"
          id="id"
          placeholder="Company ID"
          onChange={findCompany}
        />
        <input
          type="text"
          id="name"
          placeholder="Company Name"
          value={company.name}
          onChange={onChange}
        />
        <input
          type="text"
          id="address"
          placeholder="Street Adress"
          value={company.address}
          onChange={onChange}
        />
        <input
          type="text"
          id="email"
          placeholder="email Address"
          value={company.email}
          onChange={onChange}
        />
        <input
          type="text"
          id="cuit"
          placeholder="Company CUIT"
          value={company.cuit}
          onChange={onChange}
        />
        <input
          type="text"
          id="phone"
          placeholder="Phone number"
          value={company.phone}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Update Company"
        />
      </form>
      <table>
        <tr>
          <th>ID</th>
          <th>Company Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>CUIT</th>
          <th>Phone</th>
          <th>D</th>
        </tr>
      </table>
    </div>
  );
};

updateCompany.propTypes = {
  searchCompany: PropTypes.func.isRequired,
  updCompany: PropTypes.func.isRequired,
};

export default updateCompany;
