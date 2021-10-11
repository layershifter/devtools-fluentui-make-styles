import * as React from "react";

import RuleDetails from "./RuleDetails";
import RuleStyles from "./RuleStyles";
import classes from "./RuleInspector.module.scss";
import { DebugResult } from "./types";

type RuleInspectorProps = DebugResult;

const RuleInspector: React.FC<RuleInspectorProps> = (props) => {
  const { sequences } = props;

  return (
    <div className={classes.container}>
      {Object.entries(sequences).map(
        ([sequenceId, { slot, rules, sourceMap, sourceMapLine }]) => (
          <div key={sequenceId} className={classes.rule}>
            <RuleDetails
              sequenceId={sequenceId}
              slotName={slot}
              sourceMap={sourceMap}
              sourceMapLine={sourceMapLine}
            />
            <RuleStyles rules={rules} />
          </div>
        )
      )}
    </div>
  );
};

export default RuleInspector;
