import { parseTranscripts } from './parser';

function resultHandler(speech) {
  const transcripts = parseTranscripts(speech);

  if (this.mode === 'cmd') {
    const results = new Map();

    for (let i = 0; i < transcripts.length; i += 1) {
      const text = transcripts[i].trim();

      this.commands.forEach((command, idx) => {
        let output = null;

        if (command.phrase instanceof RegExp) {
          output = command.phrase.exec(text);
        } else if (command.phrase === text) {
          output = text;
        }

        if (output) {
          results.set(idx, (results.get(idx) || [])).get(idx).push(output);
        }
      });
    }

    if (results.size) {
      for (const [index, output] of results.entries()) {
        this.commands[index].callback(output);
      }
    } else if (typeof this.events.fallback === 'function') {
      this.events.fallback(transcripts);
    }
  } else if (typeof this.events.dictate === 'function') {
    this.events.dictate(transcripts);
  }
}

export default function speechEventHandler(speechEvent) {
  if (this.keepAlive && speechEvent.type === 'end' && this.listeningSince) {
    if (Date.now() - Number(this.listeningSince) < 1000) {
      window.setTimeout(() => this.start(), 1000);
    } else {
      this.start();
    }
  } else {
    switch (speechEvent.type) {
      case 'result':
        resultHandler.call(this, speechEvent);
        break;
      default: {
        const callback = this.events[speechEvent.type];

        if (typeof callback === 'function') {
          callback(speechEvent);
        }

        break;
      }
    }
  }
}
