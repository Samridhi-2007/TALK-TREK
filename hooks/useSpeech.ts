"use client";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const useSpeech = () => {
  const {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  return {
    transcript,
    listening,
    startListening,
    stopListening,
    browserSupportsSpeechRecognition,
  };
};
