import { Link } from "react-router-dom";
import classes from "./CardTest.module.scss";

export const CardTest = ({ test }) => {
  return (
    <div className={classes.card}>
      <Link to={`/test/${test.id}`}>
        <img src={test.image} alt="drawing" />
      </Link>
      <div className={classes.body}>
        <Link to={`/test/${test.id}`}>
          <h2>{test.name}</h2>
        </Link>
        <p>{test.description}</p>
      </div>
      <div className="card__bottom">
        {/* <div className="item__rating">
            <i>{test.rating}</i>
          </div>
          <div className="item__limit">
            <i>{test.viewed}</i>
          </div>
          <Link to="/">
            <div className="item__profile">
              <i>{test.author.username}</i>
              <img src={test.author.avatar} alt="avatar" />
            </div>
          </Link> */}
      </div>
    </div>
  );
};
