import React, { useState } from 'react';
import Modal from './Modal';

const EditBoilerTypeModal = (props) => {
  const {onSubmit, onClose} = props;
  const [boilerTypeValue, setBoilerTypeValue] = useState('');

  const handleChange = e => setBoilerTypeValue(e.target.value);
  const handleSubmit = () => {
    onSubmit(boilerTypeValue);
    setBoilerTypeValue('')
  }

  return ( 
    <Modal
      title="Edit Boiler"
      submitLabel="Confirm" 
      onClose={onClose}   
      onSubmit={handleSubmit}
    >
      <p>Description</p>
      <input type="text" value={boilerTypeValue} onChange={handleChange} />
    </Modal>
  );
};

export default EditBoilerTypeModal;