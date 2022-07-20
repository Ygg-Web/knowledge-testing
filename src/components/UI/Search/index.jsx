import { memo } from "react";
import classes from "./Search.module.scss";

export const Search = memo(({ value, onChange, onClick }) => {
  return (
    <div className={classes.search}>
      <input
        type="text"
        placeholder="Search ..."
        value={value}
        onChange={onChange}
      />
      {value ? <p onClick={onClick}>&#10060;</p> : <b> &#128269;</b>}
    </div>
  );
});
