/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck Temporary ignore
// @ts-expect-error Temporary ignore


import React from "react";
import GoBackToHome from "./GoBacktoHome";


export const ES6 = () => {
  // Primitive data types
  console.log(typeof 25);           // number
  console.log(typeof "John");       // string
  console.log(typeof true);         // boolean
  console.log(typeof undefined);    // undefined
  console.log(typeof null);         // object (quirk)
  console.log(typeof Symbol("id")); //_________ symbol
  console.log(typeof 123456789n);   //_________ bigint

  // Non-primitive data types
  console.log(typeof {});           // object
  console.log(typeof []);           // object
  console.log(typeof function () { }); // _______ function
  console.log(typeof new Map());    // object
  console.log(typeof new Set());    // object
  console.log(typeof new WeakMap());// object
  console.log(typeof new WeakSet());// object





  console.log('----------------------2 OBJECT QUESTIONS-----------------------------');
  //ChatGpt
  // Object Property and Value Access
  console.log('1. Object.keys:', Object.keys({ a: 1, b: 2 })); // ['a', 'b']
  console.log('2. Object.values:', Object.values({ a: 1, b: 2 })); // [1, 2]
  console.log('3. Object.entries:', Object.entries({ a: 1, b: 2 })); // [['a', 1], ['b', 2]]

  // Object Copying and Merging
  console.log('4. Object.assign:', Object.assign({}, { a: 1 }, { b: 2 })); // {a: 1, b: 2}
  const obj1x = { a: 1 }; const obj2x = { b: 2 }; const merged = Object.assign({}, obj1x, obj2x);
  console.log('4. Object.assign:', merged); // {a: 1, b: 2}
  //NOTE: shallow copy only copies the first level of properties, while deep copy copies all levels
  const clone = structuredClone({ a: 1 }); console.log('5. structuredClone:', clone); // {a: 1}

  // Prototype and Property Manipulation
  const proto = { greet: 'Hello' }; const obj1 = Object.create(proto);
  console.log('6. Object.create:', obj1.greet); // 'Hello'
  console.log('7. Object.getPrototypeOf:', Object.getPrototypeOf(obj1)); // {greet: 'Hello'}
  Object.setPrototypeOf(obj1, null); console.log('8. Object.setPrototypeOf:', Object.getPrototypeOf(obj1)); // null

  // Property Descriptor Methods
  const obj2 = { a: 1 };
  console.log('9. Object.getOwnPropertyDescriptor:', Object.getOwnPropertyDescriptor(obj2, 'a')); // {value: 1, writable: true, ...}
  console.log('10. Object.getOwnPropertyDescriptors:', Object.getOwnPropertyDescriptors(obj2)); // {a: {value: 1, writable: true, ...}}

  // Property Existence and Definition
  console.log('11. Object.hasOwn:', Object.hasOwn({ a: 1 }, 'a')); // true
  console.log('12. hasOwnProperty:', { a: 1 }.hasOwnProperty('a')); // true
  console.log('13. propertyIsEnumerable:', { a: 1 }.propertyIsEnumerable('a')); // true

  // Sealing, Freezing, and Extensibility
  const obj3 = { a: 1 }; Object.freeze(obj3); console.log('14. Object.freeze:', obj3); // {a: 1}
  console.log('15. Object.isFrozen:', Object.isFrozen(obj3)); // true
  const obj4 = { b: 2 }; Object.seal(obj4); console.log('16. Object.seal:', obj4); // {b: 2}
  console.log('17. Object.isSealed:', Object.isSealed(obj4)); // true
  const obj5 = {}; Object.preventExtensions(obj5);
  console.log('18. Object.preventExtensions:', Object.isExtensible(obj5)); // false
  console.log('19. Object.isExtensible:', Object.isExtensible({})); // true

  // Comparison and Checking
  console.log('20. Object.is:', Object.is(NaN, NaN)); // true

  // Object Transformation
  console.log('21. Object.fromEntries:', Object.fromEntries([['a', 1], ['b', 2]])); // {a: 1, b: 2}

  // Conversion
  console.log('22. Object.toString:', ({}).toString()); // [object Object]
  console.log('23. Object.valueOf:', (new Number(10)).valueOf()); // 10

  // Property Definition
  const obj6 = {}; Object.defineProperty(obj6, 'name', { value: 'John', writable: false });
  console.log('24. Object.defineProperty:', obj6.name); // 'John'
  Object.defineProperties(obj6, { age: { value: 30 }, city: { value: 'NY' } }); console.log('25. Object.defineProperties:', obj6); // {name: 'John', age: 30, city: 'NY'}



  //Object: Object.is(obj), Object.keys(obj), Object.values(obj), Object.entries(obj), Object.assign(), ____ Object.hasOwn()
  const person = {
    name: 'John',
    age: 30,
    greet() { //NOTE : _________ shorthand method definition
      console.log(`Hello ${this.name}`);
    },
    greetArrow: () => { //NOTE : _________ arrow function DOESNT work with this
      //NOTE : ___________ this is not bound to the object, so it will be undefined
      //NOTE : this is bound to the global object (window in browsers)
      console.log(`Hello ${this?.name}`); //Hello undefined
    },
    greetRegular: function () { //NOTE : regular function
      console.log(`Hello ${this.name}`); //Hello John
    },
    greetWithDefault: function (greeting = 'Hello') { //NOTE : default parameter
      console.log(`${greeting} ${this.name}`); //Hello John
    },
    greetWithRest: function (...args: string[]) { //NOTE : rest parameter
      console.log(`Hello ${this.name} and I have ${args.length} arguments: ${args.join(', ')}`); //Hello John and I have 3 arguments: Hi, Hello, Hey
    },
    greetWithSpread: function (...args: string[]) { //NOTE : spread operator
      const newArgs = [...args, 'John'];
      console.log(`Hello ${this.name} and I have ${newArgs.length} arguments: ${newArgs.join(', ')}`); //Hello John and I have 4 arguments: Hi, Hello, Hey, John
    }
  };

  const tslaObj = {
    symbol: 'TSLA',
    price: 200,
    name: 'Tesla',
    changePercent: 0.5,
    marketCap: 1000000,
    volume: 1000000,
  }
  Object.keys(tslaObj).forEach((key) => {
    console.log(key, ': ', tslaObj[key]);
  });
  console.log(tslaObj.price); // 200
  Object.assign(tslaObj, { price: 300 }); //----> Updates ORIGINAL object. FIRST PARAM GETS UPDATED EVERY TIME
  console.log(tslaObj.price); // 300

  const tslaObj2 = Object.assign({}, tslaObj, { price: 400 }); //----> Creates a SHALLOW copy of the object
  console.log(tslaObj2.price); // 400
  console.log(tslaObj.price); // 300

  console.log(Object.hasOwn({ a: 1 }, 'a')) // true





  console.log('-------------------------1 ARRAY QUESTIONS--------------------------');
  //ES6 array features
  const numbersX = [1, 2, 3, 4, 5];
  const doubledNumbers = numbersX.map(num => num * 2); //-----> Best for Creating New Arrays SO REPLACE ALL uses map
  const filteredNumbers = numbersX.filter(num => num > 2); //-----> Best for Filtering Arrays
  const sum = numbersX.reduce((total, num) => total + num, 0); //-----> Best for Summing or Aggregation
  //NOTE: first param is acc/total and second param is indiviual number. second param 0 is initialValue

  //ChatGpt
  // 🌟 Creation and Filling
  console.log('1.1 Array.from:', Array.from('Hello')); // ['H', 'e', 'l', 'l', 'o']
  console.log('1.1 Array.from:', Array.from({ length: 5 }));  // [empty × 5]
  console.log('1.1 Array.from:', Array.from({ length: 5 }, (_, i) => i)); // [0,1,2,3,4] ----> IMP for creating arrays
  console.log('1.1 Array.from:', Array.from({ length: 5 }, (_, i) => (i & 1 ? 1 : -1))); // [1, -1, 1, -1, 1]
  console.log('1.1 Array.from:', Array.from({ length: 3 }, () => Math.random())); // [0.123, 0.456, 0.789]
  console.log('1.1 Array.from:', Array.from([1, 2, 3], x => x * 2)); // [2, 4, 6]
  console.log('1.1 Array.from:', Array.from(new Set([1, 2, 3, 4]))); // [1, 2, 3, 4]
  console.log('1.1 Array.from:', Array.from(new Map([['a', 1], ['b', 2]]))); // [['a', 1], ['b', 2]]
  // console.log('1.1 Array.from:', Array.from('123abc456').filter(c => !isNaN(parseInt(c)))); // ['1', '2', '3', '4', '5', '6']

  console.log('1.3 Array.of:', Array.of(1, 2, 3)); // [1, 2, 3]
  console.log('1.4 Array.fill:', [1, 2, 3].fill(0)); // [0, 0, 0]
  console.log('1.4 Array.from:', Array.from({ length: 5 }).fill(1));  // ___________[1, 1, 1, 1, 1]

  // 🔄 Iteration
  [1, 2, 3].forEach((num) => console.log('4. forEach:', num * 2)); // 2, 4, 6
  console.log('5. map:', [1, 2, 3].map(x => x * 2)); // [2, 4, 6]
  console.log('6. filter:', [1, 2, 3, 4].filter(x => x % 2 === 0)); // [2, 4]
  console.log('1.7 reduce:', [1, 2, 3].reduce((acc, curr) => acc + curr, 0)); // 6 //----> reduce(callbackfn: (previousValue, currentValue, currentIndex, array) => number, initialValue)
  console.log('1.7 Max:', [1, 2, 3, 4].reduce((max, curr) => (curr > max ? curr : max), -Infinity));
  console.log('1.7 Fruit count:', ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'].reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  }, {})); // { apple: 3, banana: 2, orange: 1 }
  console.log('1.7 Grouped by letter:', ['dog', 'cat', 'car', 'apple'].reduce((acc, word) => {
    const letter = word[0];
    acc[letter] = acc[letter] || [];
    acc[letter].push(word);
    return acc;
  }, {})); // { d: ['dog'], c: ['cat', 'car'], a: ['apple'] }
  console.log('8. reduceRight:', ['a', 'b', 'c'].reduceRight((acc, val) => acc + val)); // "cba"

  // 🔍 __________ Searching
  console.log('9. find:', [1, 2, 3, 4].find(x => x > 2)); // 3 //Returns _____ first element in the array where predicate is true, and undefined otherwise.
  console.log('10. findIndex:', [1, 2, 3, 4].findIndex(x => x > 2)); // 2
  console.log('11. includes:', [1, 2, 3].includes(2)); // true ____________
  console.log('12. indexOf:', [1, 2, 3].indexOf(2)); // 1 --->  Array<number>.indexOf(searchElement, fromIndex)
  console.log('13. lastIndexOf:', [1, 2, 3, 2].lastIndexOf(2)); // 3
  console.log('14. some:', [1, 2, 3].some(x => x > 2)); // true ____________ some/every returns boolean
  console.log('15. every:', [1, 2, 3].every(x => x > 0)); // true

  // 🧩 Transformation
  console.log('16. concat:', [1, 2].concat([3, 4])); // _____________[1, 2, 3, 4]
  console.log('17. join:', [1, 2, 3].join('-')); // "1-2-3" //---> .join(separator?: string): string
  console.log('18. flat:', [1, [2, [3]]].flat()); // (3) [1, 2, Array(1)] ---> .flat by default flattens only 1 level deep
  console.log('18. flat:', [1, [2, [3]]].flat(2)); // [1, 2, 3]
  console.log('18. flat:', [1, [2, [3, [4, [5]]]]].flat(Infinity)); // _________[1, 2, 3, 4, 5]
  console.log('19. flatMap:', [1, 2].flatMap(x => [x * 2])); // [2, 4]
  console.log('20. reverse:', [1, 2, 3].reverse()); // [3, 2, 1]

  //Adding removing from array
  // 📋 PUSH POP at the END
  console.log('21. push:', [1, 2].push(3), [1, 2]); // 3, [1, 2, 3] ---> PUSH AT END
  console.log('22. pop:', [1, 2, 3].pop(), [1, 2]); // 3, [1, 2] ---> POP FROM END
  // UNSHIFT = PUSH at the START
  console.log('23. unshift:', [2, 3].unshift(1), [2, 3]); // 3, [1, 2, 3] --> UNSHIFT is PUSH AT START. unshift(...items)
  console.log('24. shift:', [1, 2, 3].shift(), [2, 3]); // 1, [2, 3] ---> SHIFT is pop from START



  //SPLICE ----> (INDEX, HOW MANY TO REMOVE, HOW MANY TO ADD)
  // ⚠️ Mutating – _________ SPLICE Modifies the original array. //-------> SO NEED TO ASSIGN TO OTHER VARIABLE
  // Used to add, remove, or replace elements
  console.log('25. splice (add):', [1, 3].splice(1, 0, 2), [1, 2, 3]); //returns [], Original array[1,2] --> [1, 2, 3] ---> INSERTS INBETWEEN
  console.log('26. splice (remove):', [1, 2, 3].splice(1, 1), [1, 3]); // [2], [1, 3] ---> DELETES
  const a1 = [1, 2, 3, 4];
  console.log('26.1 Remove first:', [...a1].splice(0, 1));        // [1] //Original array: [2, 3, 4]
  console.log('26.2 Remove last:', [...a1].splice(3, 1));         // [4] //Original array: [1, 2, 3]
  console.log('26.3 Remove middle:', [...a1].splice(1, 2));       // [2, 3] //Original array: [1, 4]
  console.log('26.4 Insert at index 2:', [...a1].splice(2, 0, 99)); // [] ---> .splice() always returns an array of removed items. Since deleteCount = 0, nothing is removed, so the return value is: [] // Original array: [1, 2, 99, 3, 4]
  const a2 = [1, 2, 3, 4]
  const a3 = a2.splice(2, 0, 99); // a3 = [] // a2 = [1, 2, 99, 3, 4]
  console.log('26.5 Insert at start:', [...a1].splice(0, 0, 0));  // [] // Original array: [0, 1, 2, 3, 4]
  console.log('26.6 Insert at end:', [...a1].splice(4, 0, 5));    // [] // Original array: [1, 2, 3, 4, 5]
  console.log('26.7 Replace 1 with 2:', [...a1].splice(1, 1, 'a', 'b')); // [2] // Original array: [1, 'a', 'b', 3, 4]
  console.log('26.8 Insert 2 items at 1:', [...a1].splice(1, 0, 'a', 'b')); // [] // Original array: [1, 'a', 'b', 2, 3, 4]
  console.log('26.9 Remove last using -1:', [...a1].splice(-1, 1)); // [4] // Original array: [1, 2, 3]
  console.log('26.10 Remove third using -2:', [...a1].splice(-2, 1)); // [3] // Original array: [1, 2, 4]
  console.log('26.11 Replace first 2 with 10,11:', [...a1].splice(0, 2, 10, 11)); // [1, 2] // Original array: [10, 11, 3, 4]
  console.log('26.12 Empty array:', [...a1].splice(0, a1.length)); // [1, 2, 3, 4] // Original array: []
  console.log('26.13 Remove from index 2:', [...a1].splice(2));   // [3, 4] // Original array: [1, 2]
  console.log('26.14 No remove, no insert:', [...a1].splice(1, 0)); // [] // Original array: [1, 2, 3, 4]
  console.log('26.15 Remove 3 from 1, insert x:', [...a1].splice(1, 3, 'x')); // [2, 3, 4] // Original array: [1, 'x']
  console.log('26.16 Add "start" at beginning:', [...a1].splice(0, 0, 'start')); // [] // Original array: ['start', 1, 2, 3, 4]
  console.log('26.17 Add "end" at end:', [...a1].splice(a1.length, 0, 'end')); // [] // Original array: [1, 2, 3, 4, 'end']



  //Chunking -----> slice(start, end)  RETURNS SLICE
  //	✅ Non-mutating ___________Returns a shallow copy, original array remains unchanged. Used to extract a portion of an array
  console.log('38. slice:', [1, 2, 3, 4].slice(1, 3)); // [2, 3] //----------->
  //Slice 3 from [1, 2, 3, 4] and returns [2, 3]
  console.log('38. slice:', [1, 2, 3, 4].slice(-2)); // [3, 4] //----------->
  console.log('38.1 Slice full:', a1.slice());                     // [1, 2, 3, 4]
  console.log('38.2 Slice from index 1:', a1.slice(1));            // [2, 3, 4]
  console.log('38.3 Slice index 1 to 3:', a1.slice(1, 3));         // [2, 3]
  console.log('38.4 Slice with negative start:', a1.slice(-2));    // [3, 4]
  console.log('38.5 Slice with negative end:', a1.slice(0, -1));   // [1, 2, 3]
  console.log('38.6 Slice last element only:', a1.slice(-1));      // [4]
  console.log('38.7 Slice with both negative:', a1.slice(-3, -1)); // [2, 3]
  console.log('38.8 Slice zero elements:', a1.slice(2, 2));        // []


  const a4 = [1, 2, 3, 4]
  function deleteFromArray(valueToRemove) { //search and delete --> indexOf and splice
    const index = a4.indexOf(valueToRemove);
    if (index !== -1) {
      a4.splice(index, 1);
    }
  }
  deleteFromArray(3); // a4 = [1, 2, 4] ----> same array modfied
  // OR
  function deleteFromArray(valueToRemove) {
    return a4.filter(val => val !== valueToRemove);
  }
  const result = deleteFromArray(2); // result = [1, 4] // a4 = [1, 2, 4]


  // 🔄 Sorting and Rearranging
  console.log('27. sort:', [3, 1, 2].sort((a, b) => a - b)); // [1, 2, 3]
  console.log('28. copyWithin:', [1, 2, 3, 4].copyWithin(0, 2)); // [3, 4, 3, 4]
  console.log('29. fill:', [1, 2, 3].fill(0, 1, 3)); // [1, 0, 0] //fill(value, start, end)

  // 📐 Array Properties
  console.log('30. length:', [1, 2, 3].length); // 3
  console.log('31. isArray:', Array.isArray([1, 2, 3])); // true

  // 🌟 Finding Min/Max
  console.log('32. Math.min:', Math.min(...[1, 2, 3])); // 1 //__________ Note ... is spread operator to unpack array
  console.log('33. Math.max:', Math.max(...[1, 2, 3])); // 3

  // 🔀 Converting and Cloning
  console.log('34. toString:', [1, 2, 3].toString()); // "1,2,3"
  console.log('35. toLocaleString:', [1, 2].toLocaleString()); // "1,2"
  const arr = [1, 2, 3]; const clonedArr = [...arr]; console.log('36. spread operator:', clonedArr); // [1, 2, 3]

  // 🗃️ Advanced
  console.log('39. Array.prototype.at:', [1, 2, 3].at(-1)); // 3






  console.log('-----------------------SET QUESTIONS----------------------------');
  //Set --> new Set(), .add(X), .has(X), .delete(X), .clear(), .size, forEach,
  //NOTE : Set is an collection of ______ unique values, meaning it can only contain one instance of each value
  //NOTE : Set is an NOT iterable, so we canNOT use map, filter, reduce, etc. on it
  //NOTE : Set is not an object or array, so we can't use its methods on it
  const setX = new Set([4, 5, 2, 3]);
  setX.add(1);
  setX.add(2);
  setX.add(2);
  setX.add(3);
  console.log(setX); // Set(5) { 4, 5, 2, 3, 1 }
  setX.delete(1);
  console.log(setX.has(1)); // false
  console.log(setX, 'Size: ', setX.size); // Set(4) { 4, 5, 2, 3 } Size:  4
  setX.forEach((value) => {
    console.log(value);
  });

  const newSet = setX; //NOTE: set will also delete 2
  newSet.delete(2);
  console.log('newSet = set; ', setX, newSet); //Set(4) { 4, 5, 3, 1 } Set(4) { 4, 5, 3, 1 }

  const newSet2 = new Set(setX); //NOTE : set will not delete 3
  newSet2.delete(3);
  console.log('newSet = new Set(); ', setX, newSet2); //Set(4) { 4, 5, 3, 1 } Set(4) { 4, 5, 1 }
  setX.clear();

  //NOTE : Set has no index, so we can't access it like an array
  //NOTE : Set has no length property, so we can't use it like an array

  //ChatGpt
  // 🌟 Creating and Basic Operations
  const setOne = new Set([1, 2, 3]); console.log('1. new Set:', setOne); // Set(3) { 1, 2, 3 }
  console.log('2. add:', setOne.add(4), setOne); // Set(4) { 1, 2, 3, 4 }
  console.log('3. has:', setOne.has(2)); // true
  console.log('4. delete:', setOne.delete(3), setOne); // true, Set(3) { 1, 2, 4 }
  console.log('5. clear:', setOne.clear(), setOne); // undefined, Set(0) {}

  // 🌱 Reinitializing for more examples
  const numbersSet = new Set([10, 20, 30, 40, 50]);

  // 🔄 Iteration
  numbersSet.forEach(val => console.log('6. forEach:', val * 2)); // 20, 40, 60, 80, 100 //---> forEach WORKS on set
  const numberArray = [...numbersSet] // OR const numberArray = Array.from(numbersSet)  //---> CONVERT SET TO ARRAY
  console.log('6.5 set to array:', numberArray); // [10, 20, 30, 40, 50]
  console.log('7. keys:', [...numbersSet.keys()]); // [10, 20, 30, 40, 50]
  console.log('8. values:', [...numbersSet.values()]); // [10, 20, 30, 40, 50]
  console.log('9. entries:', [...numbersSet.entries()]); // [[10, 10], [20, 20], [30, 30], [40, 40], [50, 50]]

  // 🔄 Converting between Set and Array
  console.log('10. Array from Set:', Array.from(numbersSet)); // [10, 20, 30, 40, 50]
  console.log('11. Spread operator:', [...numbersSet]); // [10, 20, 30, 40, 50]

  // 🔧 Set Operations
  const setAlpha = new Set([1, 2, 3]);
  const setBeta = new Set([3, 4, 5]);

  // 🧮 Set Union
  const unionSet = new Set([...setAlpha, ...setBeta]);
  console.log('12. Union:', unionSet); // Set(5) { 1, 2, 3, 4, 5 }

  // 🔀 Set Intersection
  const intersectionSet = new Set([...setAlpha].filter(x => setBeta.has(x)));
  console.log('13. Intersection:', intersectionSet); // Set(1) { 3 }

  // ➖ Set Difference
  const differenceSet = new Set([...setAlpha].filter(x => !setBeta.has(x)));
  console.log('14. Difference (Alpha - Beta):', differenceSet); // Set(2) { 1, 2 }

  // 🔁 Set Symmetric Difference
  const symDifferenceSet = new Set([...setAlpha, ...setBeta].filter(x => !setAlpha.has(x) || !setBeta.has(x)));
  console.log('15. Symmetric Difference:', symDifferenceSet); // Set(4) { 1, 2, 4, 5 }

  // 🔍 Checking Subset and Superset
  const isSubsetSet = [...setAlpha].every(x => setBeta.has(x));
  console.log('16. Is Subset (Alpha ⊆ Beta):', isSubsetSet); // false
  const isSupersetSet = [...setBeta].every(x => setAlpha.has(x));
  console.log('17. Is Superset (Beta ⊆ Alpha):', isSupersetSet); // false

  // 📏 Set Properties
  console.log('18. Size:', numbersSet.size); // 5

  // 🚀 Chaining Methods
  // const chainSet = new Set([1, 2, 3]).add(4).delete(2).has(3);
  // console.log('19. Chaining Methods:', chainSet); // true

  // 🌟 Advanced Usage: Removing Duplicates from an Array
  const arrayWithDups = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = [...new Set(arrayWithDups)];
  console.log('20. Removing Duplicates:', uniqueArray); // [1, 2, 3, 4, 5]

  // 🌲 Set to String
  console.log('21. Set to String:', Array.from(new Set([1, 2, 3])).join(',')); // "1,2,3"

  // 🌐 WeakSet Example
  const weakSetExample = new WeakSet();
  const objAlpha = { name: 'Alice' };
  const objBeta = { name: 'Bob' };
  weakSetExample.add(objAlpha).add(objBeta);
  console.log('22. WeakSet has objAlpha:', weakSetExample.has(objAlpha)); // true
  console.log('23. WeakSet delete objAlpha:', weakSetExample.delete(objAlpha), weakSetExample.has(objAlpha)); // true, false





  console.log('----------------------MAP QUESTIONS-----------------------------');
  //MAP --> new Map(), .set(key, value), .has(key), .get(key), .delete(key), .clear(), .size .forEach()
  const map = new Map(); //NOTE : Map is an collection of ______ key-value pairs with unique keys
  map.set('name', 'John');
  map.set('age', 30);
  map.set('age', 31);
  const color = 'red';
  map.set(color, 'green');
  console.log(map); // Map(3) { 'name' => 'John', 'age' => 31, 'red' => 'green' }
  map.delete('name');
  console.log(map.has('name')); // false
  console.log(map.size); // 1
  map.forEach((value, key) => {
    console.log(`${key}: ${value}`); //NOTE : iterate over map
  });
  map.clear(); //NOTE : clear all values from map

  //ChatGpt
  // 1. Creating a Map
  const cityPopulationMap = new Map();
  console.log('1. Initial empty map:', cityPopulationMap); // Map(0) {}

  // 2. Adding key-value pairs
  cityPopulationMap.set('New York', 8419000);
  cityPopulationMap.set('Los Angeles', 3980400);
  cityPopulationMap.set('Chicago', 2716000);
  console.log('2. After adding cities:', cityPopulationMap); // Map(3) {'New York' => 8419000, 'Los Angeles' => 3980400, 'Chicago' => 2716000}

  // 3. Getting a value by key
  console.log('3. Population of Los Angeles:', cityPopulationMap.get('Los Angeles')); // 3980400

  // 4. Checking if a key exists
  console.log('4. Has New York:', cityPopulationMap.has('New York')); // true -------> checks value
  console.log('5. Has Houston:', cityPopulationMap.has('Houston')); // false

  // 5. Updating a value
  cityPopulationMap.set('Chicago', 2750000);
  console.log('6. Updated population of Chicago:', cityPopulationMap.get('Chicago')); // 2750000

  // 6. Deleting a key
  cityPopulationMap.delete('Los Angeles');
  console.log('7. After deleting Los Angeles:', cityPopulationMap); // Map(2) {'New York' => 8419000, 'Chicago' => 2750000}

  // 7. Iterating over Map entries
  console.log('8. Iterating over entries:');
  cityPopulationMap.forEach((value, key) => {
    console.log(`- City: ${key}, Population: ${value}`);
  });

  // 8. Using for...of to iterate
  console.log('9. Using for...of loop:');
  for (const [city, population] of cityPopulationMap) {
    console.log(`   - ${city}: ${population}`);
  }

  // 9. Converting Map to Array
  const cityArray = Array.from(cityPopulationMap);
  console.log('10. Map to Array:', cityArray); // [['New York', 8419000], ['Chicago', 2750000]] //---> CONVERT MAP TO ARRAY of ARRAY

  // 10. Getting keys and values
  const cityKeys = Array.from(cityPopulationMap.keys());
  const cityValues = Array.from(cityPopulationMap.values());
  console.log('11. Map keys:', cityKeys); // ['New York', 'Chicago']
  console.log('12. Map values:', cityValues); // [8419000, 2750000]

  // 11. Size of the map
  console.log('13. Map size:', cityPopulationMap.size); // 2

  // 12. Clearing the map
  cityPopulationMap.clear();
  console.log('14. After clearing:', cityPopulationMap); // Map(0) {}

  // 13. Using map chaining methods
  const userMap = new Map();
  userMap.set('John', { age: 30 }).set('Jane', { age: 25 });
  console.log('15. Map after chaining set:', userMap); // Map(2) { 'John' => { age: 30 }, 'Jane' => { age: 25 } }

  // 14. Checking empty map
  console.log('16. Is map empty after clear:', cityPopulationMap.size === 0); // true

  // 15. Nested maps
  const nestedMap = new Map();
  nestedMap.set('USA', new Map([['New York', 8419000], ['Chicago', 2750000]]));
  console.log('17. Nested map:', nestedMap); // Map(1) { 'USA' => Map(2) { 'New York' => 8419000, 'Chicago' => 2750000 } }

  // 16. Accessing nested map values
  const usaMap = nestedMap.get('USA');
  console.log('18. Population of Chicago in nested map:', usaMap?.get('Chicago')); // 2750000

  // 17. Converting map to JSON-like object
  const mapToObject = Object.fromEntries(cityPopulationMap);
  console.log('19. Map to Object:', mapToObject); // {}

  // 18. Reinitializing the map with new data
  cityPopulationMap.set('San Francisco', 884363).set('Boston', 692600);
  console.log('20. Reinitialized map:', cityPopulationMap); // Map(2) {'San Francisco' => 884363, 'Boston' => 692600}




  // Find duplicates in an array
  const temp = [1, 2, 2, 3, 4, 4, 5]
  const getDuplicates = (arr) => {
    const newArr = [];
    const map = new Map();
    arr.forEach((item) => {
      if (map.has(item)) { //--------> have to check if map has the item
        map.set(item, map.get(item) + 1);
      } else {
        map.set(item, 1);
      }
    })
    console.log(map);
    map.forEach((value, key) => {
      if (value > 1) {
        newArr.push(key);
      }
    })
    return newArr;
  }
  const outputArr = getDuplicates(temp);
  console.log('outputArr:', outputArr);




  console.log('----------------------WEAKMAP QUESTIONS-----------------------------');
  //WeakMap -> new WeakMap(), .set(key, value), .has(key), .get(key), .delete(key)
  //NOTE : WeakMap is an collection of ______ key-value pairs with unique keys, but the keys must be objects
  //Use: to store private data for an object
  const weakMap = new WeakMap();
  weakMap.set({ name: 'John' }, 'Hello');
  console.log(weakMap); // WeakMap(1) { { name: 'John' } => 'Hello' }
  console.log(weakMap.get({ name: 'John' })); // --------> undefined because the key is not the same object

  //Practical example of WeakMap
  const weakMap2 = new WeakMap();
  const objWm = { name: 'John' };
  weakMap2.set(objWm, 'Hello');
  console.log(weakMap2.get(objWm)); // Hello
  weakMap2.set(objWm, 'Hi');
  console.log(weakMap2.get(objWm)); // Hi //----------> Hi because same object as key ie obj1

  //ChatGpt
  // 1. Creating objects to use as keys
  const personKey1 = { id: 1, name: 'Alice' };
  const personKey2 = { id: 2, name: 'Bob' };
  const personKey3 = { id: 3, name: 'Charlie' };

  // 2. Creating a WeakMap with unique variable names
  const personWeakMap = new WeakMap();

  // 3. Adding key-value pairs
  personWeakMap.set(personKey1, 'Developer');
  personWeakMap.set(personKey2, 'Designer');
  personWeakMap.set(personKey3, 'Manager');

  console.log('1. Has personKey1:', personWeakMap.has(personKey1)); // true
  console.log('2. Get personKey2:', personWeakMap.get(personKey2)); // Designer

  // 4. Updating a value
  personWeakMap.set(personKey2, 'Lead Designer');
  console.log('3. Updated personKey2:', personWeakMap.get(personKey2)); // Lead Designer

  // 5. Deleting a key
  personWeakMap.delete(personKey3);
  console.log('4. Has personKey3 after delete:', personWeakMap.has(personKey3)); // false

  // 6. Practical usage: Tracking element metadata
  const metaDataMap = new WeakMap();
  const element1 = document.createElement('div');
  const element2 = document.createElement('span');
  metaDataMap.set(element1, { clicked: true, timestamp: Date.now() });
  metaDataMap.set(element2, { clicked: false });

  console.log('5. Element1 metadata:', metaDataMap.get(element1)); // { clicked: true, timestamp: ... }
  console.log('6. Element2 metadata:', metaDataMap.get(element2)); // { clicked: false }

  // 7. Reassigning objects to check garbage collection
  let temporaryKey = { temp: 'data' };
  const tempWeakMap = new WeakMap();
  tempWeakMap.set(temporaryKey, 'Temporary Value');
  console.log('7. Before nullifying:', tempWeakMap.has(temporaryKey)); // true

  // 8. Nullifying the reference
  temporaryKey = null;
  // The key-value pair will eventually be removed by garbage collector
  console.log('8. After nullifying, still exists:', tempWeakMap.has(temporaryKey)); // false

  // 9. Demonstrating practical use case: Avoiding memory leaks
  const cacheMap = new WeakMap();
  function cacheResult(obj, result) {
    if (!cacheMap.has(obj)) {
      cacheMap.set(obj, result);
    }
    return cacheMap.get(obj);
  }

  const objA = {};
  const objB = {};
  cacheResult(objA, 'Cached Data A');
  cacheResult(objB, 'Cached Data B');

  console.log('9. Cached Result A:', cacheMap.get(objA)); // 'Cached Data A'
  console.log('10. Cached Result B:', cacheMap.get(objB)); // 'Cached Data B'

  // 10. Clearing references
  cacheMap.delete(objA);
  console.log('11. After deletion of objA:', cacheMap.has(objA)); // false






  console.log('----------------------WEAKSET QUESTIONS-----------------------------');
  //WeakSet -> new WeakSet(), .add(value), .has(value), .delete(value)
  //NOTE : WeakSet is an collection of ______ unique values, but the values must be objects
  // 1. Creating a WeakSet
  const weakSet1 = new WeakSet();
  console.log('1. Initial empty WeakSet:', weakSet1); // WeakSet {}

  // 2. Adding objects to WeakSet
  const personA = { name: 'Alice' };
  const personB = { name: 'Bob' };
  weakSet1.add(personA);
  weakSet1.add(personB);
  console.log('2. After adding objects:', weakSet1); // WeakSet { [items unknown] }

  // 3. Checking if an object exists
  console.log('3. Has personA:', weakSet1.has(personA)); // true
  console.log('4. Has personB:', weakSet1.has(personB)); // true
  console.log('5. Has nonexistent object:', weakSet1.has({ name: 'Charlie' })); // false

  // 4. Removing an object
  weakSet1.delete(personA);
  console.log('6. After deleting personA:', weakSet1.has(personA)); // false

  // 5. Adding the same object again
  weakSet1.add(personA);
  console.log('7. Adding personA again:', weakSet1.has(personA)); // true

  // 6. Checking garbage collection
  let tempObj = { name: 'Temporary' };
  weakSet1.add(tempObj);
  console.log('8. Before nullifying tempObj:', weakSet1.has(tempObj)); // true
  tempObj = null; // Setting to null, should be garbage collected
  console.log('9. After nullifying tempObj (might still show true due to async GC):', weakSet1.has(tempObj));

  // 7. Using WeakSet in practical scenarios
  const users = new WeakSet();
  const userX = { id: 1, name: 'John' };
  const userY = { id: 2, name: 'Jane' };
  users.add(userX).add(userY);
  console.log('10. Adding users to WeakSet:', users); // WeakSet { [items unknown] }
  console.log('11. Has userX:', users.has(userX)); // true

  // 8. Removing a user
  users.delete(userY);
  console.log('12. After deleting userY:', users.has(userY)); // false

  // 9. Practical example: Tracking active users
  const activeUsers = new WeakSet();
  function login(user) {
    activeUsers.add(user);
    console.log(`13. User logged in: ${user.name}`);
  }

  function logout(user) {
    activeUsers.delete(user);
    console.log(`14. User logged out: ${user.name}`);
  }

  const userAlpha = { id: 101, name: 'Mike' };
  const userBeta = { id: 102, name: 'Sara' };

  login(userAlpha);
  login(userBeta);
  console.log('15. Is userAlpha active?', activeUsers.has(userAlpha)); // true
  console.log('16. Is userBeta active?', activeUsers.has(userBeta)); // true

  logout(userAlpha);
  console.log('17. After logout, is userAlpha active?', activeUsers.has(userAlpha)); // false

  // 10. Trying to add non-object values (should fail)
  try {
    weakSet1.add(42);
  } catch (error) {
    console.log('18. Error adding non-object to WeakSet:', error.message); // Invalid value used in weak set
  }

  try {
    weakSet1.add('hello');
  } catch (error) {
    console.log('19. Error adding string to WeakSet:', error.message); // Invalid value used in weak set
  }

  // 11. Garbage collection check after deleting object reference
  let resource = { key: 'data' };
  weakSet1.add(resource);
  console.log('20. WeakSet has resource:', weakSet1.has(resource)); // true
  resource = null; // Now eligible for garbage collection
  console.log('21. After setting resource to null (GC not guaranteed):', weakSet1.has(resource));






  console.log('-------------------------STRING QUESTIONS--------------------------');
  // 1. Creating strings
  const str1 = 'Hello, World!';
  const str2 = "JavaScript is awesome";
  const str3 = `Template literals in ES6`;
  console.log('1. Basic string:', str1); // Hello, World!
  console.log('2. Another string:', str2); // JavaScript is awesome
  console.log('3. Template literal string:', str3); // Template literals in ES6

  // 2. Length of a string
  console.log('4. Length of str1:', str1.length); // 13

  // 3. Accessing characters
  console.log('5. First character of str1:', str1[0]); // H
  console.log('6. Last character of str1:', str1[str1.length - 1]); // !
  // 14. Extracting characters
  console.log('30. Char at position 4:', str1.charAt(4)); // o
  console.log('31. Char code at position 4:', str1.charCodeAt(4)); // 111 (ASCII for 'o')


  // 4. String methods
  console.log('7. Uppercase:', str1.toUpperCase()); // HELLO, WORLD!
  console.log('8. Lowercase:', str1.toLowerCase()); // hello, world!
  console.log('9. Substring:', str1.substring(0, 5)); // Hello
  console.log('10. Slice:', str1.slice(7, 12)); // World
  console.log('11. Includes "World":', str1.includes('World')); // true
  console.log('12. Starts with "Hello":', str1.startsWith('Hello')); // true
  console.log('13. Ends with "!":', str1.endsWith('!')); // true

  // 5. Searching within strings
  console.log('14. Index of "JavaScript":', str2.indexOf('JavaScript')); // 0
  console.log('15. Last index of "a":', str2.lastIndexOf('a')); // 14
  console.log('16. Search for "awesome":', str2.search('awesome')); // 15

  // 6. String replacement
  console.log('17. Replace "Hello" with "Hi":', str1.replace('Hello', 'Hi')); // Hi, World!
  console.log('18. Replace all "o" with "0":', str1.replace(/o/g, '0')); // Hell0, W0rld!

  // 7. Trimming whitespace
  const paddedStr = '   Trim me!   ';
  console.log('19. Original length with padding:', paddedStr.length); // 15
  console.log('20. Trimmed length:', paddedStr.trim().length); // 8

  // 8. Splitting strings
  const csv = 'apple,banana,orange';
  console.log('21. Split by comma:', csv.split(',')); // ['apple', 'banana', 'orange']

  // 9. Joining strings
  const words = ['Join', 'these', 'words'];
  console.log('22. Join with space:', words.join(' ')); // Join these words

  // 10. String concatenation
  console.log('23. Concatenate with +:', 'Hello' + ', ' + 'World!'); // Hello, World!
  console.log('24. Concatenate with template literal:', `${str1} How are you?`); // Hello, World! How are you?

  // 11. Repeating strings
  console.log('25. Repeat "ha" 3 times:', 'ha'.repeat(3)); // hahaha

  // 12. String padding
  console.log('26. Pad start with zeros:', '42'.padStart(5, '0')); // 00042
  console.log('27. Pad end with stars:', 'hi'.padEnd(5, '*')); // hi***

  // 13. String comparison
  console.log('28. Compare "apple" > "banana":', 'apple' > 'banana'); // false
  console.log('29. Compare "cat" < "dog":', 'cat' < 'dog'); // true

  // 15. Escaping special characters
  const escapeStr = 'He said, "It\'s a sunny day."';
  console.log('32. Escaped string:', escapeStr); // He said, "It's a sunny day."

  // 16._________ Raw strings using String.raw
  console.log('33. Raw template literal:', String.raw`Line 1\nLine 2`); // Line 1\nLine 2

  // 17. Checking for empty strings
  console.log('34. Is empty string:', ''.length === 0); // true

  // 18. String interpolation
  const name = 'Alice';
  console.log(`35. Greeting: Hello, ${name}!`); // Hello, Alice!

  // 19. Multiline strings with template literals
  const multiLine = `Line 1
  Line 2
  Line 3`;
  console.log('36. Multiline string:', multiLine);
  // Line 1
  // Line 2
  // Line 3

  // 20. Checking for alphanumeric characters
  const alphaNumeric = 'abc123';
  const nonAlphaNumeric = '!@#';
  console.log('37. Is alphanumeric:', /^[a-zA-Z0-9]+$/.test(alphaNumeric)); // true
  console.log('38. Is non-alphanumeric:', /^[a-zA-Z0-9]+$/.test(nonAlphaNumeric)); // false

  // 21. Reversing a string (one-liner)
  const reverseStr = 'hello';
  console.log('39. Reverse string:', reverseStr.split('').reverse().join('')); // olleh

  // 22. String to number conversion
  console.log('40. Convert "42" to number:', Number('42')); // 42
  console.log('41. Parse float from "3.14abc":', parseFloat('3.14abc')); // 3.14














  console.log('----------------------REGEX QUESTIONS-----------------------------');
  /*
  \d → digit
  \s → space ____________
  \w → word character (letter, digit, underscore)
  ^ inside [] → NOT ___________
  [abc] → any of a, b, or c
  [a-z] → any lowercase letter
  [A-Z] → any uppercase letter
  [0-9] → any digit
  [a-zA-Z] → any letter
  [a-zA-Z0-9] → any letter or digit
  [a-zA-Z0-9_] → any letter, digit, or underscore
  \b → word boundary
  \B → NOT word boundary
  \d{n} → exactly n digits
  \d{n,} → at least n digits
  \d{n,m} → between n and m digits
  \D → NOT digit
  \S → NOT space
  \W → NOT word character
  \s+ → one or more spaces
  \s* → zero or more spaces
  \w+ → one or more word characters
  \w* → zero or more word characters
  \d{2,4} → between 2 and 4 digits
  \d{2,} → at least 2 digits

  g → global (all matches)
  i → ignore case
  + → one or more ___________
  * → zero or more
  
  {n} → exactly n
  () → capture group
  \1 → reference 1st capture group
  
  
  */



  // 1. Creating a simple regex pattern to match digits
  const digitPattern1 = /\d+/;
  console.log('1. Is "123" a number?', digitPattern1.test('123')); // true
  console.log('2. Is "abc" a number?', digitPattern1.test('abc')); // false

  // 8. Finding all vowels in a string
  const vowelsPattern1 = /[aeiou]/gi;
  const text1 = 'Regular expressions are powerful!';
  const vowels1 = text1.match(vowelsPattern1);
  console.log('10. Vowels found:', vowels1); // ['e', 'u', 'a', 'e', 'e', 'i', 'o', 'a', 'e', 'o', 'u', 'a']

  // 2. Matching a specific word in a string
  const wordPattern1 = /hello/i; // Case-insensitive
  console.log('3. Contains "hello"?', wordPattern1.test('Hello World')); // true

  // 7. Removing all non-alphanumeric characters
  const specialChars1 = 'Hello@123!';
  const cleanedString1 = specialChars1.replace(/[^a-zA-Z0-9]/g, ''); // 'Hello123' __________________ imp
  console.log('9. Cleaned string:', cleanedString1); // 'Hello123'

  // 3. Extracting all numbers from a string
  const extractNumbers1 = 'Order number: 12345, Tracking ID: 67890';
  const extractedNumbers1 = extractNumbers1.match(/\d+/g);
  console.log('4. Extracted numbers:', extractedNumbers1); // ['12345', '67890']

  // 4. Replacing all whitespace with a single space
  const multiSpaceString1 = 'This   is  a    test.';
  const singleSpaceString1 = multiSpaceString1.replace(/\s+/g, ' ');
  console.log('5. Replaced multiple spaces:', singleSpaceString1); // 'This is a test.'

  // 16. Extracting initials from a name
  const fullName1 = 'John Doe Smith';
  const initials1 = fullName1.match(/\b\w/g).join('');
  console.log('22. Extracted initials:', initials1); // 'JDS'



  //IGNORE BELOW -
  // 5. Validating an email address
  const emailPattern1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  console.log('6. Valid email (test@example.com)?', emailPattern1.test('test@example.com')); // true
  console.log('7. Valid email (invalid@com)?', emailPattern1.test('invalid@com')); // false

  // 6. Extracting words from a sentence
  const sentence1 = 'Hello, this is a test!';
  const extractedWords1 = sentence1.match(/\b\w+\b/g);
  console.log('8. Extracted words:', extractedWords1); // ['Hello', 'this', 'is', 'a', 'test']


  // 9. Splitting a sentence by punctuation
  const sentenceWithPunctuation1 = 'Hello! How are you? Fine, thank you.';
  const splitByPunctuation1 = sentenceWithPunctuation1.split(/[.!?]/).filter(Boolean);
  console.log('11. Split by punctuation:', splitByPunctuation1); // ['Hello', ' How are you', ' Fine, thank you']

  // 10. Validating a US phone number
  const phonePattern1 = /^\(\d{3}\) \d{3}-\d{4}$/;
  console.log('12. Valid phone number ((123) 456-7890)?', phonePattern1.test('(123) 456-7890')); // true
  console.log('13. Invalid phone number (123-456-7890)?', phonePattern1.test('123-456-7890')); // false

  // 11. Checking for a hex color code
  const hexPattern1 = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;
  console.log('14. Valid hex (#FFA07A)?', hexPattern1.test('#FFA07A')); // true
  console.log('15. Valid hex (FFF)?', hexPattern1.test('FFF')); // true
  console.log('16. Invalid hex (#GGG)?', hexPattern1.test('#GGG')); // false

  // 12. Finding dates in a string (MM/DD/YYYY)
  const datePattern1 = /\b\d{2}\/\d{2}\/\d{4}\b/g;
  const dates1 = 'Birthdays: 01/02/1990, 03/04/2020';
  const foundDates1 = dates1.match(datePattern1);
  console.log('17. Extracted dates:', foundDates1); // ['01/02/1990', '03/04/2020']

  // 13. Checking for repeated words
  const repeatedPattern1 = /\b(\w+)\s+\1\b/i;
  console.log('18. Repeated word ("hello hello")?', repeatedPattern1.test('hello hello')); // true
  console.log('19. No repeated word ("hello world")?', repeatedPattern1.test('hello world')); // false

  // 14. Removing HTML tags
  const htmlString1 = '<p>Hello <b>world</b>!</p>';
  const strippedText1 = htmlString1.replace(/<[^>]*>/g, '');
  console.log('20. Text without HTML:', strippedText1); // 'Hello world!'

  // 15. Matching a URL pattern
  const urlPattern1 = /https?:\/\/(www\.)?[a-z0-9.-]+\.[a-z]{2,}/gi;
  const urls1 = 'Visit us at https://example.com and http://test.org.';
  const matchedUrls1 = urls1.match(urlPattern1);
  console.log('21. Matched URLs:', matchedUrls1); // ['https://example.com', 'http://test.org']

  // 17. Password validation (8+ characters, at least 1 letter and 1 number)
  const passwordPattern1 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  console.log('23. Valid password (Abc12345)?', passwordPattern1.test('Abc12345')); // true
  console.log('24. Invalid password (abc123)?', passwordPattern1.test('abc123')); // false

  // 18. Matching a currency format
  const currencyPattern1 = /^\$\d+(,\d{3})*(\.\d{2})?$/;
  console.log('25. Valid currency ($1,234.56)?', currencyPattern1.test('$1,234.56')); // true
  console.log('26. Invalid currency (1234.56)?', currencyPattern1.test('1234.56')); // false

  // 19. Finding repeated characters
  const repeatedCharPattern1 = /(.)\1+/g;
  const repeatedChars1 = 'baalloon'.match(repeatedCharPattern1);
  console.log('27. Repeated characters:', repeatedChars1); // ['aa', 'll', 'oo']

  // 20. Validating an IP address (IPv4)
  const ipPattern1 = /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
  console.log('28. Valid IP (192.168.1.1)?', ipPattern1.test('192.168.1.1')); // true
  console.log('29. Invalid IP (256.256.256.256)?', ipPattern1.test('256.256.256.256')); // false

  //getWords: get words from string
  const str = '!@#!HEllo!!!@#4hello,  (((*world! (* 9*)*)(! ^%$^%$% test &^$#^$^% tree';
  const output = ['hello', 'world', 'test', 'tree'];
  const getWords = (str: string) => {
    const regex = /[a-zA-Z]+/g;
    const arr: string[] | null = str.match(regex);
    return arr ? arr.map((item) => item.toLowerCase()) : [];
  }
  console.log('getWords: ', getWords(str)); //NOTE : get words from string








  console.log('----------------------SYMBOL QUESTIONS-----------------------------');

  // 1. Creating simple symbols
  const symbolA = Symbol();
  const symbolB = Symbol();
  console.log('1. Are symbolA and symbolB equal?', symbolA === symbolB); // false

  // 2. Creating symbols with descriptions
  const symbolC = Symbol('unique');
  const symbolD = Symbol('unique');
  console.log('2. Are symbolC and symbolD equal?', symbolC === symbolD); // false
  console.log('3. SymbolC description:', symbolC.description); // 'unique'

  // 3. Using symbols as object keys
  const uniqueKey1 = Symbol('id');
  const uniqueKey2 = Symbol('id');
  const objSymbol = {
    [uniqueKey1]: 'Value 1',
    [uniqueKey2]: 'Value 2'
  };
  console.log('4. Object with symbol keys:', objSymbol);
  console.log('5. Accessing value with uniqueKey1:', objSymbol[uniqueKey1]); // 'Value 1'
  console.log('6. Accessing value with uniqueKey2:', objSymbol[uniqueKey2]); // 'Value 2'

  // 4. Symbols as constant identifiers
  const COLOR_RED = Symbol('red');
  const COLOR_BLUE = Symbol('blue');
  console.log('7. Are COLOR_RED and COLOR_BLUE equal?', COLOR_RED === COLOR_BLUE); // false

  // 5. Using global symbol registry
  const globalSymbol1 = Symbol.for('shared');
  const globalSymbol2 = Symbol.for('shared');
  console.log('8. Are globalSymbol1 and globalSymbol2 equal?', globalSymbol1 === globalSymbol2); // true
  console.log('9. Key of globalSymbol1:', Symbol.keyFor(globalSymbol1)); // 'shared'

  // 6. Checking symbol property existence
  const checkSymbol = Symbol('check');
  const symbolObject = { [checkSymbol]: 'Check this' };
  console.log('10. Has checkSymbol?', checkSymbol in symbolObject); // true

  // 7. Iterating over symbol properties (using Reflect)
  const hiddenSymbol1 = Symbol('hidden1');
  const hiddenSymbol2 = Symbol('hidden2');
  const secretObject = {
    [hiddenSymbol1]: 'Secret 1',
    [hiddenSymbol2]: 'Secret 2',
    normalKey: 'Visible'
  };
  console.log('11. Object keys (Symbol not shown):', Object.keys(secretObject)); // ['normalKey']
  console.log('12. Symbol keys (using Reflect.ownKeys):', Reflect.ownKeys(secretObject)); // [Symbol(hidden1), Symbol(hidden2), 'normalKey']

  // 8. Symbol in JSON (not serialized)
  const symbolJSON = { [Symbol('json')]: 'hidden', visible: 'shown' };
  console.log('13. JSON stringify (symbol excluded):', JSON.stringify(symbolJSON)); // {"visible":"shown"}

  // 9. Symbol with computed property names
  const computedSymbol = Symbol('computed');
  const computedObject = {
    [computedSymbol]: () => 'Computed method'
  };
  console.log('14. Call computed symbol method:', computedObject[computedSymbol]()); // 'Computed method'

  // 10. Unique symbols for private members
  const privateName = Symbol('name');
  class PersonWithSymbol {
    constructor(name) {
      this[privateName] = name;
    }
    getName() {
      return this[privateName];
    }
  }
  const personWithSymbol = new PersonWithSymbol('John');
  console.log('15. Private name using symbol:', personWithSymbol.getName()); // 'John'

  // 11. Using Symbol.toStringTag for custom object representation
  const customObj = {
    [Symbol.toStringTag]: 'CustomObject'
  };
  console.log('16. toStringTag of customObj:', Object.prototype.toString.call(customObj)); // '[object CustomObject]'

  // 12. Symbol for custom iterator
  const iteratorSymbol = Symbol.iterator;
  const iterableObject = {
    items: [1, 2, 3],
    [iteratorSymbol]() {
      let index = 0;
      return {
        next: () => ({
          value: this.items[index++],
          done: index > this.items.length
        })
      };
    }
  };
  for (const item of iterableObject) {
    console.log('17. Iterating using Symbol.iterator:', item); // 1, 2, 3
  }

  // 13. Symbol as a metadata key
  const metaSymbol = Symbol('meta');
  const metaObject = { [metaSymbol]: { version: 1.0, author: 'Alice' } };
  console.log('18. Accessing metadata:', metaObject[metaSymbol]); // { version: 1.0, author: 'Alice' }

  // 14. Using Symbol.replace to customize string replacement
  const customReplaceSymbol = {
    [Symbol.replace](str) {
      return str.replace(/world/g, 'Symbol');
    }
  };
  console.log('19. Using Symbol.replace:', 'Hello world'.replace(customReplaceSymbol)); // 'Hello Symbol'

  // 15. Using Symbol.toPrimitive for custom conversion
  const primitiveSymbol = {
    [Symbol.toPrimitive](hint) {
      return hint === 'string' ? 'Primitive Symbol' : 42;
    }
  };
  console.log('20. Symbol to primitive (string):', `${primitiveSymbol}`); // 'Primitive Symbol'
  console.log('21. Symbol to primitive (number):', +primitiveSymbol); // 42

  // 16. Using Symbol.species for derived class instantiation
  class CustomArray extends Array {
    static get [Symbol.species]() {
      return Array;
    }
  }
  const derivedArray = new CustomArray(1, 2, 3).map(x => x * 2);
  console.log('22. Custom array using Symbol.species:', derivedArray instanceof CustomArray); // false
  console.log('23. Is derivedArray an instance of Array?', derivedArray instanceof Array); // true

  // 17. Using Symbol.match for custom string matching
  const matchSymbol = {
    [Symbol.match]: (str) => str.includes('symbol')
  };
  console.log('24. Using Symbol.match:', 'This is a symbol test'.match(matchSymbol)); // true

  // 18. Symbol.isConcatSpreadable for flattening arrays
  const spreadSymbol = [1, 2];
  spreadSymbol[Symbol.isConcatSpreadable] = false;
  console.log('25. Non-spreadable array:', [].concat(spreadSymbol)); // [[1, 2]]

  // 19. Symbol.unscopables for excluding properties from 'with' statements
  const unscopablesObj = {
    foo: 1,
    bar: 2,
    [Symbol.unscopables]: { bar: true }
  };
  console.log('26. Access foo directly:', unscopablesObj.foo); // 1
  if (!unscopablesObj[Symbol.unscopables]?.bar) {
    console.log('27. Access bar directly:', unscopablesObj.bar); // 2
  } else {
    console.log('27. Accessing bar is excluded by Symbol.unscopables');
  }

  // 20. Checking symbol types
  console.log('28. Type of symbolA:', typeof symbolA); // 'symbol'
  console.log('29. Type of symbolC:', typeof symbolC); // 'symbol'









  console.log('----------------------DATE QUESTIONS-----------------------------');

  // 1. Creating a new Date object for the current date and time
  const now = new Date();
  console.log('1. Current date and time:', now); // Example: Mon Apr 08 2025 10:22:36 GMT+0000 (UTC)

  // 2. Creating a Date object for a specific date
  const specificDate = new Date(2025, 3, 8); // Month is zero-indexed (3 = April)
  console.log('2. Specific date:', specificDate); // Example: Tue Apr 08 2025 00:00:00 GMT+0000 (UTC)

  // 3. Creating a Date from a timestamp
  const timestampDate = new Date(0); // Unix epoch time
  console.log('3. Date from timestamp (0):', timestampDate); // Thu Jan 01 1970 00:00:00 GMT+0000 (UTC)

  // 4. Getting individual date components
  console.log('4. Year:', now.getFullYear()); // Example: 2025
  console.log('5. Month:', now.getMonth()); // Example: 3 (April)
  console.log('6. Day of the month:', now.getDate()); // Example: 8
  console.log('7. Day of the week:', now.getDay()); // Example: 2 (Tuesday)
  console.log('8. Hours:', now.getHours()); // Example: 10
  console.log('9. Minutes:', now.getMinutes()); // Example: 22
  console.log('10. Seconds:', now.getSeconds()); // Example: 36

  // 5. Formatting dates as strings
  console.log('11. toDateString:', now.toDateString()); // Example: Tue Apr 08 2025
  console.log('12. toISOString:', now.toISOString()); // Example: 2025-04-08T10:22:36.000Z
  console.log('13. toLocaleString:', now.toLocaleString()); // Example: 4/8/2025, 10:22:36 AM

  // 6. Calculating time differences
  const pastDate = new Date(2020, 3, 8);
  const timeDifference = now - pastDate; // Difference in milliseconds
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  console.log('14. Days between dates:', Math.floor(daysDifference)); // Example: 1826

  // 7. Comparing dates
  const date1 = new Date(2025, 3, 8);
  const date2 = new Date(2025, 3, 9);
  console.log('15. date1 is earlier than date2:', date1 < date2); // true

  // 8. Setting date components
  now.setFullYear(2030);
  console.log('16. Updated year:', now.getFullYear()); // 2030

  // 9. Parsing date strings
  const parsedDate = Date.parse("2025-04-08T10:22:36Z");
  console.log('17. Parsed date from string:', new Date(parsedDate)); // Tue Apr 08 2025 10:22:36 GMT+0000 (UTC)

  // 10. Using Date.now() to get the current timestamp
  const currentTimestamp = Date.now();
  console.log('18. Current timestamp:', currentTimestamp); // Example: 1744009356000

  // 11. Adding days to the current date
  const futureDate = new Date();
  futureDate.setDate(now.getDate() + 10);
  console.log('19. Date after 10 days:', futureDate.toDateString()); // Example: Fri Apr 18 2025

  // 12. Getting UTC date and time
  console.log('20. UTC Year:', now.getUTCFullYear()); // Example: 2025
  console.log('21. UTC Month:', now.getUTCMonth()); // Example: 3
  console.log('22. UTC Day of the month:', now.getUTCDate()); // Example: 8









  console.log('----------------------PROMISE QUESTIONS-----------------------------');

  // 1. Creating a simple resolved promise
  const resolvedPromise = Promise.resolve('Success');
  resolvedPromise.then(result => console.log('1. Resolved:', result)); // Success

  // 2. Creating a simple rejected promise
  const rejectedPromise = Promise.reject('Error');
  rejectedPromise.catch(error => console.log('2. Rejected:', error)); // Error

  // 3. Creating a new promise with setTimeout
  const delayedPromise = new Promise((resolve) => {
    setTimeout(() => resolve('Delayed Result'), 1000);
  });
  delayedPromise.then(result => console.log('3. Delayed:', result)); // Delayed Result after 1 second

  // 4. Using async/await with a promise
  async function asyncExample() {
    const result = await resolvedPromise;
    console.log('4. Async/Await result:', result); // Success
  }
  asyncExample();

  // 5. Chaining promises
  Promise.resolve(5)
    .then(value => value * 2) // 10
    .then(value => value + 3) // 13
    .then(value => console.log('5. Chained result:', value)); // 13

  // 6. Using Promise.all to wait for multiple promises
  const p1 = Promise.resolve(1);
  const p2 = Promise.resolve(2);
  const p3 = Promise.resolve(3);
  Promise.all([p1, p2, p3]).then(results => console.log('6. Promise.all results:', results)); // [1, 2, 3]

  // 7. Using Promise.race to get the first resolved promise
  const slowPromise = new Promise(resolve => setTimeout(() => resolve('Slow'), 1000));
  const fastPromise = new Promise(resolve => setTimeout(() => resolve('Fast'), 500));
  Promise.race([slowPromise, fastPromise]).then(result => console.log('7. Promise.race result:', result)); // Fast

  // 8. Using Promise.allSettled to get both resolved and rejected results
  const allSettledPromises = Promise.allSettled([resolvedPromise, rejectedPromise]);
  allSettledPromises.then(results => console.log('8. Promise.allSettled:', results));

  // 9. Using Promise.any to get the first fulfilled promise
  const anyPromises = Promise.any([rejectedPromise, fastPromise]);
  anyPromises.then(result => console.log('9. Promise.any result:', result)); // Fast

  // 10. Catching errors in promise chains
  Promise.resolve(10)
    .then(value => { throw new Error('Oops'); })
    .catch(error => console.log('10. Caught error:', error.message)); // Oops

  // 11. Handling rejection in async/await
  async function handleRejection() {
    try {
      await rejectedPromise;
    } catch (error) {
      console.log('11. Caught in async/await:', error); // Error
    }
  }
  handleRejection();

  // 12. Creating a promise with reject on condition
  function checkNumber(num) {
    return new Promise((resolve, reject) => {
      if (num > 0) resolve('Positive', num);
      else reject('Non-positive', num);
    });
  }
  checkNumber(5).then(console.log).catch(console.error); // Positive
  checkNumber(-1).then(console.log).catch(console.error); // Non-positive
  /*
  Missing Data Types and Constructs:
    1.	Typed Arrays (like Int8Array, Uint8Array, etc.)
    2.	BigInt (you did include this, but its usage could be extended)
    3.	Date (an object type that represents dates and times)
    4.	Error Objects (like Error, TypeError, SyntaxError)
    5.	Proxy and Reflect (advanced object manipulation and meta-programming)
    6.	Atomics and SharedArrayBuffer (for low-level concurrency)
    7.	Generator and Async Generator Functions (for iterable asynchronous operations)
    8.	Promise (for handling asynchronous operations)
    9.	Intl (for internationalization and localization)
  */

  return (
    <>
      <GoBackToHome />
      <div>
        <h1>ES6 Object Features</h1>
        <p>{person.name}</p>
        <p>{person.age}</p>
        <button type="button" onClick={person.greet.bind(person)}>Greet</button>
        <button type="button" onClick={person.greetArrow}>Greet Arrow</button>
        <button type="button" onClick={person.greetRegular.bind(person)}>Greet Regular</button>
        <button type="button" onClick={person.greetWithDefault.bind(person)}>Greet with Default</button>
        <button type="button" onClick={person.greetWithRest.bind(person, 'Hi', 'Hello', 'Hey')}>Greet with Rest</button>
        <button type="button" onClick={person.greetWithSpread.bind(person, 'Hi', 'Hello', 'Hey')}>Greet with Spread</button>
      </div>
      <div>
        <h1>ES6 Array Features</h1>
        <p>{doubledNumbers.join(', ')}</p>
        <p>{filteredNumbers.join(', ')}</p>
        <p>{sum}</p>
      </div>
    </>
  );
};