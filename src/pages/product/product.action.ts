import {
  FETCH_STATUS,
} from 'services/transport/';

import { getProductData } from './product.core';

export const getProductDataStart = createAction('Product_GET_DATA_START');
export const getProductDataSuccess = createAction('Product_GET_DATA_START');
export const getProductDataError = createAction('Product_GET_DATA_START');

export const openFullImage = createAction('Product_GET_DATA_START');

export const doGetProductData = (params: {
  productId: number,
}) => async (dispatch) => {
  const {
    productId,
  } = params;

  dispatch(getProductDataStart());

  try {
    const res = getProductData({ productId });
    if (res.status === FETCH_STATUS.SUCCESS) {
      dispatch(getProductDataSuccess(res.data));
    } else {
      dispatch(getProductDataError({ error: { text: 'Something went wrong'}}));
    }
  } catch (error: Error) {
    dispatch(getProductDataError({ error }));
  }
};
