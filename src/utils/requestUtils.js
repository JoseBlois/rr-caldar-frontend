export const setHeaders = (headers = {}) => {
  const newHeaders = {
    ...headers,
    'Content-type': 'application/json',
  };
  if (localStorage.token) {
    return {
      ...newHeaders,
      Authorization: `Bearer ${localStorage.token}`,
    };
  }
  return newHeaders;
};
