/* eslint-disable global-require */
describe('speech recognition', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should throw error when speech recognition is not supported', () => {
    expect(() => { require('../src/utils/speech-recognition'); }).toThrowError(Error);
  });

  it('should return speech recognition object', () => {
    global.SpeechRecognition = class {};

    expect(require('../src/utils/speech-recognition').default).toEqual(global.speechRecognitionOptions);

    delete global.SpeechRecognition;
  });
});
