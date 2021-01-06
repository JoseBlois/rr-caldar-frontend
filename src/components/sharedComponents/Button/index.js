import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = (props) => {
  const { primary, onClick, btnLabel } = props;

  return (
    // eslint-disable-next-line react/button-has-type
    <button
    // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={primary ? styles.buttonPrimary : styles.button}
      onClick={onClick}
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
