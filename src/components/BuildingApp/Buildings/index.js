import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BuildingItem from '../BuildingItem';
import styles from './Buildings.module.css';
import { getBuildings } from '../../../redux/actions/buildingActions';

const index = ({
  buildingsR, buildings, deleteBuilding, updateBuilding, searchBuilding, getBuildingsR,
}) => {
  useEffect(() => {
    getBuildingsR();
    console.log(buildingsR);
    // fetch('http://localhost:4000/buildings')
    //   .then((data) => data.json())
    //   .then((res) => {
    //     char = res;
    //     console.log(char);
    //   })
    //   .catch((err) => console.log('HUBO UN ERROR', err));
  }, []);

  return (
    <div>
      <div className={styles.headersContainer}>
        <div className={styles.header}>NAME</div>
        <div className={styles.header}>ADDRESS</div>
        <div className={styles.header}>BOILERS</div>
        <div className={styles.header}>COMPANY</div>
        <div className={styles.header}>PHONE</div>
        <div>DELETE</div>
      </div>
      {buildingsR.loading ? <h1>LOADING</h1> : <div />}
      {buildingsR.list.map((building) =>
        // eslint-disable-next-line
        <BuildingItem
          deleteBuilding={deleteBuilding}
          key={building.id}
          building={building}
          updateBuilding={updateBuilding}
          searchBuilding={searchBuilding}
        />)}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getBuildingsR: () => dispatch(getBuildings()),
});

const mapStateToProps = (state) => ({
  buildingsR: state.buildings,
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
