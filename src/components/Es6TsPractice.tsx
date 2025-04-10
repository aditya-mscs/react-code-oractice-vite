// @ts-nocheck Temporary ignore
//DONT USE TYPESCRIPT. USE PLAIN JAVASCRIPT
import GoBackToHome from "./GoBacktoHome";

export const Es6TsPractice = () => {


  //------------------- 6 RECURSION QUESTIONS ------------------
  //Find factorial
  const factorial = (n: number): number => {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  console.log('6.1 factorial(5): ', factorial(5)); // Outputs: 120


  //Find Fibonacci
  //NOTE : Fibonacci series is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.
  const fibonacci = (n: number): number => {
    if (n === 0 || n === 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  console.log('6.2 fibonacci(5): ', fibonacci(5)); // Outputs: 5

  //Find GCD (Greatest Common Divisor)
  //NOTE : GCD is the largest positive integer that divides all the given numbers without leaving a remainder.
  const gcd = (a, b) => { //-------------> REUSE FOR NEXT 4
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b); //gcd(48, 18) -> gcd(18, 48 % 18) = gcd(18, 12) = gcd(12, 6) = gcd(6, 0) = 6 --> REMEMBER THIS
  }
  console.log('6.3 gcd(48, 18): ', gcd(48, 18)); // Outputs: 6

  //GCD of an array - dont use rdeuce
  const gcdOfArray = (arr) => {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result = gcd(result, arr[i]);
    }
    return result;
    //OR return arr.reduce((acc, curr) => gcd(acc, curr));
  }
  console.log('6.3 gcdOfArray([48, 18, 30]): ', gcdOfArray([48, 18, 30])); // Outputs: 6
  console.log('6.3 gcdOfArray([48, 18, 30, 12]): ', gcdOfArray([48, 18, 30, 12, 56])); // Outputs: 2

  //Find LCM (Least Common Multiple)
  //NOTE : LCM is the smallest positive integer that is divisible by all the given numbers.
  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);  //------------->  a * b / GCD = LCM
  }
  console.log('6.4 lcm(4, 5): ', lcm(4, 5)); // Outputs: 20
  console.log('6.4 lcm(4, 6): ', lcm(4, 6)); // Outputs: 12

  //LCM of an array - dont use lcm
  const lcmOfArray = (arr) => {
    const lcm = (a, b) => {
      return (a * b) / gcd(a, b);
    }
    return arr.reduce((acc, curr) => lcm(acc, curr), 1);
  }
  console.log('6.5 lcmOfArray([4, 5, 6]): ', lcmOfArray([4, 5, 6])); // Outputs: 60

  //


  //------------------- 1 STRING QUESTIONS ------------------




  const isParenBalanced = (str: string): boolean => {
    const stack: string[] = [];
    const map = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      // console.log(char, '-->', map[char]);
      //if opening bracket, push to stack
      if (!map[char]) {
        stack.push(char); // ( ---> 1{2(
        console.log("pushing to stack", char, stack);
      }
      //else pop and check if matching bracket or not
      else {
        const lastChar = stack.pop();
        console.log("popping from stack", map[char], lastChar, stack);
        if (map[char] !== lastChar) {
          console.log('NOT GOOD. Return false');
          return false;
        }
      }
    }
    return stack.length === 0; // --------> dont return true. Make sure stack is empty
  };
  console.log('5 isParenBalanced: ', isParenBalanced("()")); // Outputs: true
  console.log('5 isParenBalanced: ', isParenBalanced("({[)}")); // Outputs: false
  console.log('5 isParenBalanced: ', isParenBalanced(")()[]{}")); // Outputs: false

  //Reverse the string
  const str = 'hello world';
  const reverseString = (str: string) => {
    return str.split('').reverse().join('');
  }
  console.log('1 reverseString: ', reverseString(str)); // 'dlrow olleh'

  //Reverse the string without using built-in functions
  const reverseStringWithoutBuiltIn = (str: string) => {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  console.log('2 reverseStringWithoutBuiltIn: ', reverseStringWithoutBuiltIn(str)); // 'dlrow olleh'

  //Reverse the string using recursion
  const reverseStringRecursion = (str: string): string => {
    if (str === '') {
      return '';
    } else {
      return reverseStringRecursion(str.substr(1)) + str.charAt(0);
    }
  }
  console.log('3 reverseStringRecursion: ', reverseStringRecursion(str)); // 'dlrow olleh'

  //Reverse the string using stack
  function reverseStringStack(inputString: string): string {
    const stack = inputString.split('');
    let reversedString = '';
    while (stack.length > 0) {
      reversedString += stack.pop();
    }
    return reversedString;
  }
  console.log('4 reverseStringStack: ', reverseStringStack('HELLO')); // Outputs: OLLEH




  //Check if the string is a palindrome
  const isPalindrome = (str: string) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  console.log(isPalindrome('racecar')); // true
  console.log(isPalindrome('hello')); // false




  //NOTE : Find the number of occurrences of each string in an array
  const strings = ['hello', 'hello', 'world', 'test', 'tree', 'hello'];
  const queries = ['hello', 'world', 'waitWhat'];  //output = [3, 1, 0]
  function matchingStrings(strings: string[], queries: string[]): number[] {
    // Write your code here
    const result: number[] = [];
    queries.forEach((query) => {

      let count = 0;
      strings.forEach((string) => {
        if (string === query) {
          count++;
        }
      });
      result.push(count);

    });
    return result;
  }
  console.log(matchingStrings(strings, queries)); // [3, 1, 0]





  //------------------- 2 ARRAY QUESTIONS ------------------
  //---> break helps us exit the current loop, while continue helps us skip the current iteration and move to the next one.
  const array = [
    ["Apt 101", "Apt 102", "Apt 103"],
    ["Apt 201", "Exit Floor", "Apt 203"],
    ["Apt 301", "Apt 302", "Apt 303"]
  ];
  // Break in nested loop
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === "Exit Floor") {
        break;
      }
      console.log('6: ', array[i][j] + ", ");
    }
    console.log();
  }
  // Outputs:
  // Apt 101, 
  // Apt 102, 
  // Apt 103, 
  //
  // Apt 201,  ---> break 201
  //
  // Apt 301, 
  // Apt 302, 
  // Apt 303, 

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === "Exit Floor") {
        continue;
      }
      console.log(array[i][j] + ", ");
    }
    console.log();
  }
  // Outputs:
  // Apt 101, 
  // Apt 102, 
  // Apt 103, 
  //
  // Apt 201,  --> continue 201, 203
  // Apt 203, 
  //
  // Apt 301, 
  // Apt 302, 
  // Apt 303, 
  function returnA(arr) {
    // Break in nested loop
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === "Exit Floor") {
          return;
        }
        console.log(arr[i][j] + ", ");
      }
      console.log();
    }
  }
  returnA(array);
  // Apt 101,
  // Apt 102,
  // Apt 103,
  // Apt 201, ---> return returns from function itself


  /*
  There are N empty glasses with a capacity of 1, 2, …, N liters (there is exactly one glass of each unique capacity).
  You want to pour exactly K liters of water into glasses.
  Each glass may be either full or empty (a glass cannot be partially filled).
  What is the minimum number of glasses that you need to contain K liters of water?

  1.	Input: N = 5, K = 8
Output: 2
Explanation: Use glasses with capacity 3 and 5.
  2.	Input: N = 4, K = 10
Output: 4
Explanation: Use all glasses (1 + 2 + 3 + 4 = 10).
  */
  function dfsSolution(N, K) {
    const capacities = Array.from({ length: N }, (_, i) => i + 1); // [1, 2, ..., N]
    let result = Infinity;

    function dfs(index, remaining, used) {
      if (remaining === 0) {
        result = Math.min(result, used);
        return;
      }
      if (remaining < 0 || index === N) return;

      dfs(index + 1, remaining - capacities[index], used + 1); // include
      dfs(index + 1, remaining, used); // exclude
    }

    dfs(0, K, 0);
    return result === Infinity ? -1 : result;
  }
  console.log('7: dfsSolution(5, 8): ', dfsSolution(5, 8)); // 2 --> 5,3
  console.log('7: dfsSolution(4, 10): ', dfsSolution(4, 10)); // 4 --> 1,2,3,4
  console.log('7: dfsSolution(4, 11): ', dfsSolution(4, 11)); // -1 --> 1,2,3,4 still 1 left
  console.log('7: dfsSolution(20, 60): ', dfsSolution(20, 60)); // 6 --> 20,19,18,3
  console.log('7: dfsSolution(20, 100): ', dfsSolution(20, 100)); // 14 --> 20,19,18,17,16,15,14,13,12,11,10,9,8,7


  return (
    <div>
      <GoBackToHome />
      <h1> ES6 and TypeScript Practice</ h1>

    </div>
  )
}