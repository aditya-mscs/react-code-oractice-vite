import React, { useState, useDeferredValue, useEffect } from 'react';
import GoBackToHome from '../components/GoBacktoHome';

function SlowList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function UseDeferredValue() {
  const [input, setInput] = useState('');
  const [list, setList] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  //_____ Below is not needed if actual list is used. Here 2 sec delay otherwise react will return when ready so it shows quickly
  useEffect(() => {
    if (isTyping) return;
    const timeoutId = setTimeout(() => {
      // Generate a large list when typing has stopped for 2 seconds
      const newList = Array.from({ length: 50 }, (_, i) => `${input} - Item ${i + 1}`);
      setList(newList);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [isTyping, input]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    setIsTyping(true);
    // Reset typing state after delay
    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  const deferredList = useDeferredValue(list); //______ This will defer the rendering of the list until the input has stopped changing

  return (
    <div style={{ padding: '20px' }}>
      <GoBackToHome />
      <h2>Search in Large List (Concurrent Mode)</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={handleInputChange}
        style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
      />
      {isTyping ? <p>Typing...</p> : <p>Displaying Results:</p>}
      {/* Deferred list rendering */}
      <SlowList items={deferredList} />
    </div>
  );
}

export default UseDeferredValue;