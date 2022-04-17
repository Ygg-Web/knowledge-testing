import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTests } from "../../redux/actions/test";
import { Loader } from "../../components/UI";
import { CardTest } from "../../components/TestItem/CardTest";
import { EmptyList } from "../../components/EmptyList";

import classes from "./ListTest.module.scss";

export const Home = () => {
  const { tests, loading } = useSelector(({ test }) => test);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTests());
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : !tests.length ? (
        <EmptyList />
      ) : (
        <div className={classes.list}>
          {tests.map((test, index) => (
            <CardTest key={test.id + index} test={test} />
          ))}
        </div>
      )}
    </>
  );
};
