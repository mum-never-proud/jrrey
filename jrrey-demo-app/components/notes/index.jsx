import { h } from 'preact';
import { useEffect, useState, useRef } from 'preact/compat';
import jrrey from 'utils/jrrey';

export default function Notes({ isJrreyListening }) {
  const [isTakingNotes, setIsTakingNotes] = useState(false);
  const [notes, setNotes] = useState('');
  const prevNotes = useRef(notes);
  const dictateHandler = ([sentence]) => {
    const isStopTakingNotesCommand = sentence.trim() === 'stop taking notes';

    if (isStopTakingNotesCommand) {
      setIsTakingNotes(false);
    } else {
      prevNotes.current += sentence;
      setNotes(prevNotes.current.trim());
    }
  };

  useEffect(() => {
    jrrey.onCommand(/take notes/, () => setIsTakingNotes(this.props.isJrreyListening));
    jrrey.onEvent('dictate', dictateHandler);
  }, []);
  useEffect(() => {
    if (!isJrreyListening) {
      setIsTakingNotes(false);
    }
  }, [isJrreyListening]);
  useEffect(() => {
    jrrey.mode = isTakingNotes ? 'dictate' : 'cmd';
  }, [isTakingNotes]);

  return (
    <div className="col-12">
      <p className={`${isJrreyListening ? '' : 'strike'}`}>Try saying <span class="font-weight-bold font-italic">{ isTakingNotes ? 'stop taking notes' : 'take notes' }</span></p>
      <textarea
        className="form-control not-allowed"
        rows="10"
        readonly
        // eslint-disable-next-line no-nested-ternary
        placeholder={isJrreyListening
          ? isTakingNotes
            ? 'Start speaking...'
            : 'Waiting for command...'
          : 'Turn on the mic...'}>
            {notes}
      </textarea>
    </div>
  );
}
