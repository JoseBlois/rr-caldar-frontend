import { createSelector } from 'reselect';

const getTechnicians = (state) => state.technicians.list;

export const getFormatedTechnicians = createSelector(
  [getTechnicians],
  (technicians) => technicians.map(
    (technician) => ({
      label: `${technician.firstName} ${technician.lastName}`,
      value: technician._id,
    }),
  ),
);
