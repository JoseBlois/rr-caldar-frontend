import React, { useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  first_name: '',
  last_name: '',
  address: '',
  phone: '',
  email: '',
  boiler_types: '',
};

export default function TechniciansForm({ addTechnician }) {
  const [technician, technicianState] = useState(initialState);

  const inputChange = (e) => {
    technicianState({
      ...technician,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const newTechnician = {
      id: '',
      first_name: technician.first_name,
      last_name: technician.last_name,
      address: technician.address,
      phone: technician.phone,
      email: technician.email,
      boiler_types: technician.boiler_types,
    };
    // eslint-disable-next-line no-undef
    // addTechnician(newTechnician);
    addTechnician(newTechnician);
    technicianState(initialState);
  };

  return (
    <tr>
      <td>
        <input type="text" name="first_name" onChange={inputChange} value={technician.first_name} />
      </td>
      <td>
        <input type="text" name="last_name" onChange={inputChange} value={technician.last_name} />
      </td>
      <td>
        <input type="text" name="address" onChange={inputChange} value={technician.address} />
      </td>
      <td>
        <input type="text" name="phone" onChange={inputChange} value={technician.phone} />
      </td>
      <td>
        <input type="text" name="email" onChange={inputChange} value={technician.email} />
      </td>
      <td>
        <input type="text" name="boiler_types" onChange={inputChange} value={technician.boiler_types} />
      </td>
      <td>
        <button type="button" onClick={submit}>
          Add
        </button>
      </td>
    </tr>
  );
}

TechniciansForm.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  addTechnician: PropTypes.func.isRequired,
};
