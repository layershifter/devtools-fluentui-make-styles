import * as React from "react";
import { DebugResult } from "./types";

function getDebugInfo(
  callback: (result: DebugResult | undefined) => void
): void {
  chrome.devtools.inspectedWindow.eval<DebugResult>(
    "window.__MAKESTYLES_DEVTOOLS__.getInfo($0)",
    {},
    (result) => {
      callback(result);
    }
  );
}

export function useMakeStylesState(): DebugResult | undefined {
  const [result, setResult] = React.useState<DebugResult | undefined>();

  React.useEffect(() => {
    const listener = () => getDebugInfo(setResult);

    if (chrome.devtools) {
      chrome.devtools.panels.elements.onSelectionChanged.addListener(listener);
      window.addEventListener("message", listener);

      return () => {
        chrome.devtools.panels.elements.onSelectionChanged.removeListener(
          listener
        );
        window.removeEventListener("message", listener);
      };
    }
  }, []);

  return result;
}
