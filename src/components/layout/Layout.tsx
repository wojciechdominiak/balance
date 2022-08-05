import React from "react";
import MainNavigation from "./MainNavigation";

type MyProps = {
  children: JSX.Element | string;
};

export default class Layout extends React.Component<MyProps> {
  render() {
    return (
      <>
        <MainNavigation />
        <main>{this.props.children}</main>
      </>
    );
  }
}
