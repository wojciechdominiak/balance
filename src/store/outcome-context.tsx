import React, { useState } from "react";

import Outcome from "../models/outcomes";

type OutcomeContextObj = {
  outcomes: Outcome[];
  addOutcome: (name: string, price: number, data: Date) => void;
  removeOutcome: (id: string) => void;
};

export const OutcomeContext = React.createContext<OutcomeContextObj>({
  outcomes: [],
  addOutcome: () => {},
  removeOutcome: (id: string) => {},
});

type Props = {
  children?: React.ReactNode;
};

const OutcomeContextProvider: React.FC<Props> = (props) => {
  const [outcomes, setOutcomes] = useState<Outcome[]>([
    { id: "1", name: "Lidl 31.08", price: 99.99, date: new Date() },
  ]);

  const addOutcomeHandler = (name: string, price: number, data: Date) => {
    const newOutcome = new Outcome(name, price, data);

    setOutcomes((prevOutcomes) => {
      return prevOutcomes.concat(newOutcome);
    });
  };

  const removeOutcomeHandler = (id: string) => {
    setOutcomes((prevOutcomes) => {
      return prevOutcomes.filter((outcome) => outcome.id !== id);
    });
  };

  const contextValue: OutcomeContextObj = {
    outcomes,
    addOutcome: addOutcomeHandler,
    removeOutcome: removeOutcomeHandler,
  };
  return (
    <OutcomeContext.Provider value={contextValue}>
      {props.children}
    </OutcomeContext.Provider>
  );
};

export default OutcomeContextProvider;
