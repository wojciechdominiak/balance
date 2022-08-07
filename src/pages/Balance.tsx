import React from "react";
import OutcomeItem from "../components/outcomes/OutcomeItem";
import { OutcomeContext } from "../store/outcome-context";

export default class Balance extends React.Component {
  render() {
    return (
      <OutcomeContext.Consumer>
        {(ctx) => {
          return (
            <ul>
              {ctx.outcomes.map((item) => (
                <OutcomeItem
                  key={item.id}
                  name={item.name}
                  data={item.date}
                  price={item.price}
                  onRemoveOutcome={ctx.removeOutcome.bind(null, item.id)}
                ></OutcomeItem>
              ))}
            </ul>
          );
        }}
      </OutcomeContext.Consumer>
    );
  }
}
