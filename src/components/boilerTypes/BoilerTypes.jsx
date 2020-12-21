import React, { useState } from 'react';
import DeleteBoilerTypeModal from './DeleteBoilerTypeModal';
import EditBoilerTypeModal from './EditBoilerTypeModal';

const BoilerType = (props) => {
  const {boilerType, boilerTypes, changeBoilerTypes} = props;
  const [showEditBoilerModal, setShowEditBoilerModal] = useState(false);
  const [showDeleteBoilerModal, setShowDeleteBoilerModal] = useState(false);

  const toggleEditBoilerModal = () => setShowEditBoilerModal(!showEditBoilerModal);
  const toggleDeletBoilerModal = () => setShowDeleteBoilerModal(!showDeleteBoilerModal);

  const handleEditModalSubmit = (description) => {
    const newBoilerTypes = boilerTypes.map(bl => {
      if (bl.id === boilerType.id) {
        return {
          ...bl,
          description: description.trim() || bl.description,
        };
      }
      return bl;
    });
    changeBoilerTypes(newBoilerTypes);
  }

  const handleDeleteModelSubmit = () => {
    const newBoilerTypes = boilerTypes.filter(bl => bl.id !== boilerType.id);
    changeBoilerTypes(newBoilerTypes);
  }

  return (
    <div className="item-wraper" key={boilerType.id}>
      <div className="item">
        <div className="item-description">
          {boilerType.description}
        </div>
        <div className="item-delete">
          <button
            className="btn-edit"
            onClick={toggleEditBoilerModal}>
            Edit
          </button>
          <button
            className="btn-delete"
            onClick={toggleDeletBoilerModal}>
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
  )
};

export default BoilerType;