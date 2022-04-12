import classes from "./AnswerItem.module.scss";

export const AnswerItem = ({ answer, onClick, answerMark }) => {
  const nameId = `answer + ${answer.id}`;
  const cls = [classes.answer];
  if (answerMark) {
    cls.push(classes[answerMark]);
  }

  return (
    <div className={cls.join(" ")}>
      <label onClick={(e) => onClick(answer.id)} htmlFor={nameId}>
        {answer.text}
      </label>
      <input type="radio" name="answer" id={nameId} value={answer.id} />
    </div>
  );
};
