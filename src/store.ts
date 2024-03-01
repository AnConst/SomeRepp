import { create } from "zustand";

const mockTodos = [
  { title: "2", description: "number wefwefew" },
  { title: "3", description: "wefewfew ogewgewgne" },
  { title: "4", description: "wefwf o233f44f4fne" },
  { title: "5", description: "3f443 onffffe" },
  { title: "1", description: "number one" },
  { title: "6", description: "numbefwer onwefefwe" },
  { title: "7", description: "number wefwowefwefne" },
  { title: "8", description: "numbweffer one" },
];

interface TState {
  todos: { title: string; description: string }[];
  getTodosFromStorage: () => void;
  addTodo: (todo: { title: string; description: string }) => void;
  deleteTodo: (todo: { title: string; description: string }) => void;
}

export const useTodoStore = create<TState>((set, get) => ({
  todos: mockTodos,
  getTodosFromStorage: () => {
    const json = localStorage.getItem("todos");
    if (!json) return;
    const todos = JSON.parse(json);
    set({ todos });
  },
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (todo) => {
    const { todos } = get();
    const filteredState = todos.filter((el) => el.title !== todo.title);
    set({ todos: filteredState });
  },
}));
