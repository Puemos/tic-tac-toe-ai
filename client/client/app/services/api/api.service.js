import Config from '../../config';

const ApiService = function($q, $localStorage, $http) {
  "ngInject";

  const req = (method) => ({ url, data, params, host = Config.API_URL }) => {
    const headers = {
      'Content-Type': 'application/json'
    };
    const req = {
      url: host + url,
      method,
      headers,
      data,
      params
    };
    // log.debug(req);
    return new $q(function(resolve, reject) {
      $http(req)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const get = req('GET');
  const post = req('POST');
  const del = req('DELETE');
  const put = req('PUT');

  return { get, post, del, put };
};

export default ApiService;
