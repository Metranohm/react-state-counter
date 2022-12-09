import React, { useState } from "react";

const [count, setCount] = useState(0);

const Counter = () => {
  console.log('useState - ', useState)
  return (
    <div>
      <span>Current Count: {count}</span>
      <section>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </section>
    </div>
  )
}

export default Counter;