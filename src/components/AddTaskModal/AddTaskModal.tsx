import { Dispatch, SetStateAction, useState } from "react";
import { Modal } from "../../ds/Modal/Modal";
import { useTodoStore } from "../../store";
import styles from "./AddTaskModal.module.css";

export function AddTaskModal({
  closeModal,
}: {
  closeModal: Dispatch<SetStateAction<boolean>>;
}) {
  const [todoData, setTodoData] = useState({ title: "", description: "" });
  const { addTodo } = useTodoStore((state) => state);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addHandler = () => {
    addTodo(todoData);
    closeModal(false);
  };

  return (
    <Modal>
      <div className={styles.formBox}>
        <input
          name='title'
          value={todoData.title}
          onChange={(e) => changeHandler(e)}></input>
        <input
          name='description'
          value={todoData.description}
          onChange={(e) => changeHandler(e)}></input>
        <div className={styles.buttonBox}>
          <button onClick={() => closeModal(false)}>CANCEL</button>
          <button onClick={addHandler}>ADD</button>
        </div>
      </div>
    </Modal>
  );
}
