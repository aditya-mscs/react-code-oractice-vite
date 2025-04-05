import GoBackToHome from "./GoBacktoHome";


export const ES6 = () => {
  //Data types
  // Primitive types
  console.log(typeof 25);           // number
  console.log(typeof "John");       // string
  console.log(typeof true);         // boolean
  console.log(typeof undefined);    // undefined
  console.log(typeof null);         // object (quirk)
  console.log(typeof Symbol("id")); // symbol
  console.log(typeof 123456789n);   // bigint

  // Non-primitive types
  console.log(typeof {});           // object
  console.log(typeof []);           // object
  console.log(typeof function(){}); // function
  console.log(typeof new Map());    // object
  console.log(typeof new Set());    // object
  console.log(typeof new WeakMap());// object
  console.log(typeof new WeakSet());// object

  //ES6 object features
  const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
  };

  //ES6 array features
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = numbers.map(num => num * 2);
  const filteredNumbers = numbers.filter(num => num > 2);
  const sum = numbers.reduce((total, num) => total + num, 0); //NOTE: first param is acc/total and second param is indiviual number. second param 0 is initialValue
  
  return (
    <>
      <GoBackToHome />
      <div>
        <h1>ES6 Object Features</h1>
        <p>{person.name}</p>
        <p>{person.age}</p>
        <button type="button" onClick={person.greet.bind(person)}>Greet</button>
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