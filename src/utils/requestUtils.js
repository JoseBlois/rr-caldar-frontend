export const setHeaders = (headers = {}) => {
  const newHeaders = {
    ...headers,
    'Content-type': 'application/json',
  };
  if (localStorage.getItem('token')) {
    return {
      ...newHeaders,
      token: localStorage.getItem('token'),
    };
  }
  return newHeaders;
};
