import React from "react";

export const HeaderItem = () => {
  return (
    <div className="question__header">
      <div className="container">
        <div className="wrapper">
          <div className="question__name">
            <span>Название теста</span>
            <div className="question__count">
              <span>Вопросов: 1/12</span>
            </div>
          </div>
          <div className="question__exit">
            <span>
              <a href="/" className="clear">
                Сброс
              </a>
            </span>
            <span>
              <a href="/" className="back">
                Выход
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
