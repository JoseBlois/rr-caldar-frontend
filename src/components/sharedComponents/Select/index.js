import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  label,
  name,
  value,
  onChange,
  options,
}) => (
  <>
    <label htmlFor={name}>
      {label}
    </label>
    <select id={name} name={name} onChange={onChange} defaultValue={value}>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.value}
        </option>
      ))}
    </select>
  </>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default Select;
