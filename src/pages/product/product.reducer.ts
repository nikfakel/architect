import { handleActions } from 'redux-actions';

import {
  getProductDataStart,
  getProductDataSuccess,
  openFullImage,
} from './product.action';

const defaultState ={
  isPreviewOpened: false,
}

const Product = handleActions({
  [getProductDataStart](state) {
    return {
      ...state,
    }
  },
  [getProductDataSuccess](state, action) {
    const { product } = action.payload;

    return {
      ...state,
      product,
    }
  },
  [openFullImage](state) {
    return {
      ...state,
      isPreviewOpened: !state.isPreviewOpened,
    }
  }
}, defaultState);

export default Product;
