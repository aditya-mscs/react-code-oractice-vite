import { useState } from "react";

const CounterExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter Example</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <GoBackToHome />
    </div>
  );
}

export default CounterExample;