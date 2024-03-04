import {
  TextareaHTMLAttributes,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import styles from "./TextArea.module.css";

type TextAreaProps = {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange" | "value">;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => textAreaRef.current!);

    const [text, setText] = useState<string>(props.value || "");

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
      props.onChange(e);
      console.log(e.target.name);
    };

    useEffect(() => {
      if (!textAreaRef.current) return;
      textAreaRef.current.style.height = `0px`;
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = `${scrollHeight}px`;
    }, [text]);

    useEffect(() => {
      setText(props.value);
    }, [props.value]);

    return (
      <textarea
        name={props.name}
        className={styles.textArea}
        ref={textAreaRef}
        value={text}
        onChange={changeHandler}></textarea>
    );
  }
);
