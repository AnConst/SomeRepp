import style from "./TodoList.module.css";

export default function Todolist() {
  const mockTodos = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={style.container}>
      {mockTodos.map((todo) => (
        <div className={style.mockblock}>{`${todo}-ая тудушка`}</div>
      ))}
    </div>
  );
}
