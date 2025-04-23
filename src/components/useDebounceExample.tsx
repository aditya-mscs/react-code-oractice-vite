import { useRef, useState } from "react";
import { debounce } from "../hooks/useDebounce";
import GoBackToHome from "./GoBacktoHome";

const UseDebounceExample = () => {
  const [inputValue, setInputValue] = useState<string>("");

  // THIS IS PRINTING ALL LETTERS TYPED
  // You are calling debounce(...) inside your React component.
  // _________ This recreates a brand new debounced function on every render, so all the previous timeouts stay active and fire.

  // const debouncedLog = debounce((value: string) => {
  //   console.log("Debounced value:", value);
  // }, 2000);

  // Best solution: useRef
  // Create your debounced function using useRef, so it is only ________ created ONCE for the lifetime of the component.
  // so timeoutId is always the same variable (not reset on every render).
  const debouncedLog = useRef(
    debounce((value: string) => {
      console.log("Debounced value:", value);
    }, 2000)
  ).current;


  // 🔁 onChange handler: captures and logs value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedLog(value); // invokes debounced function
  };

  return (
    <div style={{ padding: "20px" }}>
      <GoBackToHome />
      <h2>Debounce Input Example (With useCallback)</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Live Input. THIS IS NOT ERROR. CONSOLE LOG IMP:<br /> {inputValue}</p>
    </div>
  );
};

export default UseDebounceExample;