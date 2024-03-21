import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function useSpeechSynthesis() {

  const speechRecognitionOptions = useSpeechRecognition();
  const speechRecognitionMethods = SpeechRecognition

  return {...speechRecognitionOptions, ...speechRecognitionMethods};
}
