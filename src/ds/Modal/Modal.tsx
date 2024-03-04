import { PropsWithChildren } from "react";
import styles from "./Modal.module.css";

export function Modal(props: PropsWithChildren) {



  return <div className={styles.container}>{props.children}</div>;
}
