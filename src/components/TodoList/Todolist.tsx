import { useEffect } from "react";
import { useTodoStore } from "../../store";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export function TodoList() {
  const { todos, getTodosFromStorage, addTodo } = useTodoStore(
    (state) => state
  );

  const mockAdding = () => {
    const newTodo = {
      title: `${todos.length + 1}`,
      description: `added todo №${todos.length + 1}`,
    };
    addTodo(newTodo);
  };

  useEffect(() => {
    getTodosFromStorage();
  }, []);

  return (
    <div className={styles.container} >
      {todos.map((todo, idx) => (
        <TodoItem key={idx} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}
