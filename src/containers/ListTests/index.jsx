import React, { useEffect } from "react";
import { CardTest } from "../../components/TestItem/CardTest";
import { Loader } from "../../components/UI/Loader";

import { useSelector, useDispatch } from "react-redux";
import { fetchTests } from "../../redux/actions/test";

export const ListTests = () => {
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
        <h2>Тесты отсутствуют.</h2>
      ) : (
        <div className="tests__list">
          {tests.map((test, index) => (
            <CardTest key={test.id + index} test={test} />
          ))}
        </div>
      )}
    </>
  );
};
