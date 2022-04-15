import React, { useEffect } from "react";
import { CardTest } from "../../components/TestItem/CardTest";
import { Loader } from "../../components/UI/Loader";

import { useSelector, useDispatch } from "react-redux";
import { fetchTests } from "../../redux/actions/test";
import { EmptyList } from "../../components/EmptyList";

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
        <EmptyList />
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
