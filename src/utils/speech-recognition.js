import speechRecognitionOptions from '../constants/speech-recognition-options';
import vendorPrefixes from '../constants/vendor-prefixes';

const [speechRecognitionVendor] = vendorPrefixes.filter(vendorPrefix => window[vendorPrefix]);

if (!speechRecognitionVendor) {
  throw Error('SpeechRecognition not supported in this browser');
}

const speechRecognition = new window[speechRecognitionVendor]();

Object.assign(speechRecognition, speechRecognitionOptions);

export default speechRecognition;
