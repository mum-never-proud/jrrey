import speechRecognitionOptions from '../constants/speech-recognition-options';

export default (function speechRecognition() {
  const SpeechRecognitionVendor = window.SpeechRecognition
  || window.webkitSpeechRecognition
  || window.mozSpeechRecognition
  || window.msSpeechRecognition
  || window.oSpeechRecognition;

  if (!SpeechRecognitionVendor) {
    // eslint-disable-next-line no-console
    console.warn('SpeechRecognition not supported');

    return null;
  }

  return Object.assign(new SpeechRecognitionVendor(), speechRecognitionOptions);
}());
