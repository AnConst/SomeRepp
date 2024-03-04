import { useEffect, useState } from "react";
import { MainColors } from "../../constants/constants";
import styles from "./Preview.module.css";
import CalendarIcon from "./icons/CalendarIcon";
import { GearIcon } from "./icons/GearIcon";
import { LaptopIcon } from "./icons/LaptopIcon";
import QualityIcon from "./icons/QualityIcon";
import TimerIcon from "./icons/TimerIcon";

export default function Preview() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setIsOpen(false);
      localStorage.setItem("isPreviewWasOpened", "true");
    }, 400);

    return () => {
      clearTimeout(timeOutId);
    };
  });

  return (
    <div className={isOpen ? styles.blockOpen : styles.blockClose}>
      <div className={styles.iconContainer}>
        <div className={styles.lastRows}>
          <CalendarIcon
            size={100}
            color={MainColors.DARKBLUE}
            className={styles.animatedLastIcon}
          />
        </div>
        <div className={styles.centralRow}>
          <QualityIcon
            size={100}
            color={MainColors.RED}
            className={styles.animatedLastIcon}
          />

          <LaptopIcon
            size={200}
            color={MainColors.RED}
            className={styles.animatedCenralIcon}
          />

          <GearIcon
            size={100}
            color={MainColors.RED}
            className={styles.animatedLastIcon}
          />
        </div>
        <div className={styles.lastRows}>
          <div className={styles.animatedLastIcon}>
            <TimerIcon
              size={100}
              color={MainColors.DARKBLUE}
              className={styles.animatedLastIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
