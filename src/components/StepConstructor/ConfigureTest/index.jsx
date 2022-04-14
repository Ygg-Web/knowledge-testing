import React, { useState, useEffect } from "react";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";
import { Select } from "../../UI/Select";
import { createControl, validate, validateForm } from "../../../formHelpers";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuestionInUnit,
  createUnitWithQuestion,
  resetTest,
} from "../../../redux/actions/maker";

const creatOptionControl = (number) => {
  return createControl(
    {
      label: `Введите вариант ${number}`,
      errorMessage: "Поле не может быть пустым",
      id: number,
    },
    { required: true }
  );
};

const createFormControls = () => {
  return {
    question: createControl(
      {
        label: "Введите вопрос",
        errorMessage: "Необходимо ввести вопрос",
      },
      { required: true }
    ),
    option1: creatOptionControl(1),
    option2: creatOptionControl(2),
    option3: creatOptionControl(3),
    option4: creatOptionControl(4),
  };
};

const initialState = {
  formControls: createFormControls(),
  rightAnswerId: Number(1),
  isFormReady: false,
};

export const ConfigureTest = () => {
  const [localState, setLocalState] = useState(initialState);
  const test = useSelector(({ maker }) => maker.test);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetTest());
    };
  }, []);

  const onSubmitHandler = (e) => e.preventDefault();

  const addClickQuestion = () => {
    const { question, option1, option2, option3, option4 } =
      localState.formControls;

    const questionItem = {
      id: test.unit.length + 1,
      question: question.value,
      rightAnswerId: localState.rightAnswerId,
      answers: [
        { text: option1.value, id: option1.id },
        { text: option2.value, id: option2.id },
        { text: option3.value, id: option3.id },
        { text: option4.value, id: option4.id },
      ],
    };

    dispatch(addQuestionInUnit(questionItem));
    setLocalState(initialState);
  };

  const createClcikQuestion = () => {
    dispatch(createUnitWithQuestion());
    setLocalState(initialState);
  };

  const selectChangeHandler = (e) => {
    setLocalState((prev) => ({ ...prev, rightAnswerId: e.target.value }));
  };

  const inputChangeHandler = (e, controlField) => {
    const formControls = { ...localState.formControls };
    const control = { ...formControls[controlField] };

    control.value = e.target.value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlField] = control;

    setLocalState((prev) => ({
      ...prev,
      formControls,
      isFormReady: validateForm(formControls),
    }));
  };

  const renderFormControls = () => {
    return Object.keys(localState.formControls).map((conrolField, index) => {
      const control = localState.formControls[conrolField];

      return (
        <Input
          key={conrolField + index}
          control={control}
          onChange={(e) => inputChangeHandler(e, conrolField)}
        />
      );
    });
  };

  return (
    <form className="constructor__form" onSubmit={onSubmitHandler}>
      {renderFormControls()}

      <Select
        label="Выберите правильный ответ"
        value={localState.rightAnswerId}
        onChange={selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 },
        ]}
      />
      <Button onClick={addClickQuestion} disabled={!localState.isFormReady}>
        Добавить вопрос
      </Button>
      <Button onClick={createClcikQuestion} disabled={test.unit.length === 0}>
        Создать тест
      </Button>
    </form>
  );
};
