import React from "react";

export const TestItem = () => {
  return (
    <div className="question">
      <div className="question__inner">
        <div className="question__title">
          <h3>Название вопроса?</h3>
        </div>
        <div className="answer__body">
          <h4>Выберите правильный вариант:</h4>
          <div className="answer__item">
            <label for="answer0">вариант 1</label>
            <input type="radio" name="answer" id="answer0" value="0" />
          </div>
          <div className="answer__item">
            <label for="answer1">вариант 1</label>
            <input type="radio" name="answer" id="answer1" value="1" />
          </div>
          <div className="answer__item">
            <label for="answer2">вариант 1</label>
            <input type="radio" name="answer" id="answer2" value="2" />
          </div>
          <div className="answer__item">
            <label for="answer3">вариант 1</label>
            <input type="radio" name="answer" id="answer3" value="3" />
          </div>
        </div>
      </div>
    </div>
  );
};
