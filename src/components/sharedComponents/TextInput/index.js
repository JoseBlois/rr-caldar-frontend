import React from 'react';
import PropTypes from 'prop-types';
import styles from './textInput.module.css';

const TextInput = ({
  input,
  meta,
  label,
  placeholder,
}) => (
  <>
    <label className={styles.textInputLabel}>{label}</label>
    <input className={styles.textInput} {...input} placeholder={placeholder} />
    {meta.error && meta.touched && <div className={styles.error}>{meta.error}</div>}
  </>
);

TextInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
