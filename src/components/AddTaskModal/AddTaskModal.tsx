import { Dispatch, SetStateAction, useState } from "react";
import Tesseract from "tesseract.js";
import { Modal } from "../../ds/Modal/Modal";
import { TextArea } from "../../ds/TextArea/TextArea";
import { useTodoStore } from "../../store";
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

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const path = URL.createObjectURL(e.target.files[0]);
    resolveImage(path);
  }

  const resolveImage = (path: string) => {
    console.log(path);
    setLoading(true);
    Tesseract.recognize(path, "rus", {
      logger: (m) => console.log(m),
    })
      .catch((err) => {
        console.error("ERROR", err);
        setLoading(false);
      })
      .then((result) => {
        let text = result?.data.text;
        console.log("text", text);
        setTodoData((props) => ({ ...props, description: text || "" }));
        setLoading(false);
      });
  };

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
          <option value='audio' disabled>
            Аудио
          </option>
        </select>
        {todoType === "img" && (
          <input
            type='file'
            name=''
            id=''
            onChange={handleImageChange}
            accept='image/*'
          />
        )}
        {loading ? "Идет загрузка..." : <TextArea
          name='description'
          value={todoData.description}
          onChange={changeHandler}></TextArea>}
        <div className={styles.buttonBox}>
          <button onClick={() => closeModal(false)}>CANCEL</button>
          <button onClick={addHandler}>ADD</button>
        </div>
      </div>
    </Modal>
  );
}
