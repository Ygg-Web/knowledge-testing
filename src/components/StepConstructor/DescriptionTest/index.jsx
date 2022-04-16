import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Input, Textarea } from "../../UI";
import { createControl, updateChangedValue } from "../../../formHelpers";
import { nextStepConfig } from "../../../redux/actions/maker";
import { addDescriptionTest } from "../../../redux/actions/maker";

import classes from "./DescriptionTest.module.scss";

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
};

export const DescriptionTest = () => {
  const [localState, setLocalState] = useState(initialState);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => e.preventDefault();

  const inputChangeHandler = (e, prevState) => {
    const nextControl = updateChangedValue(e, prevState);

    setLocalState((prev) => ({
      ...prev,
      inputControl: nextControl,
    }));
  };

  const textareaChangeHandler = (e, prevControls) => {
    const nextControl = updateChangedValue(e, prevControls);

    setLocalState((prev) => ({
      ...prev,
      textareaControl: nextControl,
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

  const onClickBack = () => setLocalState(initialState);

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

  const isFormReady = (() => {
    return localState.inputControl.valid && localState.textareaControl.valid;
  })();

  const img = {
    type: "file",
    label: "Загрузить изображение",
  };

  return (
    <form className={classes.description} onSubmit={onSubmitHandler}>
      <Input
        control={localState.inputControl}
        onChange={(e) => inputChangeHandler(e, localState.inputControl)}
        typeStyle="default"
      />

      <Textarea
        control={localState.textareaControl}
        onChange={(e) => textareaChangeHandler(e, localState.textareaControl)}
      />

      <Input control={img} onChange={imageChangeHandler} typeStyle={"image"} />

      <div className={classes.buttons}>
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
