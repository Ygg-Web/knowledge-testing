import { Link } from "react-router-dom";

export const CartTest = ({ test }) => {
  return (
    <div className="test__item">
      <div className="item__inner">
        <Link to={`/test/:${test.id}`}>
          <img className="item__image" src={test.image} />
        </Link>
        <div className="item__body">
          <Link to={`/test/:${test.id}`}>
            <h2 className="item__title">{test.nameTest}</h2>
          </Link>
          <div className="item__text">
            <p>{test.discription}</p>
          </div>
        </div>
        <div className="item__bottom">
          <div className="item__rating">
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
          </Link>
        </div>
      </div>
    </div>
  );
};
