import React from 'react';
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

export default DeleteBoilerTypeModal;