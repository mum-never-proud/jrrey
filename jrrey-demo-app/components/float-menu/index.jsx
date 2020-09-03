import { h } from 'preact';
import { useState, useEffect } from 'preact/compat';
import Close from 'images/close.svg';
import Microphone from 'images/microphone.svg';
import './style.css';

export default function FloatMenu({ onToggle }) {
  const [isActivateMicrophone, setisActivateMicrophone] = useState(false);
  const toggleisActivateMicrophone = () => setisActivateMicrophone(!isActivateMicrophone);

  useEffect(() => {
    if (typeof onToggle === 'function') {
      onToggle(isActivateMicrophone);
    }
  }, [isActivateMicrophone, onToggle]);

  return (
    <div id="float-menu-container">
      {
        isActivateMicrophone
          ? <img src={Close} alt="close" width="50" height="50" onClick={toggleisActivateMicrophone} />
          : <img src={Microphone} alt="microphone" width="50" height="50" onClick={toggleisActivateMicrophone} />
      }
    </div>
  );
}
