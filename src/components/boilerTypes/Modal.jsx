import React from 'react';
import propTypes from 'prop-types';
import styles from './Modal.module.css';
import Button from './Button';

function Modal(props) {
  const handleOnSubmit = () => {
    props.onSubmit();
    props.onClose();
  };

  const {
    title, onClose, children, submitLabel,
  } = props;

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalGuts}>
          <div className={styles.header}>
            <div className="header-title">
              {title}
            </div>
            <button className="btn-close" type="button" onClick={onClose}>
              X
            </button>
          </div>
          <div className="content">
            {children}
          </div>
          <div className="actions">
            <Button onClick={onClose} buttonLabel="Cancel" primary={false} />
            <Button onClick={handleOnSubmit} buttonLabel={submitLabel || 'Submit'} primary />
          </div>
        </div>
      </div>
      <div className={styles.overlay} />
    </>
  );
}

Modal.propTypes = {
  onSubmit: propTypes.func.isRequired,
  onClose: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
  submitLabel: propTypes.string.isRequired,
};

export default Modal;
