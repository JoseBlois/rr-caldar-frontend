/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = (props) => {
  const { primary, onClick, btnLabel } = props;

  return (
    <button
      {...props}
      className={primary ? styles.buttonPrimary : styles.button}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {btnLabel}
    </button>
  );
};

Button.defaultProps = {
  primary: false,
};

Button.propTypes = {
  btnLabel: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
