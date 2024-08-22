import { useState } from "react";
import styles from "./styles.module.css";

function Answer({ a, b, updatePoints }) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (parseInt(answer) === a + b) {
      updatePoints();
    }

    setAnswer("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
        placeholder="Введите ответ"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Проверить
      </button>
    </form>
  );
}

export default Answer;
