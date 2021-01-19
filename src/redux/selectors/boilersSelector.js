import { createSelector } from 'reselect';

const getBoilers = (state) => state.boilers.list;

export const getFormatedBoilers = createSelector(
  [getBoilers],
  (boilers) => boilers.map(
    (boiler) => ({
      label: boiler.description,
      value: boiler._id,
    }),
  ),
);
