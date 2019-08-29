import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Product as Component } from './product.component';
import {
  openFullImage,
  doGetProductData,
} from './product.store';

const mapStateToProps = state => ({
  product: state.product,
});

const mapDispatchToProps = dispatch => ({
  onOpenFullImage: data => dispatch(openFullImage(data)),
  onGetProductData: data => dispatch(doGetProductData(data))
});

export const Product = hot(module)(connect(mapStateToProps, mapDispatchToProps)(Component));
