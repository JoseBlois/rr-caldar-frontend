import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import styles from './Modal.module.css';

function Modal({
  title, children, onClose, submitLabel, onSubmit, boilerId,
}) {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalGuts}>
          <div className={styles.modalHeader}>
            <div>
              {title}
            </div>
            <button type="button" className="btnClose" onClick={onClose}>X</button>
          </div>
          <div className={styles.content}>
            {children}
          </div>
          <div>
            <Button onClick={onClose} btnLabel="Cancel" primary={false} boilerId={0} />
            <Button onClick={onSubmit} boilerId={boilerId} primary btnLabel={submitLabel || 'Update'} />
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
  boilerId: PropTypes.number.isRequired,
};
