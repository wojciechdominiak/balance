import React, { createRef } from "react";
import { Link } from "react-router-dom";

export default class Registration extends React.Component {
  outcomeInputEmail = createRef<HTMLInputElement>();
  outcomeInputPassword = createRef<HTMLInputElement>();
  outcomeInputPasswordRepeat = createRef<HTMLInputElement>();

  submitRegistrationHandler: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent
  ) => {
    event.preventDefault();
    console.log(this.outcomeInputEmail.current!.value);
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitRegistrationHandler}>
          <div>
            <label htmlFor="email">E-mail: </label>
            <input type="email" id="email" ref={this.outcomeInputEmail}></input>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              ref={this.outcomeInputPassword}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Repeat Password: </label>
            <input
              type="password"
              id="password"
              ref={this.outcomeInputPasswordRepeat}
            ></input>
          </div>
          <button>Register</button>
        </form>
        <Link to="/login">Login instead</Link>
      </>
    );
  }
}
