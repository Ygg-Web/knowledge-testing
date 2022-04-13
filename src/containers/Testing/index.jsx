import React, { useState, useEffect } from "react";
import { TestEnd } from "../../components/TestItem/TestEnd";
import { Loader } from "../../components/UI/Loader";
import { ActiveTestItem } from "../../components/TestItem/ActiveTestItem";
import { Axios } from "../../axios";
import { useParams } from "react-router-dom";

const initialState = {
  test: [],
  activeQuestion: 0,
  results: {},
  answerMark: null,
  isFinished: false,
  loading: true,
};

export const Testing = () => {
  const [localState, setLocalState] = useState(initialState);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setLocalState((prev) => ({ ...prev, loading: true }));
      const { data } = await Axios.get(`/tests/${id}.json`);
      const test = await data;

      setLocalState((prev) => ({
        ...prev,
        test,
        loading: false,
      }));
    })();
  }, [id]);

  const onClickAnswer = (answerId) => {
    if (localState.answerMark) {
      const key = Object.keys(localState.answerMark)[0];
      if (localState.answerMark[key] === "success") {
        return;
      }
    }

    const questionItem = localState.test[localState.activeQuestion];
    const results = localState.results;

    if (questionItem.rightAnswerId == answerId) {
      if (!results[questionItem.id]) {
        results[questionItem.id] = "success";
      }

      setLocalState((prev) => ({
        ...prev,
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
      results[questionItem.id] = "failed";
      setLocalState((prev) => ({
        ...prev,
        results,
        answerMark: { [answerId]: "failed" },
      }));
    }
  };

  const isTestEnd = () => {
    return localState.activeQuestion + 1 === localState.test.length;
  };

  const onClickAgain = () => {
    setLocalState((prev) => ({
      ...prev,
      activeQuestion: 0,
      results: {},
      answerMark: null,
      isFinished: false,
    }));
  };

  return (
    <div className="question">
      <div className="question__inner">
        {localState.loading ? (
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
