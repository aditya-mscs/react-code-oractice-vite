import React, { useEffect, useRef, useState } from "react";
import GoBackToHome from "../components/GoBacktoHome";

const usePrevious = (value: number) => {
  const ref = useRef<number | null>(null);
  console.log("ref", ref.current, value); //ref null 0 -------> 0, 1

  // const prev = ref.current;
  // ref.current = value;
  //Above Might be worng. Better use useEffect

  useEffect(() => {
    ref.current = value;
  }, [value]);
  // console.log("ref", ref.current, value); //ref 0 0 ------->  1, 1
  return ref.current;
};

export default function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <GoBackToHome />
      <h1 data-testid="current-count">Current: {count}</h1>
      <h2 data-testid="prev-count">Previous: {prevCount}</h2>
      <button
        type="button"
        data-testid="increment-btn"
        onClick={() => setCount(prev => prev + 1)}
      >
        Increment
      </button>
    </div>
  );
}
