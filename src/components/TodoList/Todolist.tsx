import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export function TodoList() {
  const mockTodos = [
    { title: "1", discription: "number one" },
    { title: "2", discription: "number wefwefew" },
    { title: "3", discription: "wefewfew ogewgewgne" },
    { title: "4", discription: "wefwf o233f44f4fne" },
    { title: "5", discription: "3f443 onffffe" },
    { title: "6", discription: "numbefwer onwefefwe" },
    { title: "7", discription: "number wefwowefwefne" },
    { title: "8", discription: "numbweffer one" },
  ];

  return (
    <div className={styles.container}>
      {mockTodos.map((todo, idx) => (
        <TodoItem key={idx} title={todo.title} discription={todo.discription} />
      ))}
    </div>
  );
}
