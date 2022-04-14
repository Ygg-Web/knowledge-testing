import { AnswerItem } from "../AnswerItem";

export const ActiveTestItem = (props) => {
  return (
    <>
      <div className="question__title">
        <h3>
          <strong>{props.numberAnswer}.</strong>&nbsp;{props.question}
        </h3>
        <small>
          {props.numberAnswer}/{props.lengthTest}
        </small>
      </div>
      <div className="answer__body">
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
