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

export const renderInputControlsForForm = (
  controlFields,
  onChange,
  typeStyle
) => {
  return Object.keys(controlFields).map((controlField, index) => {
    const control = controlFields[controlField];
    return (
      <Input
        key={controlField + index}
        control={control}
        onChange={(e) => onChange(e, controlFields, controlField)}
        typeStyle={typeStyle}
      />
    );
  });
};

function isInvalid({ valid, touched, validation }) {
  return !valid && !!validation && touched;
}
