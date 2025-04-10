import { useCallback, useState } from "react";
import { debounce } from "../hooks/useDebounce";

const UseDebounceExample = () => {
  const [inputValue, setInputValue] = useState<string>("");

  // ✅ Debounced logger: created ONCE using useCallback
  // useCallback ensures the debounced function is not recreated on every render
  const debouncedLog = useCallback(
    debounce((value: string) => {
      console.log("Debounced value:", value);
    }, 2000),
    [] // empty dependency = only initialized once
  );

  // 🔁 onChange handler: captures and logs value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedLog(value); // invokes debounced function
  };

  return (
    <div style={{ padding: "20px" }}>
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