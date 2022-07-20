import classes from "./Textarea.module.scss";

export const Textarea = ({ control, onChange }) => {
  const nameFor = `${control.label} + ${Math.random()}`;
  const cls = [classes.textarea];

  isInvalid(control) && cls.push(classes.invalid);

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={nameFor}>{control.label}</label>
      <textarea id={nameFor} value={control.value} onChange={onChange} />
      {isInvalid(control) ? (
        <span>{control.errorMessage || "Введите верное значение"}</span>
      ) : null}
    </div>
  );
};

function isInvalid({ valid, touched, validation }) {
  return !valid && !!validation && touched;
}
