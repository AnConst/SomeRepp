import { useEffect, useState } from "react";
import { MainColors } from "../../constants/constants";
import styles from "./Preview.module.css";
import { GearIcon } from "./icons/GearIcon";

export default function Preview() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setIsOpen(false);
    }, 100);

    return () => {
      clearTimeout(timeOutId);
    };
  });

  return (
    <div className={isOpen ? styles.blockOpen : styles.blockClose}>
      <div className={styles.iconContainer}>
        <div className={styles.lastRows}>
          <GearIcon size={100} color={MainColors.BROWN} />
        </div>
        <div className={styles.centralRows}>
          <GearIcon size={100} color={MainColors.PINK} />
          <div className={styles.animatedCenralIcon}>
            <GearIcon size={200} color={MainColors.PINK} />
          </div>

          <GearIcon size={100} color={MainColors.PEACH} />
        </div>
        <div className={styles.lastRows}>
          <GearIcon size={100} color={MainColors.BROWN} />
        </div>
      </div>
    </div>
  );
}
