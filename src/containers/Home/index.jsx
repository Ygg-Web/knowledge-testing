import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTests } from "../../redux/actions/test";
import { Loader, Search } from "../../components/UI";
import { CardTest } from "../../components/TestItem/CardTest";
import { EmptyList } from "../../components/EmptyList";

import classes from "./Home.module.scss";

export const Home = () => {
  const { tests, loading } = useSelector(({ test }) => test);
  const [searchString, setSearchString] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTests());
  }, []);

  const searchChangeHandler = useCallback(
    (e) => setSearchString(e.target.value.toLowerCase()),
    []
  );

  const clearSearchString = useCallback(() => setSearchString(""), []);

  const filtredTests = useMemo(
    () =>
      tests.filter((test) => {
        return (
          test.name.toLowerCase().includes(searchString) ||
          test.description.toLowerCase().includes(searchString)
        );
      }),
    [tests, searchString]
  );

  return (
    <>
      <div className={classes.filter}>
        <Search
          value={searchString}
          onChange={searchChangeHandler}
          onClick={clearSearchString}
        />
      </div>
      {loading ? (
        <Loader />
      ) : !tests.length ? (
        <EmptyList label="Добро пожаловать!" />
      ) : (
        <div className={classes.list}>
          {filtredTests.map((test, index) => (
            <CardTest key={test.id + index} test={test} />
          ))}
        </div>
      )}
    </>
  );
};
