describe('jrrey', () => {
  let jrrey;

  beforeAll(() => {
    global.SpeechRecognition = class {
      addEventListener() {}
      start() {}
      abort() {}
      stop() {}
    };

    jrrey = require('../src/jrrey').init(global.jerryContext);
  });

  beforeEach(() => {
    jrrey.start();
  });

  afterEach(() => {
    jrrey.events = {};
    jrrey.commands = [];
    jrrey.stop();
  });

  it('should start listening', () => {
    jrrey.start();

    expect(typeof jrrey.listeningSince).not.toBeUndefined();
  });

  it('should stop listening', () => {
    jrrey.stop();

    expect(jrrey.listeningSince).toBeNull();
  });

  it('should add event', () => {
    expect(Object.keys(jrrey.events).length).toEqual(0);

    jrrey.onEvent('dictate', () => {});

    expect(Object.keys(jrrey.events).length).toEqual(1);
  });

  it('should remove event', () => {
    jrrey.onEvent('dictate', () => {});

    expect(Object.keys(jrrey.events).length).toEqual(1);

    jrrey.offEvent('dictate');

    expect(Object.keys(jrrey.events).length).toEqual(0);
  });

  it('should remove all events', () => {
    jrrey.onEvent('dictate', () => {});
    jrrey.onEvent('audiostart', () => {});

    expect(Object.keys(jrrey.events).length).toEqual(2);

    jrrey.offEvent();

    expect(Object.keys(jrrey.events).length).toEqual(0);
  });

  it('should add command', () => {
    expect(Object.keys(jrrey.commands).length).toEqual(0);

    jrrey.onCommand('hello', () => {});

    expect(Object.keys(jrrey.commands).length).toEqual(1);
  });

  it('should remove command', () => {
    jrrey.onCommand('hello', () => {});

    expect(Object.keys(jrrey.commands).length).toEqual(1);

    jrrey.offCommand('hello');

    expect(Object.keys(jrrey.commands).length).toEqual(0);
  });

  it('should remove all commands', () => {
    jrrey.onCommand('hello', () => {});
    jrrey.onCommand('world', () => {});

    expect(Object.keys(jrrey.commands).length).toEqual(2);

    jrrey.offCommand();

    expect(Object.keys(jrrey.commands).length).toEqual(0);
  });

  it('should throw error on running multiple instances of jrrey', () => {
    expect(() => jrrey.init()).toThrowError(Error);
  });
});
