function parseTranscripts(speech) {
  return Array.from(speech.results[speech.resultIndex]).map(result => result.transcript);
}

export function resultHandler(speech, events, mode) {
  const transcripts = parseTranscripts(speech);

  if (mode === 'cmd') {
    transcripts.forEach(transcript => {
      const event = transcript.trim();

      if (Array.isArray(events[event])) {
        events[event].forEach(callback => callback(event));

        return false;
      } else if (typeof events[event] === 'function') {
        events[event](event);

        return false;
      }
    });
  } else if (typeof events.dictate === 'function') {
    events.dictate(transcripts);
  }
}
