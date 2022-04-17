import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Input, Textarea, UploadFile } from "../../../../components/UI";
import {
  createControl,
  updateSrcFile,
  updateValue,
  readFile,
} from "../../../../helpers";
import { nextStepConfig } from "../../../../redux/actions/maker";
import { addDescriptionTest } from "../../../../redux/actions/maker";

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
  cover: {
    label: "Загрузить аватар!",
    errorMessage: "Загрузите изображение в формате jpeg или png",
    extension: ["image/png", "image/jpeg"],
    valid: false,
    touched: false,
    src: "",
  },
};

export const DescriptionTest = () => {
  const [localState, setLocalState] = useState(initialState);
  const dispatch = useDispatch();

  const imgTeg = useRef(null);

  const inputChangeHandler = (e, prevState) => {
    const nextControl = updateValue(e, prevState);

    setLocalState((prev) => ({
      ...prev,
      inputControl: nextControl,
    }));
  };

  const textareaChangeHandler = (e, prevControls) => {
    const nextControl = updateValue(e, prevControls);

    setLocalState((prev) => ({
      ...prev,
      textareaControl: nextControl,
    }));
  };

  const imageChangeHandler = async (e) => {
    const image = e.target.files[0];
    const result = await readFile(image);
    const updateCover = updateSrcFile(localState.cover, image, result);

    imgTeg.current.src = updateCover.src;
    setLocalState((prev) => ({ ...prev, cover: updateCover }));
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
    return (
      localState.inputControl.valid &&
      localState.textareaControl.valid &&
      localState.cover
    );
  })();

  return (
    <>
      <UploadFile
        control={localState.cover}
        image={imgTeg}
        onChange={imageChangeHandler}
        typeStyle={"big"}
      />
      <Input
        control={localState.inputControl}
        onChange={(e) => inputChangeHandler(e, localState.inputControl)}
        typeStyle="default"
      />

      <Textarea
        control={localState.textareaControl}
        onChange={(e) => textareaChangeHandler(e, localState.textareaControl)}
      />

      <div className="buttons">
        <Link to="/">
          <Button onClick={onClickBack}>Назад</Button>
        </Link>
        <Button onClick={onClickNextStep} disabled={!isFormReady}>
          Далее
        </Button>
      </div>
    </>
  );
};
