import { Dispatch, SetStateAction, useEffect } from "react";
import styles from "./SpeechSynthesis.module.css";
import useSpeechSynthesis from "./hooks/useSpeechSynthesis";

type TSpeechSynthesis = {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setTodoData: Dispatch<SetStateAction<{ title: string; description: string }>>;
};

export function SpeechSynthesis(props: TSpeechSynthesis) {
  const { setLoading, setTodoData } = props;
  const { finalTranscript, listening, startListening, stopListening } =
    useSpeechSynthesis();

  useEffect(() => {
    setTodoData((prev) => ({ ...prev, description: finalTranscript }));
  }, [finalTranscript]);

  useEffect(() => {
    setLoading(listening);
  }, [listening]);

  return (
    <div className={styles.wrapper}>
      <img
        src='microphone.png'
        width='50'
        height='50'
        alt=''
        onClick={() => startListening()}
      />
    </div>
  );
}
