import { Link } from "react-router-dom";
import { Container } from "../../../../hoc/Container";
import classes from "./TestHeader.module.scss";

export const TestHeader = () => {
  return (
    <div className={classes.header}>
      <Container>
        <div className={classes.wrapper}>
          <div className={classes.question}>
            <span>Название теста</span>
            <div className={classes.count}>
              <span>Вопросов: 1/12</span>
            </div>
          </div>
          <div className={classes.exit}>
            <span>
              <Link to="/">Сброс</Link>
            </span>
            <span>
              <Link to="/">Выход</Link>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};
