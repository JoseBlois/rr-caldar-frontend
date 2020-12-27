import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({
  btnLabel,
  onClick,
  primary,
// eslint-disable-next-line arrow-body-style
}) => {
  return (
    <button type="button" className={primary ? styles.buttonPrimary : styles.button} onClick={onClick}>
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
