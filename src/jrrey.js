import { resultHandler } from './utils/speech-event-handlers';
import speechRecognition from './utils/speech-recognition';

class Jrrey {
  init(options = {}) {
    if (this.listeningSince) {
      return;
    }

    speechRecognition.addEventListener('result', (e) => resultHandler(e, this.events));

    this.events = options.events || {};
    this.paused = options.paused || true;

    if (this.paused === false) {
      this.start();
    }

    return this;
  }

  start() {
    this.listeningSince = Date.now();
    this.paused = false;

    speechRecognition.start();

    return this;
  }

  stop() {
    this.listeningSince = null;
    this.paused = true;

    speechRecognition.stop();

    return this;
  }

  pause() {
    this.paused = true;

    speechRecognition.stop();

    return this;
  }

  resume() {
    this.paused = false;

    speechRecognition.start();

    return this;
  }

  on(event, callback) {
    (this.events[event] = this.events[event] || []).push(callback);

    return this;
  }

  off(event, callback) {
    if (callback) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    } else {
      this.events[event] = [];
    }

    return this;
  }
}

module.exports = new Jrrey();
