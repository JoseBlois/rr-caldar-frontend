import React, { useCallback, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import propTypes from 'prop-types';
import styles from './BoilerTypesApp.module.css';
import BoilerType from './BoilerTypes';
import BoilerTypesForm from './BoilerTypesForm';
import { showBoilerTypes } from '../../redux/actions/boilerTypes.action';

const BoilerTypesApp = (props) => {
  const dispatch = useDispatch();
  const fetchBoilerTypes = useCallback(() => dispatch(showBoilerTypes()), [dispatch]);
  // const boilerTypeList = useSelector((state) => state.boilerTypes.boilerTypes);
  const { boilerTypes } = props;

  useEffect(() => {
    fetchBoilerTypes();
  }, []);

  const handleAddBoilerTypes = (newBoilerType) => null;

  if (!boilerTypes.boilerTypes) return null;

  const renderBoilerTypes = boilerTypes.boilerTypes.map((boilerType) => {
    // eslint-disable-next-line no-underscore-dangle
    const key = boilerType._id;
    return (
      <BoilerType
        key={key}
        boilerType={boilerType}
        boilerTypes={boilerTypes.boilerTypes}
      />
    );
  });

  // RETURN THE COMPONENT
  return (
    <div className="App">
      <div className={styles.AppHeader}>
        Boilers Types -
        <span className="number-of-boilerTypes">
          {boilerTypes.length}
        </span>
      </div>
      <div className="new-boiler-type">
        <BoilerTypesForm onAddBoilerTypes={handleAddBoilerTypes} />
      </div>
      <div className="container">
        <div className="row">
          {renderBoilerTypes}
        </div>
      </div>
    </div>
  );
};

BoilerTypesApp.propTypes = {
  // eslint-disable-next-line react/require-default-props
  boilerTypes: propTypes.shape({ boilerTypes: propTypes.array }).isRequired,
};

const mapStateToProps = (state) => ({
  boilerTypes: state.boilerTypes,
});

export default connect(mapStateToProps)(BoilerTypesApp);
