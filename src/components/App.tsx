import Header from "../ds/Header/Header";
import "./App.css";
import Preview from "./Preview/Preview";
import Todolist from "./TodoList/Todolist";

export function App() {
  return (
    <div>
      <Preview/>
      <Header />
      <Todolist/>
    </div>
  );
}
