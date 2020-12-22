import React, { useState } from 'react';
import PropTypes from 'prop-types';

const addCompany = () => {
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
    addCompany(newCompany);
    setNewCompany({
      newCompany: {
        name: '',
        address: '',
        email: '',
        cuit: '',
        phone: '',
      },
    });
  };

  return (
    <form onSubmit={onSubmit} className="add-company" style={{ display: 'flex' }}>
      <input
        type="text"
        name="name"
        placeholder="Company Name"
        style={{ flex: '10', padding: '5px' }}
        value={newCompany.name}
        onChange={onChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Street Adress"
        style={{ flex: '10', padding: '5px' }}
        value={newCompany.address}
        onChange={onChange}
      />
      <input
        type="text"
        name="email"
        placeholder="email Address"
        style={{ flex: '10', padding: '5px' }}
        value={newCompany.email}
        onChange={onChange}
      />
      <input
        type="text"
        name="cuit"
        placeholder="Company CUIT"
        style={{ flex: '10', padding: '5px' }}
        value={newCompany.cuit}
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone number"
        style={{ flex: '10', padding: '5px' }}
        value={newCompany.phone}
        onChange={onChange}
      />
      <input
        type="submit"
        name="add-company"
      />
    </form>
  );
};

addCompany.propTypes = {
  addCompany: PropTypes.func.isRequired,
};

export default addCompany;
