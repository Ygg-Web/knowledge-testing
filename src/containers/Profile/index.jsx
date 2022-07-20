import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EmptyList } from "../../components/EmptyList";
import { CardTest } from "../../components/TestItem/CardTest";
import { Button, Loader, Search } from "../../components/UI";
import { deleteUser, logout } from "../../redux/actions/auth";
import { fetchTests, removeTest } from "../../redux/actions/test";

import classes from "./Profile.module.scss";

export const Profile = () => {
  const [searchString, setSearchString] = useState("");
  const { displayName, avatar, email } = useSelector(({ auth }) => auth);
  const { tests, loading } = useSelector(({ test }) => test);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userTests = useMemo(
    () => tests.filter((test) => test.emailAuthor === email),
    [tests, email]
  );

  const filtredTests = useMemo(
    () =>
      userTests.filter((test) => {
        return (
          test.name.toLowerCase().includes(searchString) ||
          test.description.toLowerCase().includes(searchString)
        );
      }),
    [userTests, searchString]
  );

  useEffect(() => {
    dispatch(fetchTests());
  }, []);

  const logOut = useCallback(() => {
    dispatch(logout());
    navigate("/", { replace: true });
  }, []);

  const onClickDeleteTest = useCallback((id) => dispatch(removeTest(id)), []);

  const deleteProfile = useCallback(() => dispatch(deleteUser()), []);

  const clearSearchString = useCallback(() => setSearchString(""), []);

  const searchChangeHandler = useCallback(
    (e) => setSearchString(e.target.value.toLowerCase()),
    []
  );

  return (
    <div className={classes.person}>
      <div className={classes.info}>
        <div className={classes.profile}>
          <div className={classes.avatar}>
            <img src={avatar} alt="avatar" />
          </div>
          <h3 className={classes.name}>{displayName}</h3>
          <Button onClick={logOut}>Выход</Button>
          <Button onClick={deleteProfile}>Удалить аккаунт</Button>
        </div>
      </div>
      <div className={classes.main}>
        <div className={classes.filter}>
          <Search
            value={searchString}
            onChange={searchChangeHandler}
            onClick={clearSearchString}
          />
        </div>
        {loading ? (
          <Loader />
        ) : !userTests.length ? (
          <EmptyList />
        ) : (
          <div className={classes.tests}>
            {filtredTests.map((test, index) => (
              <CardTest
                key={test.id + index}
                test={test}
                user={email}
                onClick={onClickDeleteTest}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
