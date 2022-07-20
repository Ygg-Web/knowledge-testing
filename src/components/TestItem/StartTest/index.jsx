import { useEffect } from "react";
import { TestEnd } from "../TestEnd";
import { Loader } from "../../UI";
import { CurrentQuestion } from "./CurrentQuestion";

import classes from "./StartTest.module.scss";

export const StartTest = ({ state, onClickAnswerId, onAgain }) => {
  useEffect(() => {
    return () => {
      onAgain();
    };
  }, []);

  return (
    <div className={classes.question}>
      {state.loading || !state.test.unit.length ? (
        <Loader />
      ) : state.isFinished ? (
        <TestEnd
          results={state.results}
          test={state.test.unit}
          onAgain={onAgain}
        />
      ) : (
        <CurrentQuestion
          question={state.test.unit[state.activeQuestion].question}
          answers={state.test.unit[state.activeQuestion].answers}
          onClick={onClickAnswerId}
          lengthTest={state.test.unit.length}
          numberAnswer={state.activeQuestion + 1}
          answerMark={state.answerMark}
        />
      )}
    </div>
  );
};
