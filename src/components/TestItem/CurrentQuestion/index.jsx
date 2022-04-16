import { AnswerItem } from "./AnswerItem";
import classes from "./CurrentQuestion.module.scss";

export const CurrentQuestion = (props) => {
  return (
    <>
      <div className={classes.title}>
        <h2>
          {props.numberAnswer}.&nbsp;{props.question}
        </h2>
        <small>
          {props.numberAnswer}/{props.lengthTest}
        </small>
      </div>
      <div className="answers">
        <h4>Выберите правильный вариант:</h4>
        {props.answers.map((answer, index) => (
          <AnswerItem
            key={answer.id + index}
            answer={answer}
            onClick={props.onClick}
            answerMark={props.answerMark ? props.answerMark[answer.id] : null}
          />
        ))}
      </div>
    </>
  );
};
