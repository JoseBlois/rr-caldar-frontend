import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button
        className={`Button ${props.primary ? 'Button-primary' : ''}`}
        onClick={props.onClick}
    >
        {props.children}
    </button>
  );
}

export default Button;

