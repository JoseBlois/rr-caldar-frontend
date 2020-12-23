import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  btnLabel, onClick, primary, boilerId,
}) => (
  <>
    <button type="button" className={`Button ${primary ? 'Button-primary' : ''}`} onClick={() => onClick(boilerId)}>
      {btnLabel}
    </button>
  </>
);

export default Button;

Button.propTypes = {
  btnLabel: PropTypes.string.isRequired,
  primary: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  boilerId: PropTypes.number.isRequired,
};
