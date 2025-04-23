import React, { useState, useTransition } from 'react';
import GoBackToHome from '../components/GoBacktoHome';

// Utility function to generate a large list
const generateList = (size: number) => {
  return Array.from({ length: size }, (_, index) => `Item ${index + 1}`);
};

export const UseTransition = () => {
  const [list] = useState(generateList(10000));
  const [query, setQuery] = useState('');
  const [filteredList, setFilteredList] = useState(list);

  const [isPending, startTransition] = useTransition(); //_________ IMP: isPending, startTransition

  const [status, setStatus] = useState('Idle');
  let debounceTimeout: NodeJS.Timeout | undefined;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setStatus('Searching...');

    if (debounceTimeout) clearTimeout(debounceTimeout); //___________ important: similar to debounce

    // Start a concurrent transition for non-urgent update
    debounceTimeout = setTimeout(() => {
      startTransition(() => {
        setStatus('Searching...');
        const filtered = list.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredList(filtered);
        setStatus('Completed');
      });
    }, 1500);  // Adjust the debounce time as needed
  };

  return (
    <div>
      <GoBackToHome />
      <h1>Use Transition Example</h1>
      <p>Explanation:
        <strong>
          useTransition is a hook that allows you to mark certain updates as
          non-urgent, allowing React to prioritize more important updates.
        </strong>
        <br />
      </p>
      <h3>Search in Large List (Concurrent Mode)</h3>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
      />
      {isPending && <p>Updating results...</p>}
      <p>Status: {status}</p>
      <ul style={{ height: '400px', overflowY: 'scroll' }}>
        {filteredList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseTransition;