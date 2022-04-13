import React, { useState } from "react";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";
import { Select } from "../../UI/Select";
import { createControl, validate, validateForm } from "../../../formHelpers";
import { Axios } from "../../../axios";

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
  test: {
    // name: "Имя теста",
    // discription: "краткое описание о чем тест",
    // image: "https://images6.alphacoders.com/488/thumb-1920-488158.jpg",
    unit: [],
  },
  formControls: createFormControls(),
  rightAnswerId: Number(1),
  isFormReady: false,
};

export const ConfigureTest = () => {
  const [fields, setFields] = useState(initialState);

  const onSubmitHandler = (e) => e.preventDefault();

  const addClickQuestion = () => {
    const { question, option1, option2, option3, option4 } =
      fields.formControls;

    const unit = fields.test.unit.concat();
    const questionItem = {
      id: unit.length + 1,
      question: question.value,
      rightAnswerId: fields.rightAnswerId,
      answers: [
        { text: option1.value, id: option1.id },
        { text: option2.value, id: option2.id },
        { text: option3.value, id: option3.id },
        { text: option4.value, id: option4.id },
      ],
    };

    unit.push(questionItem);

    setFields((prev) => ({
      ...prev,
      test: { ...prev.test, unit },
      formControls: createFormControls(),
      rightAnswerId: 1,
      isFormReady: false,
    }));
  };

  const createClcikQuestion = async () => {
    alert("Тест успешно создан!");

    await Axios.post("/tests.json", fields.test);
    setFields(initialState);
  };

  const selectChangeHandler = (e) => {
    setFields((prev) => ({ ...prev, rightAnswerId: e.target.value }));
  };

  const inputChangeHandler = (e, controlField) => {
    const formControls = { ...fields.formControls };
    const control = { ...formControls[controlField] };

    console.log("control", control);

    control.value = e.target.value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlField] = control;

    setFields((prev) => ({
      ...prev,
      formControls,
      isFormReady: validateForm(formControls),
    }));
  };

  const renderFormControls = () => {
    return Object.keys(fields.formControls).map((conrolField, index) => {
      const control = fields.formControls[conrolField];

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
        value={fields.rightAnswerId}
        onChange={selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 },
        ]}
      />

      <Button onClick={addClickQuestion} disabled={!fields.isFormReady}>
        Добавить вопрос
      </Button>
      <Button
        onClick={createClcikQuestion}
        disabled={fields.test.unit.length === 0}
      >
        Создать тест
      </Button>
    </form>
  );
};
