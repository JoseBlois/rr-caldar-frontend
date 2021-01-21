import { createSelector } from 'reselect';

const getBoilerTypes = (state) => state.boilerTypes.list;

export const getFormattedBoilerTypes = createSelector(
  [getBoilerTypes],
  (boilerTypes) => boilerTypes.map(
    (boilerType) => ({
      label: boilerType.description,
      value: boilerType._id,
    }),
  ),
);
