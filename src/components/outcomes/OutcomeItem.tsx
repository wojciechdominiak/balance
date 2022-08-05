import React from "react";

type MyProps = {
  name: string;
  onRemoveOutcome: () => void;
};

export default class OutcomeItem extends React.Component<MyProps> {
  render() {
    return <li onClick={this.props.onRemoveOutcome}>{this.props.name}</li>;
  }
}
