import classes from "./AnswerItem.module.scss";

export const AnswerItem = ({ answer, onClick }) => {
  const nameId = `answer + ${answer.id}`;
  return (
    <div className={classes.answer}>
      <label onClick={onClick} htmlFor={nameId}>
        {answer.text}
      </label>
      <input type="radio" name="answer" id={nameId} value={answer.id} />
    </div>
  );
};
