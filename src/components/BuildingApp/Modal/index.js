import React from 'react';
import './Modal.css';
import PropTypes from 'prop-types';
import Button from './ModalButton';

function Modal({
  title, children, onClose, submitLabel, onSubmit, buildingId,
}) {
  return (
    <>
      <div className="modal">
        <div className="modal-guts">
          <div className="header">
            <div className="header-title">
              {title}
            </div>
            <button type="button" className="btn-close" onClick={onClose}>X</button>
          </div>
          <div className="content">
            {children}
          </div>
          <div className="actions">
            <Button onClick={onClose} btnLabel="Cancel" primary={false} buildingId={0} />
            <Button onClick={onSubmit} buildingId={buildingId} primary btnLabel={submitLabel || 'Submit'} />
          </div>
        </div>
      </div>
      <div className="overlay" />
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
