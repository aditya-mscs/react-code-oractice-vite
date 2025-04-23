// @ts-nocheck Temporary ignore
import React, { useState, useTransition } from 'react';
import GoBackToHome from '../components/GoBacktoHome';
import { debounce } from "./useDebounce";

// Utility function to generate a large list
const generateList = (size: number) => {
  return Array.from({ length: size }, (_, index) => `Item ${index + 1}`);
};

export const UseTransition = () => {
  const [list] = useState(generateList(10000));
  const [query, setQuery] = useState('');
  const [filteredList, setFilteredList] = useState(list);
  const [status, setStatus] = useState('Idle');

  const [isPending, startTransition] = useTransition(); //_________ IMP: isPending, startTransition

  /*
•	Debounce needed? Not required.
•	useTransition makes updates non-blocking, but it will still run on every change.
•	Combine with debounce if you want to avoid running the heavy computation on every keystroke, not just make it low-priority.
*/
  const debouncedSearch = debounce((value) => {
    startTransition(() => {
      const filtered = list.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredList(filtered);
      setStatus('Completed');
    }
    );
  }, 1500);


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setStatus('Searching...');
    debouncedSearch(value);
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