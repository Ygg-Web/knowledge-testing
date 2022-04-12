import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../UI/Button";

export const FinishedTest = () => {
  return (
    <div>
      <div>Вы ответили правильно 10 из 10</div>
      <Button>Еще раз!</Button>
      <Link to="/">
        <Button>Завершить!</Button>
      </Link>
    </div>
  );
};
