import speechRecognitionOptions from '../constants/speech-recognition-options';

const speechRecognitionVendor = window.SpeechRecognition
  || window.webkitSpeechRecognition
  || window.mozSpeechRecognition
  || window.msSpeechRecognition
  || window.oSpeechRecognition;

if (!speechRecognitionVendor) {
  throw Error('SpeechRecognition not supported in this browser');
}

const speechRecognition = new speechRecognitionVendor();

Object.assign(speechRecognition, speechRecognitionOptions);

export default speechRecognition;
