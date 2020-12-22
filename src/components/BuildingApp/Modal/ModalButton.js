import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalButton.module.css';

function Button({
  btnLabel, onClick, primary, buildingId,
}) {
  return (
    <button
      type="button"
      className={`${styles.Button} ${primary ? styles.ButtonPrimary : ''}`}
      onClick={onClick.bind(this, buildingId)}
    >
      {btnLabel}
    </button>
  );
}

export default Button;

Button.propTypes = {
  btnLabel: PropTypes.string.isRequired,
  primary: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  buildingId: PropTypes.number.isRequired,
};
