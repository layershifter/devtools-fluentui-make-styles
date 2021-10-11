import * as React from "react";
import * as ReactDOM from "react-dom";

import DefaultMessage from "./DefaultMessage";
import RuleInspector from "./RuleInspector";
import { useMakeStylesState } from "./useMakeStylesState";

const DevTools: React.FC = () => {
  const state = useMakeStylesState();

  if (state) {
    return <RuleInspector {...state} />;
  }

  return <DefaultMessage />;
};

ReactDOM.render(
  <React.StrictMode>
    <DevTools />
  </React.StrictMode>,
  document.getElementById("root")
);
