import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createControl, validate } from "../../../formHelpers";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";
import { Textarea } from "../../UI/Textarea";
import { nextStepConfig } from "../../../redux/actions/maker";
import { useDispatch } from "react-redux";
import { addDescriptionTest } from "../../../redux/actions/maker";

const initialState = {
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
  isFormReady: false, // подумать над блок кнопок до запол полей
};

export const DescriptionTest = () => {
  const [localState, setLocalState] = useState(initialState);
  const dispatch = useDispatch();

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
      localState.inputControl
    );

    setLocalState((prev) => ({
      ...prev,
      inputControl: nextControls,
      isFormReady: true,
    }));
  };

  const textareaChangeHandler = (e, controlField) => {
    const nextControls = updateChangedValue(
      e,
      controlField,
      localState.textareaControl
    );

    setLocalState((prev) => ({
      ...prev,
      textareaControl: nextControls,
      isFormReady: true,
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

  const onClickBack = () => {
    setLocalState(initialState);
  };

  const onClickNextStep = () => {
    const descriptionTest = {
      name: localState.inputControl.value,
      description: localState.textareaControl.value,
      image: localState.imageControl,
    };

    dispatch(addDescriptionTest(descriptionTest));
    dispatch(nextStepConfig());
    setLocalState(initialState);
  };

  let isFormReady = (() => {
    return localState.inputControl.valid && localState.textareaControl.valid;
  })();

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        control={localState.inputControl}
        onChange={(e) => inputChangeHandler(e, localState.inputControl)}
      />

      <Textarea
        control={localState.textareaControl}
        onChange={(e) => textareaChangeHandler(e, localState.textareaControl)}
      />

      <div className="discription__image">
        <label htmlFor="file">Загрузить изображение</label>
        <input type="file" id="file" onChange={imageChangeHandler} />
      </div>

      <div className="discription__bottom">
        <Link to="/">
          <Button onClick={onClickBack}>Назад</Button>
        </Link>
        <Button onClick={onClickNextStep} disabled={!isFormReady}>
          Далее
        </Button>
      </div>
    </form>
  );
};
