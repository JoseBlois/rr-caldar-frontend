import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const SelectInput = ({
  label,
  options,
  isMulti,
  meta,
  input,
}) => (
  <>
    <label>{label}</label>
    <Select
      {...input}
      menuPlacement="auto"
      maxMenuHeight={220}
      options={options}
      isMulti={isMulti}
      className={isMulti ? 'basic-multi-select' : 'basic-single'}
      classNamePrefix="select"
    />
    {meta.error && meta.touched && <div>{meta.error}</div>}
  </>
);

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  isMulti: PropTypes.bool.isRequired,
  meta: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  input: PropTypes.object.isRequired,
};

export default SelectInput;
