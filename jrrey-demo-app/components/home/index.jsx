/* eslint-disable no-nested-ternary */
import { h } from 'preact';
import { useState, useEffect } from 'preact/compat';
import FloatMenu from 'components/float-menu';
import Notes from 'components/notes';
import Todo from 'components/todo';
import jrrey from 'utils/jrrey';

export default function Home() {
  const [state, setState] = useState({ isJrreyListening: false, isBlocked: false });
  const { isBlocked, isJrreyListening } = state;
  const toggleHandler = (isActivateMicrophone) => {
    if (isActivateMicrophone) {
      jrrey.start();
    } else {
      jrrey.stop();
    }
  };

  useEffect(() => {
    jrrey.onEvent('fallback', () => alert('Whoop\'s, wasn\'t expecting that! Please try again.'));
    jrrey.onEvent('error', (e) => setState({ isJrreyListening: false, isBlocked: e.error === 'not-allowed' }));
    jrrey.onEvent('start', () => setState({ isJrreyListening: true, isBlocked: false }));
    jrrey.onEvent('end', () => setState({ isJrreyListening: false, isBlocked: false }));
  }, []);

  return (
    <div className="row mt-3">
      <div className="col-12">
        <p className="text-center lead">A JS SpeechRecognition library</p>
        <p className="text-center font-weight-bold lead">
          Mic is&nbsp;
          <span className={`text-${isBlocked ? 'danger' : isJrreyListening ? 'success' : 'warning'}`}>
            {isBlocked ? 'Blocked' : isJrreyListening ? 'On' : 'Off'}
          </span>
        </p>
        <div className="alert alert-warning text-center" role="alert">
          Even though MS Edge claims to support SpeechRecognition, events are not fired, more info at <a href="https://caniuse.com/#feat=speech-recognition" target="_blank" rel="noreferrer">caniuse</a>.
        </div>
      </div>
      <Notes isJrreyListening={isJrreyListening} />
      <Todo isJrreyListening={isJrreyListening} />
      <FloatMenu onToggle={toggleHandler} />
    </div>
  );
}
