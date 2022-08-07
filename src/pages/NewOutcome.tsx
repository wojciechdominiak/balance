import React, { createRef } from "react";
import { OutcomeContext } from "../store/outcome-context";

export default class NewOutcome extends React.Component {
  outcomeInputName = createRef<HTMLInputElement>();
  outcomeInputPrice = createRef<HTMLInputElement>();
  outcomeInputDate = createRef<HTMLInputElement>();

  render() {
    return (
      <OutcomeContext.Consumer>
        {(ctx) => {
          const addOutcomeHandler: React.FormEventHandler<HTMLFormElement> = (
            event: React.FormEvent
          ) => {
            event.preventDefault();

            ctx.addOutcome(
              this.outcomeInputName.current!.value.toString(),
              +this.outcomeInputPrice.current!.value!,
              new Date(this.outcomeInputDate.current!.value.toString())
            );
          };
          return (
            <form onSubmit={addOutcomeHandler}>
              <div>
                <label htmlFor="name">Name: </label>
                <input
                  type="name"
                  id="name"
                  ref={this.outcomeInputName}
                ></input>
              </div>
              <div>
                <label htmlFor="price">Price: </label>
                <input
                  type="number"
                  id="price"
                  ref={this.outcomeInputPrice}
                ></input>
              </div>
              <div>
                <label htmlFor="date">Date: </label>
                <input
                  type="date"
                  id="date"
                  ref={this.outcomeInputDate}
                ></input>
              </div>
              <button>Add Outcome</button>
            </form>
          );
        }}
      </OutcomeContext.Consumer>
    );
  }
}
