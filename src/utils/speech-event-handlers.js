export function resultHandler(speech, events) {
  Array.from(speech.results[speech.resultIndex]).forEach(result => {
    const event = result.transcript.trim();

    if (typeof events[event] === 'object') {
      events[event].forEach(callback => callback(event));

      return false;
    }
  });
}
