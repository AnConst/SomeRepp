import Header from "../ds/Header/Header";
import "./App.css";
import Preview from "./Preview/Preview";
import { TodoList } from "./TodoList/TodoList";
import "regenerator-runtime/runtime";

export function App() {

  const isPreviewWasOpened =  localStorage.getItem("isPreviewWasOpened") === "true"

  return (
    <div>
      {!isPreviewWasOpened && <Preview />}
      <Header />
      <TodoList />
    </div>
  );
}
