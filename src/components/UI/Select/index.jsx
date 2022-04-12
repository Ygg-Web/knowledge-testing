import classes from "./Selecet.module.scss";

export const Select = (props) => {
  const nameFor = `${props.label} + ${Math.random()} `;

  return (
    <div className={classes.select}>
      <label htmlFor={nameFor}>{props.label}</label>
      <select id={nameFor} value={props.value} onChange={props.onChange}>
        {props.options.map((option, index) => (
          <option key={option.value + index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};
