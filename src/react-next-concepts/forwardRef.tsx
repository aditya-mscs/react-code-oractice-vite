//@ts-nocheck
import React, { useRef, forwardRef } from 'react';
import GoBackToHome from '../components/GoBacktoHome';

const CustomInput = forwardRef((props, ref) => {
  return (
    <input
      ref={ref} // 👈 attach the forwarded ref
      type="text"
      placeholder="Enter text"
      {...props}
    />
  );
});

export const ForwardRefParent = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // 👈 use the forwarded ref
    }
  };

  return (
    <div>
      <GoBackToHome />
      <h1>Forward Ref Example</h1>
      <p>Click the button to focus the input field.</p>
      <button type="button" onClick={handleClick}>Focus Input</button>
      <CustomInput ref={inputRef} />
    </div>
  );
};