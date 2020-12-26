import React from 'react';
import propTypes from 'prop-types';
import Modal from './Modal';

const DeleteBoilerTypeModal = (props) => {
  const { onClose, boilerType, onSubmit } = props;

  return (
    <Modal
      title="Delete Boiler"
      submitLabel="Confirm"
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <h2>{`Are you sure that you want to delete ${boilerType.description}?`}</h2>
    </Modal>
  );
};

DeleteBoilerTypeModal.propTypes = {
  onSubmit: propTypes.func.isRequired,
  onClose: propTypes.func.isRequired,
  boilerType: propTypes.object.isRequired,
};

export default DeleteBoilerTypeModal;
