import React, { useEffect } from 'react';

export const LocalStorageBasic = () => {
  const store = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    console.log(val)
    localStorage.setItem('inputValue', val)
  }
  useEffect(() => {
    (document.getElementById('input-id') as HTMLInputElement).value = localStorage.getItem('inputValue') || '';
  }, [])
  // Edit this component
  return (
    <div>
      <input data-testid='input-id' type="text" id="input-id" onChange={store} />
    </div>
  );
};