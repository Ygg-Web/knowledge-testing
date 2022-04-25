import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Modal, Loader } from "../../components/UI";
import {
  clickAnswerInTest,
  fetchAllTestById,
  goTestAgain,
} from "../../redux/actions/test";
import { StartTest } from "../../components/TestItem/StartTest";

import classes from "./TestPage.module.scss";

export const TestPage = () => {
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

  const onClickHiddenModal = useCallback(() => {
    setModalActive(false);
    onAgain();
  }, []);

  const onClickShowModal = useCallback(() => {
    setModalActive(true);
  }, []);

  return (
    <>
      {state.loading || !state.test ? (
        <Loader />
      ) : (
        <div className={classes.test}>
          <div className={classes.image}>
            <img src={state.test.image} alt="test-img" />
          </div>
          <div className={classes.body}>
            <div className={classes.content}>
              <h2>{state.test.name}</h2>
              <p>{state.test.description}</p>
            </div>
            <div className={classes.bottom}>
              <p>количество вопросов - {state.test.unit.length}</p>
              <Button onClick={onClickShowModal}>Поехали!</Button>
            </div>
          </div>
          <Modal active={modalActive} onClickHiddenModal={onClickHiddenModal}>
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
