import { Dispatch, SetStateAction } from "react";
import Tesseract from "tesseract.js";

type TTextFromPicture = {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setTodoData: Dispatch<SetStateAction<{ title: string; description: string }>>;
};

export function TextFromPicture(props: TTextFromPicture) {
  const { setLoading, setTodoData } = props;

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
        setTodoData((prev) => ({ ...prev, description: text || "" }));
        setLoading(false);
      });
  };

  return (
    <input
      type='file'
      name=''
      id=''
      onChange={handleImageChange}
      accept='image/*'
    />
  );
}
