import React, { useCallback, useEffect } from "react";
import { TestEnd } from "../../components/TestItem/TestEnd";
import { Loader } from "../../components/UI/Loader";
import { ActiveTestItem } from "../../components/TestItem/ActiveTestItem";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTestById,
  clickAnswerInTest,
  goTestAgain,
} from "../../redux/actions/test";

export const Testing = () => {
  const state = useSelector(({ test }) => test);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    console.log("123");
    dispatch(fetchTestById(id));

    return () => {
      dispatch(goTestAgain);
    };
  }, []);

  const onClickAnswerId = useCallback((id) => {
    dispatch(clickAnswerInTest(id));
  }, []);

  const onAgain = useCallback(() => {
    dispatch(goTestAgain());
  }, []);

  return (
    <div className="question">
      <div className="question__inner">
        {state.loading || !state.test.length ? (
          <Loader />
        ) : state.isFinished ? (
          <TestEnd
            results={state.results}
            test={state.test}
            onAgain={onAgain}
          />
        ) : (
          <ActiveTestItem
            question={state.test[state.activeQuestion].question}
            answers={state.test[state.activeQuestion].answers}
            onClick={onClickAnswerId}
            lengthTest={state.test.length}
            numberAnswer={state.activeQuestion + 1}
            answerMark={state.answerMark}
          />
        )}
      </div>
    </div>
  );
};
