import React, { useState } from "react";
import { Button } from "../../components/UI/Button";
import { renderInputControlsForForm } from "../../components/UI/Input";
import {
  createControl,
  validateForm,
  updateChangedValue,
} from "../../formHelpers";
import { useDispatch } from "react-redux";
import { auth } from "../../redux/actions/auth";
import classes from "./Auth.module.scss";
import { Link } from "react-router-dom";

const initialState = {
  formControls: {
    email: createControl(
      {
        label: "Введите ваш ID",
        type: "email",
        errorMessage: "Введите корректные даннные",
      },
      { required: true, email: true }
    ),
    password: createControl(
      {
        label: "Введите пароль",
        type: "password",
        errorMessage: "Введите корректный пароль",
      },
      { required: true, minLength: 6 }
    ),
  },
  isFormReady: false,
};

export const Auth = () => {
  const [localState, setLocalState] = useState(initialState);
  const dispatch = useDispatch();

  const onSumbmitHandler = (e) => e.preventDefault();

  const onChangeHandler = (e, prevState, controlField) => {
    const nextControls = updateChangedValue(e, prevState, controlField);

    setLocalState((prev) => ({
      ...prev,
      formControls: nextControls,
      isFormReady: validateForm(nextControls),
    }));
  };

  const loginHandler = () => {
    dispatch(
      auth(
        localState.formControls.email.value,
        localState.formControls.password.value,
        true
      )
    );
  };

  return (
    <div className={classes.authorization}>
      <h1>Авторизация</h1>
      <form onSubmit={onSumbmitHandler}>
        {renderInputControlsForForm(
          localState.formControls,
          onChangeHandler,
          "registration"
        )}
        <div className={classes.buttons}>
          <Button onClick={loginHandler} disabled={!localState.isFormReady}>
            Войти
          </Button>
          <Link to="/register">
            <Button>Зарегистрироваться</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
