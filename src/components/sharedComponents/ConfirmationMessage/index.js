import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './confirmationMessage.module.css';

const ConfirmationMessage = ({
  onClose,
  onSubmit,
  entity,
}) => (
  <div>
    Are you sure you want to delete this
    {entity}
    ?
    <div className={styles.buttonContainer}>
      <Button btnLabel="Cancel" onClick={onClose} />
      <Button btnLabel="Submit" primary onClick={onSubmit} />
    </div>
  </div>
);

ConfirmationMessage.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  entity: PropTypes.func.isRequired,
};

export default ConfirmationMessage;
