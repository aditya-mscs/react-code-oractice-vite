/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
//@ts-nocheck



// ✅ 1. let, const, var — Variable Declarations
let x = 10;              // Block-scoped, reassignable
const y = 20;            // Block-scoped, not reassignable
var z = 30;              // Function-scoped, avoid using in modern JS



// ✅ 2. Arrow Functions — Short, lexical 'this'
const add = (a, b) => a + b;
const greet = name => `Hello, ${name}`;



// ✅ 3. Default Parameters
function power(base, exp = 2) {
  return base ** exp;
}




// ✅ 4. Template Literals — Multi-line & expressions
const name = "Alice";
console.log(`Hi, ${name}! Welcome.`);



// ✅ 5. Destructuring — Arrays & Objects
const [first, second] = [1, 2];
const { title, author } = { title: "JS", author: "TC39" };




// ✅ 6. Spread & Rest Operator (...)
const nums = [1, 2, 3];
const clone = [...nums];               // Spread in arrays
const merged = { ...a, ...b };         // Spread in objects
function logAll(...args) {             // Rest in params
  console.log(args);
}




// ✅ 7. Object Shorthand & ________ Computed Props ["is_" + color]
const color = "blue";
const item = { color, ["is_" + color]: true }; // { color: "blue", is_blue: true }

// ✅ 8. Optional Chaining & ___________ Nullish Coalescing ??
const user = { profile: { name: "Bob" } };
console.log(user?.profile?.name);      // Safe access
const nickname = user.nickname ?? "Guest"; // Nullish fallback




// ✅ 9. Classes & Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}
const dog = new Dog("Rex");
dog.speak();




// ✅ 10. Static & Private Class Fields
class Counter {
  static count = 0;        // ________ Static = Shared across all instances
  #secret = 42;            // Truly private field
  reveal() {
    return this.#secret;
  }
}




// ✅ 11. Promises & Async/Await
const fetchData = async () => {
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error("Fetch error:", e);
  }
};




// ✅ 12. ___________ Generators (function*)
function* idGen() {
  let i = 0;
  while (true) yield i++;
}
const gen = idGen();
gen.next().value; // 0




// ✅ 13. Iterables & for...of
const arr = [10, 20, 30];
for (const n of arr) {
  console.log(n);
}




// ✅ 14. Map, Set, WeakMap, WeakSet
const map = new Map();
map.set("a", 1);
console.log(map.get("a"));

const set = new Set([1, 2, 2, 3]); // {1,2,3}
set.add(4);
set.has(2);

// ✅ 15. Symbol — Unique property keys
const sym = Symbol("id");
const obj = { [sym]: 123 };

// ✅ 16. BigInt — For huge integers
const big = 1234567890123456789012345678901234567890n;





// ✅ 17. Modules (ESM)
// module.js
export const PI = 3.14;
export default function sayHi() { console.log("Hi!"); }
// main.js
import sayHi, { PI } from "./module.js";




// ✅ 18. Import.meta
console.log(import.meta.url); // Useful in ESM context




// ✅ 19. Top-Level Await (ES2022+)
const data = await fetch('/api').then(r => r.json()); // Only in modules




// ✅ 20. Array Methods
[1, 2, 3].map(x => x * 2);       // [2,4,6]
[1, 2, 3].filter(x => x > 1);   // [2,3]
[1, 2, 3].reduce((a, b) => a + b, 0); // 6
[1, 2, 3].at(-1);               // 3 (ES2022)

// ✅ 21. Object Methods
Object.keys(obj);
Object.entries(obj);
Object.hasOwn(obj, "key");      // ES2022




// ✅ 22. Intl API — Formatting Dates, Numbers
const f = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
f.format(1234.56); // $1,234.56


// ✅ 23. StructuredClone — Deep clone any object
const copy = structuredClone(original); // ES2022+



// ✅ 24. WeakRef & FinalizationRegistry (ES2021)
const ref = new WeakRef({ name: "data" });



// ✅ 25. Array.groupBy (ES2024)
const grouped = [1, 2, 3, 4].groupBy(n => (n % 2 === 0 ? 'even' : 'odd'));

// ✅ 26. .toSorted(), .toReversed(), .toSpliced() — Non-mutating (ES2023)
const arr2 = [3, 1, 2];
const sorted = arr2.toSorted();   // returns [1, 2, 3] without mutating


