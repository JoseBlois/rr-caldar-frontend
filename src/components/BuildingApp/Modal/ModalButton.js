import React from 'react';
import PropTypes from 'prop-types';
import './ModalButton.css';

function Button({
  btnLabel, onClick, primary, buildingId,
}) {
  return (
    <button
      type="button"
      className={`Button ${primary ? 'Button-primary' : ''}`}
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
