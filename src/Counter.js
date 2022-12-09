import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [resetCount, setResetCount] = useState(0);
  const [color, setColor] = useState('white');

  const handleIncrement = () => {
    count === 3 ? handleReset() : setCount(count + 1);
    setColor('lightgreen');
  };

  const handleDecrement = () => {
    count === -3 ? handleReset() : setCount(count - 1);
    setColor('pink');
  };

  const handleReset = () => {
    setCount(0);
    setResetCount(resetCount + 1);
  };

  return (
    <div>
      <span style={{ background:color }}>Current Count:{count}</span>
      <span>Reset Count:{resetCount}</span>
      <section>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
      </section>
    </div>
  )
}

export default Counter;