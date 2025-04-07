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
  console.log(typeof Symbol("id")); // symbol
  console.log(typeof 123456789n);   // bigint

  // Non-primitive data types
  console.log(typeof {});           // object
  console.log(typeof []);           // object
  console.log(typeof function () { }); // function
  console.log(typeof new Map());    // object
  console.log(typeof new Set());    // object
  console.log(typeof new WeakMap());// object
  console.log(typeof new WeakSet());// object






  console.log('------------------------OBJECT---------------------------');
  //ES6 object features
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

  //Loop within object
  const getObjectProps = (obj: object) => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const entries = Object.entries(obj);
    console.log('keys:', keys);
    console.log('values:', values);
    console.log('entries:', entries);
  }
  getObjectProps(person);
  //NOTE : Object.keys() returns an array of the object's own enumerable property names
  //NOTE : Object.values() returns an array of the object's own enumerable property values

  Object.keys(person).forEach((key) => {
    //console.log(`${key}: ${person[key]}`); //NOTE : key is of type string, so we need to use keyof to access the value
  });







  console.log('-------------------------ARRAY--------------------------');
  //ES6 array features
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = numbers.map(num => num * 2);
  const filteredNumbers = numbers.filter(num => num > 2);
  const sum = numbers.reduce((total, num) => total + num, 0); //NOTE: first param is acc/total and second param is indiviual number. second param 0 is initialValue








  console.log('-----------------------SET----------------------------');
  //Set --> new Set(), .add(X), .has(X), .delete(X), .clear(), .size
  //NOTE : Set is an collection of ______ unique values, meaning it can only contain one instance of each value
  //NOTE : Set is an NOT iterable, so we canNOT use forEach, map, filter, reduce, etc. on it
  //NOTE : Set is not an object or array, so we can't use its methods on it
  const set = new Set([4, 5, 2, 3]);
  set.add(1);
  set.add(2);
  set.add(2);
  set.add(3);
  console.log(set); // Set(5) { 4, 5, 2, 3, 1 }
  set.delete(1);
  console.log(set.has(1)); // false
  console.log(set, 'Size: ', set.size); // Set(4) { 4, 5, 2, 3 } Size:  4
  set.forEach((value) => {
    console.log(value);
  });

  const newSet = set; //NOTE: set will also delete 2
  newSet.delete(2);
  console.log(set, newSet); //Set(4) { 4, 5, 3, 1 } Set(4) { 4, 5, 3, 1 }

  const newSet2 = new Set(set); //NOTE : set will not delete 3
  newSet2.delete(3);
  console.log(set, newSet2); //Set(4) { 4, 5, 3, 1 } Set(4) { 4, 5, 1 }
  set.clear();

  //NOTE : Set has no index, so we can't access it like an array
  //NOTE : Set has no length property, so we can't use it like an array

  //Set methods





  console.log('----------------------MAP-----------------------------');
  //MAP --> new Map(), .set(key, value), .has(key), .get(key), .delete(key), .clear(), .size
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



  // Find duplicates in an array
  const temp = [1, 2, 2, 3, 4, 4, 5]
  const getDuplicates = (arr: number[]) => {
    const newArr: number[] = [];
    const map = new Map();
    arr.forEach((item) => {
      if (map.has(item)) {
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







  console.log('----------------------WEAKMAP-----------------------------');
  const weakMap = new WeakMap();
  //WeakMap -> new WeakMap(), .set(key, value), .has(key), .get(key), .delete(key)
  //NOTE : WeakMap is an collection of ______ key-value pairs with unique keys, but the keys must be objects
  //Use: to store private data for an object
  weakMap.set({ name: 'John' }, 'Hello');
  console.log(weakMap); // WeakMap(1) { { name: 'John' } => 'Hello' }
  console.log(weakMap.get({ name: 'John' })); // --------> undefined because the key is not the same object

  //Practical example of WeakMap
  const weakMap2 = new WeakMap();
  const obj1 = { name: 'John' };
  weakMap2.set(obj1, 'Hello');
  console.log(weakMap2.get(obj1)); // Hello
  weakMap2.set(obj1, 'Hi');
  console.log(weakMap2.get(obj1)); // Hi //----------> Hi because same object as key ie obj1





  console.log('----------------------WEAKSET-----------------------------');
  //WeakSet -> new WeakSet(), .add(value), .has(value), .delete(value)
  //NOTE : WeakSet is an collection of ______ unique values, but the values must be objects
  const weakSet = new WeakSet();
  const obj2 = { name: 'John' };
  weakSet.add(obj2);
  console.log(weakSet); // WeakSet(1) { { name: 'John' } }
  console.log(weakSet.has(obj2)); // true
  weakSet.delete(obj2);
  console.log(weakSet.has(obj2)); // false
  





  console.log('-------------------------STRING--------------------------');
  //ES6 String features
  const str = '!@#!HEllo!!!@#4hello,  (((*world! (* 9*)*)(! ^%$^%$% test &^$#^$^% tree';
  const output = ['hello', 'world', 'test', 'tree'];

  const getWords = (str: string) => {
    const regex = /[a-zA-Z]+/g;
    const arr: string[] | null = str.match(regex);
    return arr ? arr.map((item) => item.toLowerCase()) : [];
  }
  console.log(getWords(str)); //NOTE : get words from string






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