import React from 'react';
import propTypes from 'prop-types';
import styles from './Button.module.css';

function Button(props) {
  const { primary, onClick, buttonLabel } = props;
  return (
    <button
      className={`${styles.Button} ${primary} ? ${styles.ButtonPrimary} : ''`}
      type="button"
      onClick={onClick}
    >
      {buttonLabel}
    </button>
  );
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  primary: propTypes.string.isRequired,
  buttonLabel: propTypes.string.isRequired,
};

export default Button;
