import React, { useState } from "react";
import { Button } from "../../components/UI/Button";
import { Input } from "../../components/UI/Input";
import { createControl, validate, validateForm } from "../../formHelpers";
import { useDispatch } from "react-redux";
import { auth } from "../../redux/actions/auth";

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

  const loginHandler = () => {
    dispatch(
      auth(
        localState.formControls.email.value,
        localState.formControls.password.value,
        true
      )
    );
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
