import { useState } from "react";
import GoBackToHome from "./GoBacktoHome";

const CounterExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <GoBackToHome />
      <h1>Counter Example</h1>
      <p>Current count: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>Increment</button>
      <button type="button" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default CounterExample;