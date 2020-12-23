import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './addCompany.module.css';

const addCompany = (props) => {
  const [newCompany, setNewCompany] = useState({
    id: '',
    name: '',
    address: '',
    email: '',
    cuit: '',
    phone: '',
  });

  const onChange = (e) => {
    setNewCompany({ ...newCompany, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.addCompany(newCompany);
    setNewCompany({
      name: '',
      address: '',
      email: '',
      cuit: '',
      phone: '',
    });
  };

  return (
    <div className={styles.add_company}>
      <h3>Add Company</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={newCompany.name}
          onChange={onChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Street Adress"
          value={newCompany.address}
          onChange={onChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email Address"
          value={newCompany.email}
          onChange={onChange}
        />
        <input
          type="text"
          name="cuit"
          placeholder="Company CUIT"
          value={newCompany.cuit}
          onChange={onChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          value={newCompany.phone}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Add Company"
        />
      </form>
    </div>
  );
};

addCompany.propTypes = {
  addCompany: PropTypes.func.isRequired,
};

export default addCompany;
