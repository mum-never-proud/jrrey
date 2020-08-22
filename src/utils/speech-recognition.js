import speechRecognitionOptions from '../constants/speech-recognition-options';

const SpeechRecognitionVendor = window.SpeechRecognition
  || window.webkitSpeechRecognition
  || window.mozSpeechRecognition
  || window.msSpeechRecognition
  || window.oSpeechRecognition;

if (!SpeechRecognitionVendor) {
  throw Error('SpeechRecognition not supported in this browser');
}

const speechRecognition = new SpeechRecognitionVendor();

Object.assign(speechRecognition, speechRecognitionOptions);

export default speechRecognition;
