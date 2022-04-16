import classes from "./AnswerItem.module.scss";

export const AnswerItem = ({ answer, onClick, answerMark = "" }) => {
  const nameId = `answer + ${answer.id}`;
  const cls = [classes.answer, classes[answerMark]];

  return (
    <div className={cls.join(" ")}>
      <label onClick={() => onClick(answer.id)} htmlFor={nameId}>
        {answer.text}
      </label>
      <input type="radio" id={nameId} value={answer.id} />
    </div>
  );
};
