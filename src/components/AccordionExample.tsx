import React, { useState } from 'react';
import GoBackToHome from './GoBacktoHome';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  return (
    <div style={{ width: 400, margin: '2rem auto', border: '1px solid #ccc', borderRadius: 8 }}>
      {items.map((item, idx) => (
        <div key={item.title} style={{ borderBottom: idx < items.length - 1 ? '1px solid #eee' : '' }}>
          <button
            type="button"
            onClick={() => handleToggle(idx)}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '1rem',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            {item.title}
          </button>
          {openIndex === idx && (
            <div style={{ padding: '1rem', background: '#fff' }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const AccordionExample = () => {
  const items = [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' },
  ];

  return (
    <div>
      <GoBackToHome />
      <h1>Accordion Example</h1>
      <Accordion items={items} />
    </div>
  );
}