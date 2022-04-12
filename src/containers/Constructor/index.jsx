import React, { useState } from "react";
import { Button } from "../../components/UI/Button";
import { Input } from "../../components/UI/Input";
import { Select } from "../../components/UI/Select";
import { createControl, validate, validateForm } from "../../formHelpers";

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
  test: [],
  formControls: createFormControls(),
  imgControls: "",
  rightAnswerId: 1,
  isFormReady: false,
};

export const Constructor = () => {
  const [fields, setFields] = useState(initialState);

  const onSubmitHandler = (e) => e.preventDefault();

  const addClickQuestion = () => {
    const { question, option1, option2, option3, option4 } =
      fields.formControls;

    const test = fields.test.concat();
    const questionItem = {
      id: test.length + 1,
      question: question.value,
      rightAnswerId: fields.rightAnswerId,
      answers: [
        { text: option2.value, id: option2.id },
        { text: option3.value, id: option3.id },
        { text: option4.value, id: option4.id },
        { text: option1.value, id: option1.id },
      ],
    };

    test.push(questionItem);

    setFields((prev) => ({
      ...prev,
      test,
      formControls: createFormControls(),
      imgControls: "",
      rightAnswerId: 1,
      isFormReady: false,
    }));
  };

  const createClcikQuestion = () => {
    setFields(initialState);
    alert("Тест успешно создан!");
  };

  const selectChangeHandler = (e) => {
    setFields((prev) => ({ ...prev, rightAnswerId: e.target.value }));
  };

  const inputChangeHandler = (e, conrolField) => {
    const formControls = { ...fields.formControls };
    const control = { ...formControls[conrolField] };

    control.value = e.target.value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[conrolField] = control;

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
    <div className="constructor">
      <div className="constructor__inner">
        <h1>Конструктор теста</h1>
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

          <div className="constructor__image">
            <label htmlFor="file">Загрузить изображение</label>
            <input className="input__file" type="file" id="file" />
          </div>

          <Button onClick={addClickQuestion}>Добавить вопрос</Button>
          <Button onClick={createClcikQuestion}>Создать тест</Button>
        </form>
      </div>
    </div>
  );
};
