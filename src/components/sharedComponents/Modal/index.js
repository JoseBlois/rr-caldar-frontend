import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './modal.module.css';

const Modal = ({
  title,
  children,
  onClose,
}) => (
  <>
    <div className={styles.modalContainer}>
      <div className={styles.modalHeader}>
        <div>
          {title}
        </div>
        <FontAwesomeIcon icon={faTimes} onClick={onClose} />
      </div>
      <div className={styles.modalContent}>
        {children}
      </div>
    </div>
    <div className={styles.modalOverlay} />
  </>
);

export default Modal;

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};
