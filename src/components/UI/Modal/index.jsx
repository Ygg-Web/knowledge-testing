import classes from "./Modal.module.scss";

export const Modal = ({ active, setModalActive, children }) => {
  return (
    <div
      className={active ? `${classes.modal} ${classes.active}` : classes.modal}
      onClick={() => setModalActive(false)}
    >
      <div
        className={
          active ? `${classes.content} ${classes.active}` : classes.content
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
