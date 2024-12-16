import React, { useState } from 'react';

function ToggleButton() {
  // Initialize the state to track whether the button is ON or OFF
  const [isOn, setIsOn] = useState(false);

  // Toggle the state between true (ON) and false (OFF)
  const toggle = () => setIsOn(!isOn);

  return (
    <div>
      <h2>The button is {isOn ? 'ON' : 'OFF'}</h2>
      <button onClick={toggle}>{isOn ? 'Turn OFF' : 'Turn ON'}</button>
    </div>
  );
}

export default ToggleButton;
