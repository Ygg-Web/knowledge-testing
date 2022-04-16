import classes from "./Container.module.scss";

export const Container = ({ children }) => {
  return (
    <main>
      <div className={classes.container}>{children}</div>
    </main>
  );
};
