import { ChangeEvent, useCallback, useRef, useState } from 'react';
import GoBackToHome from '../components/GoBacktoHome';

interface UseInputValueReturn {
  value: string;
  dirty: boolean;
  touched: boolean;
  different: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  reset: () => void;
}

const defaultDirty = false;
const defaultTouched = false;

function useInputControl(
  initialValue: string,
): UseInputValueReturn {
  const initialValueRef = useRef<string>(initialValue);
  const [value, setValue] = useState(initialValue);
  const [dirty, setDirty] = useState(defaultDirty);
  const [touched, setTouched] = useState(defaultTouched);

  const handleChange: UseInputValueReturn['handleChange'] = useCallback(
    (event) => {
      setValue(event.currentTarget.value);
      setDirty(true);
    },
    [],
  );
  const handleBlur: UseInputValueReturn['handleBlur'] = useCallback(() => {
    setTouched(true);
  }, []);
  const reset = useCallback(() => {
    setValue(initialValueRef.current);
    setDirty(defaultDirty);
    setTouched(defaultTouched);
  }, []);

  // Derived from whether the value is different from the initial value
  const different = initialValueRef.current !== value;

  return {
    value,
    dirty,
    touched,
    different,
    handleChange,
    handleBlur,
    reset,
  };
}
export const UseInputControlExample = () => {
  // Only pass a constant value!
  const inputControl = useInputControl('');

  return (
    <div>
      <GoBackToHome />
      <h1>useInputControl Example</h1>
      <input
        type="text"
        value={inputControl.value}
        onChange={inputControl.handleChange}
        onBlur={inputControl.handleBlur}
      />
      <button type="button" onClick={inputControl.reset}>
        Reset
      </button>
      <p>Dirty: {String(inputControl.dirty)}</p>
      <p>Touched: {String(inputControl.touched)}</p>
      <p>Different: {String(inputControl.different)}</p>
    </div>
  );
};