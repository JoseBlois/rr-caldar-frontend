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

const TechniciansForm = () => {
  const [state, setState] = useState(initialState);

  const inputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const newTechnician = {
      id: '',
      first_name: state.first_name,
      last_name: state.last_name,
      address: state.address,
      phone: state.phone,
      email: state.email,
      boiler_types: state.boiler_types,
    };
    addTechnician();
    setState(initialState);
  };

  return (
    <tr>
      <td>
        <input type="text" name="first_name" onChange={inputChange} value={state.first_name} />
      </td>
      <td>
        <input type="text" name="last_name" onChange={inputChange} value={state.last_name} />
      </td>
      <td>
        <input type="text" name="address" onChange={inputChange} value={state.address} />
      </td>
      <td>
        <input type="text" name="phone" onChange={inputChange} value={state.phone} />
      </td>
      <td>
        <input type="text" name="email" onChange={inputChange} value={state.email} />
      </td>
      <td>
        <input type="text" name="boiler_types" onChange={inputChange} value={state.boiler_types} />
      </td>
      <td>
        <button type="button" onClick={submit}>
          Add
        </button>
      </td>
    </tr>
  );
};

newTechnician.propTypes = {
  newTechnician: PropTypes.func.isRequired,
};

export default TechniciansForm;
