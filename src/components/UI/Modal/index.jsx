import classes from "./Modal.module.scss";

export const Modal = ({ active, onClickHiddenModal, children }) => {
  return (
    <div
      className={active ? `${classes.modal} ${classes.active}` : classes.modal}
      onClick={onClickHiddenModal}
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
