import { fromComment } from "convert-source-map";
import * as React from "react";

import classes from "./RuleDetails.module.scss";

type RuleDetailsProps = {
  sequenceId: string;
  sourceMap: string | undefined;
  sourceMapLine: number | undefined;
  slotName: string | undefined;
};

const RuleDetails: React.FC<RuleDetailsProps> = (props) => {
  const { slotName, sequenceId, sourceMap, sourceMapLine } = props;

  const parsedMap = React.useMemo(
    () => (sourceMap ? fromComment(sourceMap) : undefined),
    [sourceMap]
  );

  const filePath: string | undefined = parsedMap
    ? parsedMap.sourcemap.file
    : undefined;
  const filename = filePath ? filePath.split(/[\\/]/).pop() : undefined;

  const handleFileClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (filePath && sourceMapLine) {
      chrome.devtools.inspectedWindow.eval<string>(
        "window.location.origin",
        {},
        (locationOrigin) => {
          chrome.devtools.panels.openResource(
            locationOrigin + "/" + filePath,
            sourceMapLine - 1,
            () => {}
          );
        }
      );
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.class}>.{sequenceId}</div>
      <div className={classes.file}>
        {filePath ? (
          <a href="#" onClick={handleFileClick} title={filePath}>
            {filename}:{sourceMapLine}
          </a>
        ) : (
          <b title="Babel plugin is required for source maps instrumentation">
            N/A
          </b>
        )}
      </div>
      {filePath && (
        <div>
          (<b>{slotName}</b>)
        </div>
      )}
    </div>
  );
};

export default RuleDetails;
