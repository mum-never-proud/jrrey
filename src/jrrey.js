import { assertFunction, assertString, assertStringOrRegExp } from './utils/assert';
import { parseCommands } from './utils/parser';
import speechEventHandler from './utils/speech-event-handlers';
import speechRecognition from './utils/speech-recognition';
import speechEvents from './constants/speech-events';

const boundSpeechEventHandler = Symbol();

class Jrrey {
  init(options = {}) {
    if (this.listeningSince) {
      throw Error('an instance of jrrey is already running');
    }

    this.events = options.events || {};
    this.commands = parseCommands(options.commands);
    this.mode = options.mode || 'cmd';
    this.keepAlive = options.keepAlive || true;
    this[boundSpeechEventHandler] = speechEventHandler.bind(this);

    speechEvents.forEach(speechEvent => speechRecognition.addEventListener(speechEvent, this[boundSpeechEventHandler]));

    return this;
  }

  start() {
    this.listeningSince = Date.now();

    speechRecognition.abort();
    speechRecognition.start();

    return this;
  }

  stop() {
    this.listeningSince = null;
    this.keepAlive = false;

    speechRecognition.stop();

    return this;
  }

  onEvent(event, callback) {
    assertString(event);
    assertFunction(callback);

    this.events[event] = callback;

    return this;
  }

  offEvent(event) {
    if (!event) {
      this.events = {};
    } else {
      assertString(event);

      delete this.events[event];
    }

    return this;
  }

  onCommand(phrase, callback) {
    assertStringOrRegExp(phrase);
    assertFunction(callback);

    this.commands.push({ phrase, callback });

    return this;
  }

  offCommand(phrase) {
    if (!phrase) {
      this.commands = [];
    } else {
      assertStringOrRegExp(phrase);

      this.commands = this.commands.filter(command => String(command.phrase) !== String(phrase));
    }

    return this;
  }
}

module.exports = new Jrrey();
