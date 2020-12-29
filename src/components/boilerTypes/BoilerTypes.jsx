import React, { useCallback, useState } from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import DeleteBoilerTypeModal from './DeleteBoilerTypeModal';
import EditBoilerTypeModal from './EditBoilerTypeModal';
import styles from './BoilerTypesApp.module.css';
import { deleteBoilerType } from '../../redux/actions/boilerTypes.action';

const BoilerType = ({ boilerType, boilerTypes, changeBoilerTypes }) => {
  const [showEditBoilerModal, setShowEditBoilerModal] = useState(false);
  const [showDeleteBoilerModal, setShowDeleteBoilerModal] = useState(false);
  const dispatch = useDispatch();

  const toggleEditBoilerModal = () => setShowEditBoilerModal(!showEditBoilerModal);
  const toggleDeletBoilerModal = () => setShowDeleteBoilerModal(!showDeleteBoilerModal);

  const handleEditModalSubmit = (description) => {
    const newBoilerTypes = boilerTypes.map((bl) => {
      if (bl.id === boilerType.id) {
        return {
          ...bl,
          description: description.trim() || bl.description,
        };
      }
      return bl;
    });
    changeBoilerTypes(newBoilerTypes);
  };

  const handleDeleteModelSubmit = () => {
    useCallback(() => dispatch(deleteBoilerType(boilerType.id)), [dispatch]);
    // const newBoilerTypes = boilerTypes.filter((bl) => bl.id !== boilerType.id);
    // changeBoilerTypes(newBoilerTypes);
  };

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
  changeBoilerTypes: propTypes.func.isRequired,
  boilerTypes: propTypes.array.isRequired,
  boilerType: propTypes.object.isRequired,
};

export default BoilerType;
