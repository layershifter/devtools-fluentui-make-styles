import * as React from "react";
import classes from "./DefaultMessage.module.scss";

const DefaultMessage: React.FC = () => {
  return (
    <div className={classes.container}>
      <u aria-hidden>💡️</u>
      <div>
        Please select an element with styles created by{" "}
        <code>makeStyles()</code>.
      </div>
    </div>
  );
};

export default DefaultMessage;
