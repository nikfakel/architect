import * as React from 'react';
import { Button } from 'common/button';
import * as s from './product.style';

interface IProps {
  product: IProduct,
  onOpenFullImage: () => void,
  doGetProductData: () => void,
}

interface IState {
  someStateValue: boolean,
}

export class Product extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      someStateValue: false,
    }
  }

  componentDidMount() {
    const {
      doGetProductData,
      productId,
    } = this.props;

    doGetProductData({ productId });
  }

  openFullImage(someParams: {someParams: boolean}): void {
    const {
      someParam,
    } = someParams;

    const {
      image: {
        fullX2,
        onOpenFullImage,
      }
    } = this.props;

    if (someParam && fullX2) {
      onOpenFullImage(fullX2);
    }
  }

  render() {
    const {
      displayName,
      quantity,
      image,
      price,
    } = this.props;

    const {
      someStateValue,
    } = this.state;

    return (
      <s.Product>
        <s.Wrapper>
          <s.Image onClick={this.openFullImage}>{image.previewX2}</s.Image>
          <s.Price>{price}</s.Price>
          <s.Title>{displayName}</s.Title>
          {someStateValue &&
            <s.Quantity>{quantity}</s.Quantity>
          }
        </s.Wrapper>
      </s.Product>
    )
  }
}
