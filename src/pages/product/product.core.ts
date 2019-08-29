import {
  normalize,
  schema,
} from 'normalizr';

import {
  postAPI,
} from 'services/transport/';

export function getProductData(params) {
  const {
    url,
    body
  } = params;

  const res = postAPI(url, body);
  const normalizedData = normalize(res); // pseudocode

  return normalizedData;
}