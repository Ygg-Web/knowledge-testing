import React, { useState } from "react";
import { Button } from "../../components/UI/Button";
import { Input } from "../../components/UI/Input";
import { createControl, validate, validateForm } from "../../formHelpers";
import axios from "axios";

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

  const onSumbmitHandler = (e) => {
    e.preventDefault();
  };

  const onChanheHandler = (e, conrolField) => {
    const formControls = { ...localState.formControls };
    const control = { ...formControls[conrolField] };

    control.value = e.target.value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[conrolField] = control;

    setLocalState((prev) => ({
      ...prev,
      formControls,
      isFormReady: validateForm(formControls),
    }));
  };

  const loginHandler = async () => {
    const authData = {
      email: localState.formControls.email.value,
      password: localState.formControls.password.value,
      returnSecureToken: true,
    };
    try {
      await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDULKurhxIEGxtxAzwl5CNGthK33_ZIZKU",
        authData
      );
    } catch (e) {
      alert("Ошибка при входе. Попробуйте еще раз");
    }
  };
  const registerHandler = async () => {
    const authData = {
      email: localState.formControls.email.value,
      password: localState.formControls.password.value,
      returnSecureToken: true,
    };
    try {
      await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDULKurhxIEGxtxAzwl5CNGthK33_ZIZKU",
        authData
      );
    } catch (e) {
      alert("Ошибка, не удалось авторизоваться. Попробуйте еще раз");
    }
  };

  const renderFormControls = () => {
    return Object.keys(localState.formControls).map((controlField, index) => {
      const control = localState.formControls[controlField];
      return (
        <Input
          key={controlField + index}
          control={control}
          onChange={(e) => onChanheHandler(e, controlField)}
        />
      );
    });
  };

  return (
    <div className="authorization">
      <div className="authorization__inner">
        <h1>Авторизация</h1>
        <form onSubmit={onSumbmitHandler}>
          {renderFormControls()}
          <div className="authorization__buttons">
            <Button onClick={loginHandler} disabled={!localState.isFormReady}>
              Войти
            </Button>
            <Button
              onClick={registerHandler}
              disabled={!localState.isFormReady}
            >
              Зарегистрироваться
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
