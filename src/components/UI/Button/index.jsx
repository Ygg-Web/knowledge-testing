import { memo } from "react";
import classes from "./Button.module.scss";

export const Button = memo((props) => {
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
});
