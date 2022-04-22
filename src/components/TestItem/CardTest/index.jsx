import { Link } from "react-router-dom";
import { Button } from "../../UI";
import classes from "./CardTest.module.scss";

export const CardTest = ({ test, user, onClick }) => {
  return (
    <div className={classes.card}>
      <Link to={`/test/${test.id}`}>
        <div className={classes.image}>
          <img src={test.image} alt="drawing" />
        </div>
      </Link>
      <div className={classes.body}>
        <Link to={`/test/${test.id}`}>
          <h2>{test.name}</h2>
        </Link>
        <p>{test.description}</p>
        <div className={classes.profile}>
          <h4>{test.nameAuthor}</h4>
          <img src={test.avatarAuthor} alt="avatar" />
        </div>
      </div>
      <div className={classes.bottom}>
        {user === test.emailAuthor && (
          <Button onClick={() => onClick(test.id)}>Удалить</Button>
        )}
      </div>
    </div>
  );
};
