import React, { createRef } from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  outcomeInputEmail = createRef<HTMLInputElement>();
  outcomeInputPassword = createRef<HTMLInputElement>();

  submitLoginHandler: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent
  ) => {
    event.preventDefault();
    console.log(this.outcomeInputEmail.current!.value);
  };
  render() {
    return (
      <>
        <form onSubmit={this.submitLoginHandler}>
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
          <button>Login</button>
        </form>
        <Link to="/registration">Register instead</Link>
      </> 
    );
  }
}
