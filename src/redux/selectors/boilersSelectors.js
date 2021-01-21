import { createSelector } from 'reselect';

const getBoilers = (state) => state.boilers.list;

export const getFormattedBoilers = createSelector(
  [getBoilers],
  (boilers) => boilers.map(
    (boiler) => ({
      label: boiler.description,
      value: boiler._id,
    }),
  ),
);
