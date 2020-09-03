import { h } from 'preact';
import Close from 'images/close.svg';
import Microphone from 'images/microphone.svg';
import './style.css';

export default function FloatMenu({ isActiveMicrophone, onToggle }) {
  const toggleisActivateMicrophone = () => {
    if (typeof onToggle === 'function') {
      onToggle();
    }
  };

  return (
    <div id="float-menu-container">
      {
        isActiveMicrophone
          ? <img src={Close} alt="close" width="50" height="50" onClick={toggleisActivateMicrophone} />
          : <img src={Microphone} alt="microphone" width="50" height="50" onClick={toggleisActivateMicrophone} />
      }
    </div>
  );
}
