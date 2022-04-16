import classes from "./input.module.scss";

export const Input = ({ control, onChange, typeStyle }) => {
  const nameFor = `${control.type} + ${Math.random()}`;
  const cls = [classes.input, classes[typeStyle]];
  isInvalid(control) && cls.push(classes.invalid);

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={nameFor}>{control.label}</label>
      <input
        type={control.type || "text"}
        id={nameFor}
        value={control.value}
        onChange={onChange}
        placeholder={control.placeholder || ""}
      />
      {isInvalid(control) ? (
        <span>{control.errorMessage || "Введите верное значение"}</span>
      ) : null}
    </div>
  );
};

function isInvalid({ valid, touched, validation }) {
  return !valid && !!validation && touched;
}
