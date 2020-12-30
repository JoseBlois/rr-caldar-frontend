import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { deleteBoilerTypesById, updateBoilerTypesById } from '../../redux/actions/boilerTypes.action';
import DeleteBoilerTypeModal from './DeleteBoilerTypeModal';
import EditBoilerTypeModal from './EditBoilerTypeModal';
import styles from './BoilerTypesApp.module.css';

const BoilerType = ({ boilerType, boilerTypes }) => {
  const [showEditBoilerModal, setShowEditBoilerModal] = useState(false);
  const [showDeleteBoilerModal, setShowDeleteBoilerModal] = useState(false);
  const dispatch = useDispatch();
  const deleteBoilerTypes = useCallback((bl) => dispatch(deleteBoilerTypesById(bl)), [dispatch]);
  const updateBoilerTypes = useCallback(
    (id, description) => dispatch(updateBoilerTypesById(id, description)),
    [dispatch],
  );

  const toggleEditBoilerModal = () => setShowEditBoilerModal(!showEditBoilerModal);
  const toggleDeletBoilerModal = () => setShowDeleteBoilerModal(!showDeleteBoilerModal);
  // eslint-disable-next-line no-underscore-dangle
  const handleEditModalSubmit = (description) => updateBoilerTypes(boilerType._id, description);

  const handleDeleteModelSubmit = () => deleteBoilerTypes(boilerType);

  return (
    <div className={styles.itemWraper} key={boilerType.id}>
      <div className={styles.item}>
        <div className="item-description">
          {boilerType.description}
        </div>
        <div className="item-delete">
          <button className="btn-edit" type="button" onClick={toggleEditBoilerModal}>
            Edit
          </button>
          <button className="btn-delete" type="button" onClick={toggleDeletBoilerModal}>
            Delete
          </button>
        </div>
        <div>
          {showEditBoilerModal && (
            <EditBoilerTypeModal
              onSubmit={handleEditModalSubmit}
              onClose={toggleEditBoilerModal}
              boilerType={boilerType}
            />
          )}
          {showDeleteBoilerModal && (
            <DeleteBoilerTypeModal
              onSubmit={handleDeleteModelSubmit}
              onClose={toggleDeletBoilerModal}
              boilerType={boilerType}
            />
          )}
        </div>
      </div>
    </div>
  );
};

BoilerType.propTypes = {
  boilerTypes: propTypes.array.isRequired,
  boilerType: propTypes.object.isRequired,
};

export default BoilerType;
