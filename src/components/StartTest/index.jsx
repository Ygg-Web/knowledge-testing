import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TestEnd } from "../TestItem/TestEnd";
import { Loader } from "../UI/Loader";
import { CurrentQuestion } from "../TestItem/CurrentQuestion";
import { goTestAgain } from "../../redux/actions/test";
import classes from "./StartTest.module.scss";

export const StartTest = ({ state, onClickAnswerId, onAgain }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(goTestAgain());
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
