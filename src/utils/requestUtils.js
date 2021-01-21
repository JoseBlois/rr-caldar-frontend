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

const hasContentType = (response, type) => {
  const contentType = response.headers.get('content-type');
  return contentType ? contentType.includes(type) : false;
};

const parseJSONResponse = (response) => response.text().then(
  (text) => (text ? JSON.parse(text) : {}),
);

const handleErrors = (response) => {
  const isJSONResponse = hasContentType(response, 'application/json');

  if (response.ok) {
    return isJSONResponse ? parseJSONResponse(response) : Promise.resolve(response.statusText);
  }

  // Response is not OK
  return new Promise((resolve, reject) => {
    const errorResponse = isJSONResponse ? parseJSONResponse(response) : Promise.resolve({});

    errorResponse.then(() => {
      const message = `Endpoint Error: ${response.status} ${response.statusText}`;

      // reject the promise to go to the catch statement and pass it all the error data
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({
        message,
      });
    });
  });
};

export const requestGet = (path, opts = {}) => {
  const { headers } = opts;

  return fetch(path, {
    headers: setHeaders(headers),
  }).then(handleErrors);
};

export const requestPost = (path, opts = {}) => {
  const { data, headers } = opts;

  return fetch(path, {
    method: 'POST',
    headers: setHeaders(headers),
    body: JSON.stringify(data),
  }).then(handleErrors);
};

export const requestPut = (path, opts = {}) => {
  const { data, headers } = opts;

  return fetch(path, {
    method: 'PUT',
    headers: setHeaders(headers),
    body: JSON.stringify(data),
  }).then(handleErrors);
};

export const requestDelete = (path, opts = {}) => {
  const { data, headers } = opts;

  return fetch(path, {
    method: 'DELETE',
    headers: setHeaders(headers),
    body: JSON.stringify(data),
  }).then(handleErrors);
};
