import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clickAnswerInTest,
  fetchAllTestById,
  goTestAgain,
} from "../../redux/actions/test";
import { StartTest } from "../../components/StartTest";
import { Modal } from "../../components/UI/Modal";
import { Loader } from "../../components/UI/Loader";
import classes from "./PreviewTest.module.scss";

export const PreviewTest = () => {
  const [modalActive, setModalActive] = useState(false);
  const state = useSelector(({ test }) => test);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAllTestById(id));
  }, []);

  const onClickAnswerId = useCallback((id) => {
    dispatch(clickAnswerInTest(id));
  }, []);

  const onAgain = useCallback(() => {
    dispatch(goTestAgain());
  }, []);

  return (
    <>
      {state.loading || !state.test ? (
        <Loader />
      ) : (
        <div className={classes.test}>
          <img src={state.test.image} alt="test-img" />
          <div className={classes.body}>
            <div className={classes.content}>
              <h2>{state.test.name}</h2>
              <p>{state.test.description}</p>
            </div>
            <div className={classes.bottom}>
              <p>количество вопросов - {state.test.unit.length}</p>
              <Button onClick={() => setModalActive(true)}>Поехали!</Button>
            </div>
          </div>

          <Modal active={modalActive} setModalActive={setModalActive}>
            <StartTest
              state={state}
              onClickAnswerId={onClickAnswerId}
              onAgain={onAgain}
            />
          </Modal>
        </div>
      )}
    </>
  );
};

{
  /* <div className="test__info">
            <a className="info__user" href="/">
              <img
                src="https://yt3.ggpht.com/a/AATXAJz_1rU2Tf3KCJoPZfd7ibjAeyqR9UIHEWB8cQ=s900-c-k-c0xffffffff-no-rj-mo"
                alt="avatar"
              />
              <span>username</span>
            </a>
            <a className="info__rating" href="/">
              <span>123</span>
            </a>
            <a className="info__done" href="/">
              <span>500</span>
            </a>
          </div> */
}
