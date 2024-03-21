import { Dispatch, SetStateAction, useState } from "react";
import { Modal } from "../../ds/Modal/Modal";
import { TextArea } from "../../ds/TextArea/TextArea";
import { useTodoStore } from "../../store";
import { SpeechSynthesis } from "../SpeechSynthesis/SpeechSynthesis";
import { TextFromPicture } from "../TextFromPicture/TextFromPicture";
import styles from "./AddTaskModal.module.css";

export function AddTaskModal({
  closeModal,
}: {
  closeModal: Dispatch<SetStateAction<boolean>>;
}) {
  const [todoData, setTodoData] = useState({ title: "", description: "" });
  const [todoType, setTodoType] = useState("text");
  const [loading, setLoading] = useState(false);

  const { addTodo } = useTodoStore((state) => state);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodoData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addHandler = () => {
    addTodo(todoData);
    closeModal(false);
  };

  const loadingText =
    (todoType === "img" && "Идет загрузка...") ||
    (todoType === "audio" && "Идет синтез...");

  return (
    <Modal>
      <div className={styles.formBox}>
        <input
          name='title'
          value={todoData.title}
          onChange={(e) => changeHandler(e)}></input>

        <select name='taskType' onChange={(e) => setTodoType(e.target.value)}>
          <option value='text'>Текст</option>
          <option value='img'>Картинка на РУССКОМ!!!</option>
          <option value='audio'>Аудио</option>
        </select>

        {todoType === "img" && (
          <TextFromPicture setLoading={setLoading} setTodoData={setTodoData} />
        )}

        {todoType === "audio" && (
          <SpeechSynthesis setLoading={setLoading} setTodoData={setTodoData} />
        )}

        {loading ? (
          loadingText
        ) : (
          <TextArea
            name='description'
            value={todoData.description}
            onChange={changeHandler}></TextArea>
        )}

        <div className={styles.buttonBox}>
          <button onClick={() => closeModal(false)}>CANCEL</button>
          <button onClick={addHandler}>ADD</button>
        </div>
      </div>
    </Modal>
  );
}
