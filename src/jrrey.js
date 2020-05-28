import { parseCommands } from './utils/parser';
import speechEventHandler from './utils/speech-event-handlers';
import speechRecognition from './utils/speech-recognition';
import speechEvents from './constants/speech-events';

const boundSpeechEventHandler = Symbol();

class Jrrey {
  init(options = {}) {
    if (this.listeningSince) {
      return;
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
    this.events[event] = callback;

    return this;
  }

  offEvent(event, callback) {
    if (!event) {
      this.events = {};
    }
    else if (callback) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    } else {
      this.events[event] = [];
    }

    return this;
  }

  onCommand(phrase, callback) {
    this.commands.push({ phrase, callback });

    return this;
  }

  offCommand(phrase) {
    if (!phrase) {
      this.commands = [];
    } else {
      this.commands = this.commands.filter(command => String(command.phrase) !== String(phrase));
    }

    return this;
  }
}

module.exports = new Jrrey();
