import * as React from 'react';

type Button = {
  children: React.children,
  disabled: boolean,
}

export class Button extends React.PureComponent<Button> {
  render() {
    const {
      children,
      disabled,
      ...props,
    } = this.props;

    return (
      <button disabled={disabled ? 'disabled' : ''} {...props}>{children}</button>
    )
  }
}