import { Link } from "react-router-dom";
import { Button } from "../../UI/Button";
import classes from "./TestEnd.module.scss";

export const TestEnd = ({ results, test, onAgain }) => {
  const successAnswer = Object.keys(results).reduce((acc, key) => {
    if (results[key] === "success") {
      acc++;
    }
    return acc;
  }, 0);

  return (
    <div className={classes.finished}>
      <h2>Тест завершен!</h2>
      <div>
        Вы ответили правильно {successAnswer} из {test.length}
      </div>
      <div className={classes.list}>
        {test.map((item, index) => {
          return (
            <p key={item.id + index}>
              {index + 1}. {item.question}
              <img
                src={
                  results[item.id] === "failed"
                    ? "/assets/no.svg"
                    : "/assets/ok.svg"
                }
                alt="state"
              />
            </p>
          );
        })}
      </div>
      <div className={classes.buttons}>
        <Button onClick={onAgain}>Еще раз!</Button>
        <Link to="/">
          <Button>Завершить!</Button>
        </Link>
      </div>
    </div>
  );
};
