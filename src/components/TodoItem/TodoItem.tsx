import { useTodoStore } from "../../store";
import styles from "./TodoItem.module.css";

export default function TodoItem(props: {
  title: string;
  description: string;
}) {
  const { deleteTodo } = useTodoStore((state) => state);

  return (
    <div className={styles.blockContainer}>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <button onClick={() => deleteTodo(props)}>удалить</button>
    </div>
  );
}
