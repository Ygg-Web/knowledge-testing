import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createControl, validate, validateForm } from "../../../formHelpers";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";
import { Textarea } from "../../UI/Textarea";
import { Axios } from "../../../axios";

const initialState = {
  test: {
    name: "",
    discription: "",
    image: "",
  },
  inputControl: createControl(
    {
      label: "Назовите свой тест!",
      errorMessage: "Тест не может быть без названия!",
    },
    { required: true, minLength: 5 }
  ),
  textareaControl: createControl(
    {
      label: "Напишите о чем ваш тест!",
      errorMessage: "Необходимо кратко описать о чем ваш тест!",
    },
    { required: true, minLength: 10 }
  ),
  imageControl: "",
  isFormReady: false,
};

export const DiscriptionTest = () => {
  const [state, setState] = useState(initialState);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const updateChangedValue = (e, controlField, prevControls) => {
    //сделать и для нескольких контролов и для одного через if (если поле с контролами есть то го, иначе один)
    const nextControls = { ...prevControls };

    nextControls.value = e.target.value;
    nextControls.touched = true;
    nextControls.valid = validate(nextControls.value, nextControls.validation);

    // const control = { ...nextControls[controlField] }; // когда есть контролы
    // nextControls[controlField] = nextControls;

    return nextControls;
  };

  const inputChangeHandler = (e, controlField) => {
    const nextControls = updateChangedValue(
      e,
      controlField,
      state.inputControl
    );

    setState((prev) => ({
      ...prev,
      inputControl: nextControls,
      isFormReady: true,
    }));
  };

  const textareaChangeHandler = (e, controlField) => {
    const nextControls = updateChangedValue(
      e,
      controlField,
      state.textareaControl
    );

    setState((prev) => ({
      ...prev,
      textareaControl: nextControls,
      isFormReady: true,
    }));
  };

  const onClickBack = () => {
    setState(initialState);
  };

  const onClickNextStep = async () => {
    const test = {
      name: state.inputControl.value,
      discription: state.textareaControl.value,
      image: state.imageControl,
    };

    await Axios.post("/tests.json", test);

    setState((prev) => ({
      ...prev,
      test: { ...prev.test, ...test },
      isFormReady: false,
    }));
  };

  const imageChangeHandler = (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = (e) => {
      setState((prev) => ({ ...prev, imageControl: reader.result }));
    };
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        control={state.inputControl}
        onChange={(e) => inputChangeHandler(e, state.inputControl)}
      />

      <Textarea
        control={state.textareaControl}
        onChange={(e) => textareaChangeHandler(e, state.textareaControl)}
      />

      <div className="discription__image">
        <label htmlFor="file">Загрузить изображение</label>
        <input type="file" id="file" onChange={imageChangeHandler} />
      </div>

      <div className="discription__bottom">
        <Link to="/">
          <Button onClick={onClickBack}>Назад</Button>
        </Link>
        <Link to="/constructor/step2">
          <Button onClick={onClickNextStep}>Далее</Button>
        </Link>
      </div>
    </form>
  );
};
