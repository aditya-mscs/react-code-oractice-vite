import React, { useState } from 'react';
import GoBackToHome from '../components/GoBacktoHome';

function AutomaticBatching() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Initial');

  // Synchronous update
  const handleSyncUpdate = () => {
    setCount((prev) => prev + 1);
    setText('Synchronous Update');
    // These updates are batched together by default
    // React will re-render only once after both setCount and setText are called
  };

  // Asynchronous update
  const handleAsyncUpdate = async () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setText('Before Async Update - Added 2'); //Shows count 0 ---> 2. Just 1 render
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setText('Before Async Update - Added 3 more'); //Shows count 2 ---> 5. Another render after timeout
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <GoBackToHome />
      <h2>React 18 Automatic Batching</h2>
      <p>
        <strong>
          •	Both setCount calls are batched into a single Asynchronous render.
          <br />
          •	React updates the count only once after both setCount calls are executed.
        </strong>
        <br />
        Automatic Batching allows React to group multiple state updates into a single re-render, improving performance.
        This means that if you call multiple state update functions in a single event handler, React will batch them together
        and only re-render once, rather than re-rendering after each individual state update.
        <br />
        In this example, clicking the buttons will demonstrate both synchronous and asynchronous updates.
        <br />
      </p>
      <strong>Count: {count}</strong>
      <p>Text: {text}</p>
      <button type="button" onClick={handleSyncUpdate}>Synchronous Update</button>
      <button type="button" onClick={handleAsyncUpdate} style={{ marginLeft: '10px' }}>Asynchronous Update</button>
    </div>
  );
}

export default AutomaticBatching;
