import React, { useState } from "react";
import { TestEnd } from "../../components/TestItem/TestEnd";
import { Loader } from "../../components/UI/Loader";
import { ActiveTestItem } from "../../components/TestItem/ActiveTestItem";

const initialState = {
  results: {},
  isFinished: false,
  activeQuestion: 0,
  answerMark: null,
  test: [
    {
      question: "название вопроса?",
      rightAnswerId: 2,
      id: 1,
      answers: [
        { text: "вариант ответа 1", id: 1 },
        { text: "вариант ответа 2", id: 2 },
        { text: "вариант ответа 3", id: 3 },
        { text: "вариант ответа 4", id: 4 },
      ],
    },
    {
      question: "название вопросаasdasda?",
      rightAnswerId: 2,
      id: 2,
      answers: [
        { text: "вариант ответа 1", id: 1 },
        { text: "вариант ответа 2", id: 2 },
        { text: "вариант ответа 3", id: 3 },
        { text: "вариант ответа 4", id: 4 },
      ],
    },
    {
      question: "название вопросаasdasdas?",
      rightAnswerId: 3,
      id: 3,

      answers: [
        { text: "вариант ответа 1", id: 1 },
        { text: "вариант ответа 2", id: 2 },
        { text: "вариант ответа 3", id: 3 },
        { text: "вариант ответа 4", id: 4 },
      ],
    },
  ],
};

export const Testing = () => {
  const [localState, setLocalState] = useState(initialState);

  const [loading, setLoading] = useState(false);

  const onClickAnswer = (answerId) => {
    if (localState.answerMark) {
      const key = Object.keys(localState.answerMark)[0];
      if (localState.answerMark[key] === "success") {
        return;
      }
    }

    console.log(answerId);
    const question = localState.test[localState.activeQuestion];
    const results = localState.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }

      setLocalState((prev) => ({
        ...prev,
        // results: { [answerId]: "success" },
        results,
        answerMark: { [answerId]: "success" },
      }));

      const timeout = window.setTimeout(() => {
        if (isTestEnd()) {
          setLocalState((prev) => ({
            ...prev,
            isFinished: true,
          }));
        } else {
          setLocalState((prev) => ({
            ...prev,
            activeQuestion: localState.activeQuestion + 1,
            answerMark: null,
          }));
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "failed";
      setLocalState((prev) => ({
        ...prev,
        // results: { [answerId]: "failed" },
        results,
        answerMark: { [answerId]: "failed" },
      }));
    }
  };

  const isTestEnd = () => {
    return localState.activeQuestion + 1 === localState.test.length;
  };

  const onClickAgain = () => {
    setLocalState(initialState);
  };

  return (
    <div className="question">
      <div className="question__inner">
        {loading ? (
          <Loader />
        ) : localState.isFinished ? (
          <TestEnd
            results={localState.results}
            test={localState.test}
            onAgain={onClickAgain}
          />
        ) : (
          <ActiveTestItem
            question={localState.test[localState.activeQuestion].question}
            answers={localState.test[localState.activeQuestion].answers}
            onClick={onClickAnswer}
            lengthTest={localState.test.length}
            numberAnswer={localState.activeQuestion + 1}
            answerMark={localState.answerMark}
          />
        )}
      </div>
    </div>
  );
};
