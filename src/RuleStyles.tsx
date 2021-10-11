// @ts-ignore
import { css_beautify as formatCSS } from "js-beautify/js/lib/beautify-css";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";
import * as React from "react";

import classes from "./RuleStyles.module.scss";
import { DebugStyleRule } from "./types";

type RuleStylesProps = {
  rules: DebugStyleRule[];
};

const RuleStyles: React.FC<RuleStylesProps> = (props) => {
  const { rules } = props;

  const css = rules.map((rule) => rule.cssRule).join("\n");
  const code = React.useMemo(
    () =>
      formatCSS(css, {
        newline_between_rules: false,
      }),
    [css]
  );

  return (
    <div className={classes.container}>
      <Highlight
        {...defaultProps}
        code={code}
        language="css"
        theme={{ ...theme, plain: {} }}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default RuleStyles;
