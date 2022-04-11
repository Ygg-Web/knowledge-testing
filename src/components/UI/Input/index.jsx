export const Input = (props) => {
  const nameFor = `${props.type} + ${Math.random()}`;

  return (
    <div className={("constructor__input", isInvalid(props) && "invalid")}>
      <label for={nameFor}>{props.label}</label>
      <input
        type={props.type || "text"}
        id={nameFor}
        value={props.value}
        onChange={props.onChange}
        className="control__input"
      />
      {isInvalid(props) && (
        <span>{props.errorMessage || "Введите верное значение"}</span>
      )}
    </div>
  );
};

function isInvalid({ valid, toushed, shouldValidate }) {
  return !valid && shouldValidate && toushed;
}
