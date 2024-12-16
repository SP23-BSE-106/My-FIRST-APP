import React, { useState } from 'react';

function Counter() {
 
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  const decrement = () => setCounter(counter - 1);

  const reset = () => setCounter(0);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
