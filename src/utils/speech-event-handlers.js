import { parseTranscripts } from './parser';

export default function speechEventHandler(speechEvent) {
  if (this.keepAlive && speechEvent.type === 'end') {
    if (Date.now() - Number(this.listeningSince) < 1000) {
      window.setTimeout(() => this.start(), 1000);
    } else {
      this.start();
    }
  } else {
    switch (speechEvent.type) {
      case 'result':
        resultHandler.call(this, speechEvent);

        return;
      default:
        const callback = this.events[speechEvent.type];

        if (typeof callback === 'function') {
          callback(speechEvent);
        }
    }
  }
}

function resultHandler(speech) {
  const transcripts = parseTranscripts(speech);

  if (this.mode === 'cmd') {
    const results = new Map(); // save few bytes

    for (let i = 0; i < transcripts.length; i++) {
      const text = transcripts[i].trim();

      this.commands.forEach((command, idx) => {
        const output = command.phrase instanceof RegExp
          ? command.phrase.exec(text)
          : command.phrase === text ? text : null

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
      this.events.fallback();
    }
  } else if (typeof this.events.dictate === 'function') {
    this.events.dictate(transcripts);
  }
}
