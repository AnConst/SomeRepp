import { useState } from "react";
import { AddTaskModal } from "../../components/AddTaskModal/AddTaskModal";
import styles from "./Header.module.css";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.wrap}>
        <span className={styles.text} onClick={() => setIsModalOpen(true)}>
          ПОКА ТОЛЬКО ТУДУШКА - ДЛЯ НАЧАЛА - ЗАГЛУШКА
        </span>
      </div>
      {isModalOpen && <AddTaskModal closeModal={setIsModalOpen} />}
    </>
  );
}
