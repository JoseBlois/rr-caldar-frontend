import React from 'react';
import styles from './Button.module.css';

function Button(props) {
  return (
    <button
        className={`${styles.Button} ${props.primary} ? ${styles.ButtonPrimary} : ''`}
        onClick={props.onClick}
    >
        {props.buttonLabel}
    </button>
  );
}

export default Button;

