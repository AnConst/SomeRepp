import styles from "./TodoItem.module.css";

export default function TodoItem({
  title,
  discription,
}: {
  title: string;
  discription: string;
}) {
  return (
    <div className={styles.blockContainer}>
      <h4>{title}</h4>
      <p>{discription}</p>
    </div>
  );
}
