import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteBuilding } from '../../../redux/actions/buildingActions';
import Modal from '../Modal';
import styles from './BuildingItem.module.css';

const index = ({
  building, deleteBuildingR,
}) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  // const [buildingToUpdate, setBuildingToUpdate] = useState(null);

  const toggleDeleteModal = () => setDeleteModalOpen(!deleteModalOpen);

  return (
    <>
      <div className={styles.row}>
        <div>{building.name}</div>
        <div>{building.address}</div>
        <div>
          [
          {building.boilers.join('-')}
          ]
        </div>
        <div>{building.company}</div>
        <div>{building.phone}</div>
        <button
          type="button"
          className={styles.deleteBtn}
          onClick={toggleDeleteModal}
        >
          X
        </button>
      </div>
      <div>
        {deleteModalOpen && (
          <Modal
            title="Delete Building"
            submitLabel="Confirm"
            onClose={toggleDeleteModal}
            onSubmit={(id) => {
              deleteBuildingR(id);
              toggleDeleteModal();
            }}
            // eslint-disable-next-line
            buildingId={building._id}
          >
            <h2>Are you sure that you want to delete it?</h2>
          </Modal>
        )}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteBuildingR: (id) => dispatch(deleteBuilding(id)),
});

export default connect(null, mapDispatchToProps)(index);
