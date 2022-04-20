import classes from "./Upload.module.scss";

export const UploadFile = ({ control, onChange, image, typeStyle }) => {
  const nameFor = `${control.type} + ${Math.random()}`;
  const cls = [classes.wrapper, classes[typeStyle]];

  return (
    <div className={cls.join(" ")}>
      <div className={classes.image}>
        <img ref={image} src="" alt="" />
      </div>
      <label htmlFor={nameFor}>{control.label}</label>
      <input type="file" id={nameFor} onChange={onChange} hidden />
      {!control.valid && control.touched ? (
        <span>{control.errorMessage || "Введите верное значение"}</span>
      ) : null}
    </div>
  );
};
