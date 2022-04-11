export const Button = (props) => {
  return (
    <button
      className={("constructor__btn-add btn", props.styles)}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
