import { createSelector } from 'reselect';

const getBuildings = (state) => state.buildings.list;

export const getFormatedBuildings = createSelector(
  [getBuildings],
  (buildings) => buildings.map(
    (building) => ({
      label: building.name,
      value: building._id,
    }),
  ),
);
