export const required = (value) => (value ? undefined : 'Required');

export const email = (value) => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? undefined : 'Invalid Email');

export const number = (value) => (Number.isNaN(value) ? 'Must be a number' : undefined);

export const numberHour = (value) => (/^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/i.test(value) ? undefined : 'Must be a number greater than 0');

export const minLength = (min) => (value) => (
  value.length >= min ? undefined : `Should have more than ${min}`
);

export const composeValidators = (...validators) => (value) => validators.reduce(
  (error, validator) => error || validator(value), undefined,
);
