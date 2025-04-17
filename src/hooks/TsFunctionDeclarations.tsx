import React, { useEffect } from "react";
import GoBackToHome from "../components/GoBacktoHome";

// ✅ 1. Basic function with parameter and return types
function greet(name: string, age: number): string {
  const message = `Hello, ${name}. You are ${age} years old.`;
  console.log("greet():", message);
  return message;
}

// ✅ 2. Arrow function with types
const multiply = (a: number, b: number): number => {
  const result = a * b;
  console.log("multiply():", result);
  return result;
};

// ✅ 3. Generic type and function
type DropdownProps<T> = {
  options: T[];
  onSelect: (value: T) => void;
};
function identity<T>(value: T): T { // ------------> IMPORTANT <> only this before () so tsx knows this is generic data type
  console.log("identity():", value);
  return value;
}
//<T,> Generic Arrow function
//This is a quirk of TypeScript.
//TypeScript uses the comma , as a way to disambiguate the syntax and force the parser to treat <T> as a generic, not JSX.
const identity2 = <T,>(value: T) => { //generic arrow function ------------> IMPORTANT. only this before ()
  console.log("identity2():", value);
  return value;
};

// ✅ 4. Rest parameters
function logAll(...args: string[]): void {
  console.log("logAll():");
  args.forEach((arg, i) => console.log(`  Arg ${i + 1}:`, arg));
}

// ✅ 5. Callback parameter
function withCallback(callback: (msg: string) => void): void {
  const message = "Hello from withCallback!";
  console.log("withCallback(): Triggering callback...");
  callback(message);
}

// ✅ 6. Debounce function with types
function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    console.log("debounce(): waiting...");
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      console.log("debounce(): executing...");
      func(...args);
    }, delay);
  };
}




const TsFunctionDeclarations: React.FC = () => {
  useEffect(() => {
    // 🧪 Function usages
    greet("Alice", 28);
    multiply(3, 4);
    identity<boolean>(true);  //------------> IMPORTANT
    identity2<string>("Hello"); //------------> IMPORTANT
    logAll("React", "TypeScript", "TSX");
    withCallback((msg) => {
      console.log("Callback says:", msg);
    });

    //debounce example
    const debouncedSearch = debounce((text: string) => {
      console.log("Search term:", text);
    }, 2000);

    debouncedSearch("hel");
    debouncedSearch("hell");
    debouncedSearch("hello"); // Only this one will log after 1s
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <GoBackToHome />
      <h2>🔍 TypeScript Function Declarations Demo</h2>
      <p>Open the console to see all function logs!</p>
    </div>
  );
};

export default TsFunctionDeclarations;