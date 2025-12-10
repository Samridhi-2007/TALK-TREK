export {};

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }

  var SpeechRecognition: any;
  var webkitSpeechRecognition: any;
}
