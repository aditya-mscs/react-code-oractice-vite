import GoBackToHome from "./GoBacktoHome";


export const ES6 = () => {

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
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  
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