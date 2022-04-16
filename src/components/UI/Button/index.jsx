import classes from "./Button.module.scss";

export const Button = (props) => {
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
