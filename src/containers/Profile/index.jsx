import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI";
import { logout } from "../../redux/actions/auth";
import classes from "./Profile.module.scss";

export const Profile = () => {
  const { displayName, avatar } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <div class={classes.person}>
      <div class={classes.info}>
        <div class={classes.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={classes.name}>{displayName}</div>
        <Button onClick={logOut}>Выход</Button>
      </div>

      <div class={classes.tests}>
        <div class={classes.test}>тут тест</div>
        <div class={classes.test}>тут тест</div>
        <div class={classes.test}>тут тест</div>
        <div class={classes.test}>тут тест</div>
        <div class={classes.test}>тут тест</div>
      </div>
    </div>
  );
};
