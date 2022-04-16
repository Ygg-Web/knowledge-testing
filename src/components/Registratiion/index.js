import React, { useState } from "react";
import { Button } from "../UI/Button";
import classes from "./Registration.module.scss";
import {
  createControl,
  updateChangedValue,
  validateForm,
} from "../../formHelpers";
import { Input, renderInputControlsForForm } from "../UI/Input";
import { useDispatch } from "react-redux";
import { auth } from "../../redux/actions/auth";

const initialState = {
  formControls: {
    login: createControl(
      {
        label: "Логин",
        type: "text",
        placeholder: "Логин",
        errorMessage: "Введите корректные даннные",
      },
      { required: true, minLength: 3 }
    ),
    email: createControl(
      {
        label: "Email",
        type: "email",
        placeholder: "Email",
        errorMessage: "Введите корректные даннные",
      },
      { required: true, email: true }
    ),
    password: createControl(
      {
        label: "Пароль",
        type: "password",
        placeholder: "Пароль",
        errorMessage: "Введите корректный пароль",
      },
      { required: true, minLength: 6 }
    ),
    repeatPassword: createControl(
      {
        label: "Повторите пароль",
        type: "password",
        placeholder: "Пароль",
        errorMessage: "Введите корректный пароль",
      },
      { required: true, minLength: 6 }
    ),
  },
  isFormReady: false,
};

export const Registration = () => {
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

  const imageChangeHandler = (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = (e) => {
      setLocalState((prev) => ({ ...prev, imageControl: reader.result }));
    };
  };

  const registerHandler = () => {
    dispatch(
      auth(
        localState.formControls.email.value,
        localState.formControls.password.value,
        false
      )
    );
  };

  const img = {
    type: "file",
    label: "Загрузить аватар",
  };

  return (
    <div className={classes.registration}>
      <h1>Форма регистрации</h1>
      <form onSubmit={onSumbmitHandler}>
        {renderInputControlsForForm(
          localState.formControls,
          onChangeHandler,
          "small"
        )}
        <Input
          control={img}
          onChange={imageChangeHandler}
          typeStyle={"image"}
        />
      </form>
      <Button onClick={registerHandler} disabled={!localState.isFormReady}>
        Зарегистрироваться
      </Button>
    </div>
  );
};
