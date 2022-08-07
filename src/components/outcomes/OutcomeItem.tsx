import React from "react";

type MyProps = {
  name: string;
  data: Date;
  price: number;
  onRemoveOutcome: () => void;
};

export default class OutcomeItem extends React.Component<MyProps> {
  render() {
    const content = `${this.props.data.toISOString()} ${this.props.name} ${
      this.props.price
    } `;
    return <li onClick={this.props.onRemoveOutcome}>{content}</li>;
  }
}
