import { useState } from "react";
import { useTodoStore } from "../../store";
import styles from "./TodoItem.module.css";

export default function TodoItem(props: {
  title: string;
  description: string;
}) {
  const { deleteTodo } = useTodoStore((state) => state);

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={
        isHover
          ? styles.blockContainerWithHover
          : styles.blockContainerWithoutHover
      }
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <h4
        className={isHover ? styles.titleWithHover : styles.titleWithoutHover}>
        {props.title}
      </h4>
      <div className={styles.blockBody}>
        <p>{props.description}</p>
        <button onClick={() => deleteTodo(props)}>удалить</button>
      </div>
    </div>
  );
}
