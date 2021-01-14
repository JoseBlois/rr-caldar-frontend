export const required = (value) => (value ? undefined : 'Required');

export const email = (value) => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? undefined : 'Invalid Email');

export const number = (value) => (Number.isNaN(value) ? 'Must be a number' : undefined);

export const minLength = (min) => (value) => (
  value.length >= min ? undefined : `Should have more than ${min}`
);

export const composeValidators = (...validators) => (value) => validators.reduce(
  (error, validator) => error || validator(value), undefined,
);
