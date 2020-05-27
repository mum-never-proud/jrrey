import speechEventHandler from './utils/speech-event-handlers';
import speechRecognition from './utils/speech-recognition';
import speechEvents from './constants/speech-events';
class Jrrey {
  init(options = {}) {
    if (this.listeningSince) {
      return;
    }

    this.events = options.events || {};
    this.paused = options.paused || true;
    this.mode = options.mode || 'cmd';
    this.keepAlive = options.keepAlive || true;

    if (this.paused === false) {
      this.start();
    }

    speechEvents.forEach(speechEvent =>
      speechRecognition.addEventListener(speechEvent, e => {
        if (this.keepAlive && e.type === 'end' && !document.hidden) {
          if (Date.now() - Number(this.listeningSince) < 1000) {
            window.setTimeout(() => this.start(), 1000);
          } else {
            this.start();
          }
        } else {
          speechEventHandler(e, this.events, this.mode);
        }
      })
    );
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pause();
      } else if (this.keepAlive || !this.paused) {
        this.start();
      }
    }, false);

    return this;
  }

  start() {
    this.listeningSince = Date.now();
    this.paused = false;

    speechRecognition.abort();
    speechRecognition.start();

    return this;
  }

  stop() {
    this.listeningSince = null;
    this.keepAlive = false;
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
}

module.exports = new Jrrey();
