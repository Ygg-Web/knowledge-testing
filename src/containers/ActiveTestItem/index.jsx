import React from "react";
import { AnswerItem } from "../../components/TestItem/AnswerItem";

const initialState = {
  answers: [
    { text: "вариант ответа 1", id: 1 },
    { text: "вариант ответа 2", id: 2 },
    { text: "вариант ответа 3", id: 3 },
    { text: "вариант ответа 4", id: 4 },
  ],
  question: "название вопроса?",
};

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
          />
        ))}
      </div>
    </>
  );
};
