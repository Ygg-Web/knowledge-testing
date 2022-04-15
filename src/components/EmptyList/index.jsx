import { Link } from "react-router-dom";
import { Button } from "../UI/Button";

export const EmptyList = () => {
  return (
    <div className="emptiness">
      <div className="emptiness__body">
        <h1>Добро пожаловать!</h1>
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
};
