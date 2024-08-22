import { useState } from "react";
import styles from "./styles.module.css";
import Answer from "../Answer";

function MathQuiz() {
  const [score, setScore] = useState(0);

  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);

  function updatePoints() {
    setScore(score + 1);
  }

  return (
    <div className={styles.container}>
      <h1>Ваши очки: {score}</h1>
      <span className={styles.question}>
        {a} + {b} = ?
      </span>
      <Answer a={a} b={b} updatePoints={updatePoints} />
    </div>
  );
}

export default MathQuiz;
