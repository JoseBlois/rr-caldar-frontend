import React from 'react';
import styles from './Modal.module.css';
import Button from './Button';

function Modal(props) {
  const handleOnSubmit = () => {
    props.onSubmit();
    props.onClose();
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalGuts}>
          <div className={styles.header}>
            <div className="header-title">
              {props.title}
            </div>
            <button className="btn-close" onClick={props.onClose}>X</button>          
          </div>
          <div className="content">
            {props.children}
          </div>
          <div className="actions">
            <Button onClick={props.onClose} buttonLabel="Cancel" ></Button>
            <Button onClick={handleOnSubmit} buttonLabel={props.submitLabel || "Submit"} primary></Button>
          </div>
        </div>
      </div>
      <div className={styles.overlay}>
      </div>
    </>
  );
}

export default Modal;

