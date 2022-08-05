import React from "react";
import { Link } from "react-router-dom";

export default class MainNavigation extends React.Component {
  render() {
    return (
      <header>
        <h1>
          <Link to="balance">Bilans</Link>
        </h1>
        <ul>
          <Link to="/new-outcome">Add new outcome</Link>
          <Link to="/">Login</Link>
        </ul>
      </header>
    );
  }
}
