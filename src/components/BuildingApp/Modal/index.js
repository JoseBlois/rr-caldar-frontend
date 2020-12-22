import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import Button from './ModalButton';

function Modal({
  title, children, onClose, submitLabel, onSubmit, buildingId,
}) {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalGuts}>
          <div className={styles.header}>
            <div>
              {title}
            </div>
            <button type="button" onClick={onClose}>X</button>
          </div>
          <div className={styles.content}>
            {children}
          </div>
          <div className={styles.actions}>
            <Button onClick={onClose} btnLabel="Cancel" primary={false} buildingId={0} />
            <Button onClick={onSubmit} buildingId={buildingId} primary btnLabel={submitLabel || 'Submit'} />
          </div>
        </div>
      </div>
      <div className={styles.overlay} />
    </>
  );
}

export default Modal;

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  submitLabel: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  buildingId: PropTypes.number.isRequired,
};
