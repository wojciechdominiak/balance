import React from "react";
import OutcomeItem from "../components/outcomes/OutcomeItem";
import OutcomeContextProvider, {
  OutcomeContext,
} from "../store/outcome-context";

export default class Balance extends React.Component {
  render() {
    return (
      <OutcomeContextProvider>
        <OutcomeContext.Consumer>
          {(ctx) => {
            return (
              <ul>
                {ctx.outcomes.map((item) => (
                  <OutcomeItem
                    name={item.name}
                    onRemoveOutcome={ctx.removeOutcome.bind(null, item.id)}
                  ></OutcomeItem>
                ))}
              </ul>
            );
          }}
        </OutcomeContext.Consumer>
      </OutcomeContextProvider>
    );
  }
}
