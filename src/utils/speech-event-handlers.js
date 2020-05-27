export default function speechEventHandler(speechEvent, subscribedEvents, mode) {
  console.log(speechEvent);
  switch (speechEvent.type) {
    case 'result':
      resultHandler(speechEvent, subscribedEvents, mode);
      return;
    default:
      const callbacks = subscribedEvents[speechEvent.type];

      if (Array.isArray(callbacks)) {
        callbacks.forEach(callback => callback(speechEvent));
      } else if (typeof callbacks === 'function') {
        callbacks(speechEvent);
      }
  }
}

function parseTranscripts(speech) {
  return Array.from(speech.results[speech.resultIndex]).map(result => result.transcript);
}

function resultHandler(speech, events, mode) {
  const transcripts = parseTranscripts(speech);

  if (mode === 'cmd') {
    for (let i = 0; i < transcripts.length; i++) {
      const event = transcripts[i].trim();

      if (Array.isArray(events[event])) {
        events[event].forEach(callback => callback(event));

        return false;
      } else if (typeof events[event] === 'function') {
        events[event](event);

        return false;
      }
    }

    if (typeof events['*'] === 'function') {
      events['*']();
    }
  } else if (typeof events.dictate === 'function') {
    events.dictate(transcripts);
  }
}
