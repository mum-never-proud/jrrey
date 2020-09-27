/* eslint-disable no-console */
/* eslint-disable global-require */
describe('speech recognition', () => {
  const nativeConsoleWarn = console.warn;

  beforeEach(() => {
    jest.resetModules();
  });

  beforeAll(() => {
    console.warn = jest.fn();
  });

  afterAll(() => {
    console.warn = nativeConsoleWarn;
  });

  it('should throw error when speech recognition is not supported', () => {
    const speechRecognition = require('../src/utils/speech-recognition').default;

    expect(console.warn).toHaveBeenCalled();
    expect(speechRecognition).toBeNull();
  });

  it('should return speech recognition object', () => {
    global.SpeechRecognition = class {};

    expect(require('../src/utils/speech-recognition').default).toEqual(global.speechRecognitionOptions);

    delete global.SpeechRecognition;
  });
});
