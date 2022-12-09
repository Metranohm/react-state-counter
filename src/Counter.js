import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count === 3) {
      handleReset()
    } else {
      setCount(count + 1)
    }
  };

  const handleDecrement = () => {
    setCount(count - 1)
  };

  const handleReset = () => {
    setCount(0)
  };

  return (
    <div>
      <span>Current Count: {count}</span>
      <section>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
      </section>
    </div>
  )
}

export default Counter;