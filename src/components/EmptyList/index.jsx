import { memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "../UI";
import classes from "./EmptyList.module.scss";

export const EmptyList = memo(({ label }) => {
  return (
    <div className={classes.emptiness}>
      <div className={classes.body}>
        <h1>{label}</h1>
        <p>
          Текущий список тестов пуст. Для создания своего неповторимого теста,
          необходимо перейти в Конструктор
        </p>
      </div>
      <Link to="/constructor">
        <Button>Перейти</Button>
      </Link>
    </div>
  );
});
