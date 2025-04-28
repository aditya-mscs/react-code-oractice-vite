// @ts-nocheck Temporary ignore
//DONT USE TYPESCRIPT. USE PLAIN JAVASCRIPT
import GoBackToHome from "../components/GoBacktoHome";

export const Es6TsPractice = () => {
  /*
  Hands-On/Algorithmic Technical Interview
    https://www.geeksforgeeks.org/top-10-algorithms-in-interview-questions/
  Design focused Technical Interview
    https://github.com/mutablealligator/system-design-primer#system-design-topics-start-here
  
  1. Array Algorithm
  Maximum Subarray Sum
  Find the Missing Number
  Trapping Rain Water
  Maximum Product Subarray
  Find the equilibrium index of an array
  Leaders in an array
  Minimum Platforms Required for a Railway/Bus Station
  Rotate an array to the right by k steps
  Kth smallest/largest element in an array
  Maximum Length Bitonic Subarray
  
  2. String Algorithm
  Longest Palindromic Substring
  String Matching with Wildcard
  Edit Distance
  Longest Repeating Subsequence
  Count all distinct substrings of a given string
  Reverse words in a given string
  Check if a string is a rotated palindrome
  KMP Algorithm for Pattern Searching
  Minimum characters to be added at front to make string palindrome
  
  5. Recursion/Backtracking Algorithm
  N-Queens Problem
  Sudoku Solver
  Rat in a Maze
  Word Break Problem using Backtracking
  Subset Sum Problem
  Permutations of a given string
  Combination Sum
  Generate all possible valid IP addresses from given string
  Rat in a Maze with multiple steps or jump allowed
  
  6. Greedy Algorithm
  Fractional Knapsack
  Huffman Coding
  Job Sequencing with Deadlines
  Activity Selection Problem
  Greedy Algorithm to find Minimum number of Coins
  Minimum Number of Platforms Required for a Railway/Bus Station
  Maximum Length Chain of Pairs
  Minimize Cash Flow among a given set of friends who have borrowed money from each other
  Connect n Ropes with Minimum Cost
  Prim’s Minimum Spanning Tree (MST)
  
  8. Dynamic Programming Algorithm
  Longest Common Subsequence
  0/1 Knapsack
  Matrix Chain Multiplication
  Longest Increasing Subsequence
  Maximum Sum Increasing Subsequence
  Coin Change Problem
  Longest Palindromic Subsequence
  Edit Distance
  Largest Sum Contiguous Subarray
  Longest Common Substring
  
  10. Bit Manipulation Algorithm
  Find the Only Non-Repeating Element
  Count Total Set Bits
  Maximum XOR of Two Numbers in an Array
  Find the two non-repeating elements in an array of repeating elements
  Check if a number is sparse or not
  Count total set bits in all numbers from 1 to n
  Maximum subarray XOR in a given array
  Sum of XOR of all subarrays
  Find the element that appears once in an array where every other element appears twice
  Program to find whether a no is power of two
  */





  //------------------- 6 RECURSION QUESTIONS/number questions ------------------

  //Regard interview question:
  const medication_to_ingredients = {
    "Advil": ["Ibuprofen"],
    "Advil Cold": ["Advil", "Phenylephrine"],
    "Advil Cold Plus": ["Advil Cold", "Caffeine"],
    "Tylenol": ["Acetaminophen"],
    "DayQuil": ["Acetaminophen", "Phenylephrine"],
    "NyQuil": ["Acetaminophen", "Doxylamine"],
    "Claritin": ["Loratadine"],
  }
  function getIngredients(input, str) {
    const result = [];
    // console.log('Hello, World', str);
    Object.keys(input).forEach(key => {
      // console.log(key, input[key].indexOf(str));
      //Search value
      if (input[key].indexOf(str) > -1) {
        result.push(key);
        result.push(getIngredients(input, key));
      }
    });
    // console.log(result.flat(Infinity));
    return result.flat(Infinity);
  }
  console.log('6.5 getIngredients: Loratadine', getIngredients(medication_to_ingredients, 'Loratadine'));
  console.log('6.5 getIngredients: Acetaminophen', getIngredients(medication_to_ingredients, 'Acetaminophen')); //['Tylenol', 'DayQuil', 'NyQuil']
  console.log('6.5 getIngredients: Ibuprofen', getIngredients(medication_to_ingredients, 'Ibuprofen'));//['Advil', 'Advil Cold', 'Advil Cold Plus']
  console.log('6.5 getIngredients: Advil Cold', getIngredients(medication_to_ingredients, 'Advil Cold'));//['Advil Cold Plus']



  //toLocaleString
  //The first parameter (undefined in this case) specifies the locale. If undefined, it defaults to the user's locale.
  const formatMoney = (amount) => {
    return '$' + amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  console.log('6.4 formatMoney: ', formatMoney(1234567)); // Outputs: $1,234,567.00

  //Math.random() method returns a random floating-point number between 0 (inclusive) and 1 (exclusive)
  //so we need to multiply it by the difference between max and min, and then add min to ensure that the random integer is within the specified range.
  const randomInRange = (min, max) => {
    return Math.floor(Math.random(min, max) * (max - min) + min);
  }
  console.log('6.3 randomInRange: ', randomInRange(1, 10)); // Outputs: 5

  //Leap year -
  // •	divisible by 4 and
  // •	(not divisible by 100 or divisible by 400)
  const isLeapYear = year => {
    // ________ Leap year if divisible by 4 and (not by 100 or by 400)
    return year > 0 && (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
  };
  console.log('6.2 isLeapYear: ', isLeapYear(100)); // Outputs: false
  console.log('6.2 isLeapYear: ', isLeapYear(200)); // Outputs: false
  console.log('6.2 isLeapYear: ', isLeapYear(300)); // Outputs: false
  console.log('6.2 isLeapYear: ', isLeapYear(400)); // Outputs: true
  console.log('6.2 isLeapYear: ', isLeapYear(2000)); // Outputs: true

  //Find factorial - Time O(n), Space O(n) = standard recursion stack
  const factorial = (n: number): number => {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  console.log('6.1 factorial(5): ', factorial(5)); // Outputs: 120


  //Find Fibonacci - Time O(2ⁿ), Space O(n) — exponential due to overlapping subproblems
  //NOTE : Fibonacci series is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.
  const fibonacci = (n: number): number => {
    if (n === 0 || n === 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  console.log('6.2 fibonacci(5): ', fibonacci(5)); // Outputs: 5

  //Find GCD (Greatest Common Divisor)/gcd questions:
  //NOTE : GCD is the largest positive integer that divides all the given numbers without leaving a remainder.
  //Time O(log(min(a, b))), Space O(log(min(a, b))) — via Euclidean algorithm
  const gcd = (a, b) => { //-------------> REUSE FOR NEXT 4
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b); //gcd(48, 18) -> gcd(18, 48 % 18) = gcd(18, 12) = gcd(12, 6) = gcd(6, 0) = 6 --> REMEMBER THIS
  }
  console.log('6.3 gcd(48, 18): ', gcd(48, 18)); // Outputs: 6

  //GCD of an array - dont use rdeuce
  //Time O(n × log(max)), Space O(1) — repeated pairwise GCD
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
  //Time O(log(min(a, b))), Space O(1) — uses GCD to compute LCM
  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);  //------------->  a * b / GCD = LCM
  }
  console.log('6.4 lcm(4, 5): ', lcm(4, 5)); // Outputs: 20 // 4*5/gcd(4,5)
  console.log('6.4 lcm(4, 6): ', lcm(4, 6)); // Outputs: 12

  //LCM of an array - dont use lcm
  //Time O(n × log(max)), Space O(1) — chained LCM computation
  const lcmOfArray = (arr) => {
    const lcm = (a, b) => {
      return (a * b) / gcd(a, b);
    }
    return arr.reduce((acc, curr) => lcm(acc, curr), 1);
  }
  console.log('6.5 lcmOfArray([4, 5, 6]): ', lcmOfArray([4, 5, 6])); // Outputs: 60

  //Check if number is prime:
  // Time O(√n), Space O(1) — checks divisibility up to √n
  function isPrime(n) {
    if (n <= 1) return false;           // ______ 0 and 1 are not prime
    if (n === 2 || n === 3) return true; // 2 and 3 are prime
    if (n % 2 === 0 || n % 3 === 0) return false;

    // check only up to √n with 6k ± 1 optimization //6 because all primes are of the form 6k ± 1
    for (let i = 5; i <= n / 2; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }
  console.log('6.6 isPrime(11): ', isPrime(11)); // Outputs: true
  console.log('6.6 isPrime(15): ', isPrime(15)); // Outputs: false
  console.log('6.6 isPrime(7): ', isPrime(7)); // Outputs: true








  //------------------- 1 STRING QUESTIONS ------------------

  //Check string duplicates  - without extra memory
  //Time O(n²), Space O(1) — nested loops for comparison
  function removeDuplicates(str) {
    if (!str || str.length < 2) return str;
    const arr = str.split('');
    let writeIndex = 1;

    for (let i = 1; i < arr.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < writeIndex; j++) {
        if (arr[i] === arr[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        arr[writeIndex] = arr[i];
        writeIndex++;
      }
    }
    return arr.slice(0, writeIndex).join('');
  }
  console.log('1.7 removeDuplicates: ', removeDuplicates('hello world')); // Outputs: 'helo wrd'
  console.log('1.7 removeDuplicates: ', removeDuplicates('banana')); // Outputs: 'ban'
  //Check duplicates - with extra memory
  //Time O(n), Space O(n) — uses a set to track duplicates
  function removeDuplicatesWithSet(str) {
    const seen = new Set();
    let result = '';
    for (const char of str) {
      if (!seen.has(char)) {
        seen.add(char);
        result += char;
      }
    }
    return result;
  }
  console.log('1.7 hasDuplicates: ', removeDuplicatesWithSet('hello world')); // Outputs: 'helo wrd'



  //Time O(n log n), Space O(n)
  function areAnagrams(s1, s2) {
    if (s1.length !== s2.length) return false;
    return s1.split('').sort().join('') === s2.split('').sort().join('');
  }
  console.log('1.8 areAnagrams: ', areAnagrams('listen', 'silent')); // Outputs: true
  console.log('1.8 areAnagrams: ', areAnagrams('hello', 'world')); // Outputs: false


  //Check if a string is a rotation of another string
  //Time O(n), Space O(n) — uses string concatenation
  function isRotation(s1, s2) {
    if (s1.length !== s2.length) return false;
    const concatenated = s1 + s1; // Concatenate s1 with itself
    return concatenated.includes(s2);
  }
  console.log('1.9 isRotation: ', isRotation('waterbottle', 'erbottlewat')); // Outputs: true



  // A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
  // For example, the number 9 has a binary representation of 1001 and contains a binary gap of length 2.
  //Time O(log N), Space O(log N) — binary conversion takes log N space
  console.log('1.6 binaryGap:');
  const binaryGap = (N) => {
    const binary = N.toString(2); // .toString(2) -------> Convert to binary
    let maxGap = 0;
    let currentGap = 0;

    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === '1') {
        maxGap = Math.max(maxGap, currentGap);
        currentGap = 0;
      } else {
        currentGap++;
      }
    }
    console.log('binaryGap(' + N + '): ', binary, maxGap);
    return maxGap;
  }
  binaryGap(9) // Outputs: binaryGap(9):  1001 2
  binaryGap(529) // Outputs: binaryGap(529):  1000010001 4
  binaryGap(20) // Outputs: binaryGap(20):  10100 1
  binaryGap(15) // Outputs: binaryGap(15): 1111 0


  //Check if the parentheses are balanced
  //Time O(n), Space O(n) — uses a stack to track brackets
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
        // console.log("pushing to stack", char, stack);
      }
      //else pop and check if matching bracket or not
      else {
        const lastChar = stack.pop();
        // console.log("popping from stack", map[char], lastChar, stack);
        if (map[char] !== lastChar) {
          // console.log('NOT GOOD. Return false');
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
  //Time O(n), Space O(n) — split, reverse, and join
  const str = 'hello world';
  const reverseString = (str: string) => {
    return str.split('').reverse().join('');
  }
  console.log('1 reverseString: ', reverseString(str)); // 'dlrow olleh'



  //removeWhitespaces with \t \n
  const removeWhitespaces = (str) => {
    return str.replace(/\s/g, ''); // \s matches any whitespace character (spaces, tabs, newlines)
  }
  console.log('2.1 removeWhitespaces: ', removeWhitespaces('hello \t\n world')); // 'helloworld'

  //Reverse the string without using built-in functions
  //Time O(n), Space O(1) — in-place reversal
  const reverseStringWithoutBuiltIn = (str: string) => {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  console.log('2 reverseStringWithoutBuiltIn: ', reverseStringWithoutBuiltIn(str)); // 'dlrow olleh'

  //Reverse the string using recursion
  // 	•	Time Complexity: O(n²) - Each recursive call uses str.substr(1) which takes O(n) time (since it creates a new string of length n - 1, n - 2, …, 1). So the total is O(n + (n-1) + (n-2) + ... + 1) = O(n²).
  // •	Space Complexity: O(n) - Due to the recursive call stack with depth n.
  const reverseStringRecursion = (str: string): string => {
    if (str === '') {
      return '';
    } else {
      return reverseStringRecursion(str.substr(1)) + str.charAt(0);
    }
  }
  console.log('3 reverseStringRecursion: ', reverseStringRecursion(str)); // 'dlrow olleh'

  //Reverse the string using stack
  //Time O(n), Space O(n) — LIFO stack reverse
  function reverseStringStack(inputString: string): string {
    const stack = inputString.split('');
    let reversedString = '';
    while (stack.length > 0) {
      reversedString += stack.pop();
    }
    return reversedString;
  }
  console.log('4 reverseStringStack: ', reverseStringStack('HELLO')); // Outputs: OLLEH




  //Check if the string is a palindrome = same forwards and backwards
  //Time O(n), Space O(n) — compares reversed string / can be O(1) with two-pointer approach
  const isPalindrome = (str: string) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  console.log(isPalindrome('racecar')); // true
  console.log(isPalindrome('hello')); // false
  //Time O(n), Space O(1) — two-pointer approach
  function isPalindrome2(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  console.log('1.2 isPalindrome: ', isPalindrome2('racecar')); // Outputs: true




  //NOTE : Find the number of occurrences of each string in an array
  //Time O(n * m), Space O(m) — where n is the number of strings and m is the number of queries / O(1) if using a hash map
  const strings = ['hello', 'hello', 'world', 'test', 'tree', 'hello'];
  const queries = ['hello', 'world', 'waitWhat'];  //output = [3, 1, 0]
  function matchingStrings(strings, queries) {
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

  //Custom rdeuce imp
  Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback.call(undefined, accumulator, this[i], i, this); // _________ IMP
      } else {
        accumulator = this[i];
      }
    }
    return accumulator;
  };
  console.log('2.13 myReduce [1, 2, 3]: ', [1, 2, 3].myReduce((acc, curr) => acc + curr)); // Outputs: 6

  function haveSameElements(array1, array2) {
    if (array1.length !== array2.length) return false;
    const count = arr =>
      arr.reduce((map, el) => {
        map[el] = (map[el] || 0) + 1;
        return map;
      }, {});
    const map1 = count(array1);
    const map2 = count(array2);
    for (const key in map1) {
      if (map1[key] !== map2[key]) return false;
    }
    return true;
  }
  console.log('2.12 haveSameElements: [1, 2, 3], [3, 2, 1]: ', haveSameElements([1, 2, 3], [3, 2, 1])); // Outputs: true
  console.log('2.12 haveSameElements: [1, 2, 3], [3, 2, 2]: ', haveSameElements([1, 2, 3], [3, 2, 2])); // Outputs: false

  //Given two arrays A and B of the same length, how many cyclic rotations of A make every element A[i] >= B[i]
  //Time O(n²), Space O(n) — brute-force approach
  function countValidRotations(A, B) {
    const n = A.length;
    let count = 0;
    for (let r = 0; r < n; r++) {
      const rotated = [...A.slice(r), ...A.slice(0, r)]; // [1,2,3] -> [2,3,1] -> [3,1,2]
      if (rotated.every((val, i) => val > B[i])) {
        count++;
      }
    }
    return count;
  }
  console.log('2.11 countValidRotations: ', countValidRotations([1, 2, 3], [0, 1, 2])); // Outputs: 1
  console.log('2.11 countValidRotations: ', countValidRotations([1, 2, 3], [0, 1, 4])); // Outputs: 0

  //Flatten the array
  // var test1 = [1,2,3],            // [1,2,3]
  //   test2 = [[1,2],3],          // [1,2,3]
  //   test3 = [1,[2],[3,[4]]];    // [1,2,3,4]

  function flattenArray(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result.push(...flattenArray(arr[i])); // Recursively flatten the sub-array
      } else {
        result.push(arr[i]); // Push non-array elements directly
      }
    }
    return result;
  }
  console.log('2.10 flattenArray: ', flattenArray([1, [2], [3, [4]]])); // Outputs: [1,2,3,4]


  //You’re given two arrays A and B of equal length. You can cyclically rotate A any number of times. Count how many rotations result in the condition A[i] > B[i] for all i.
  function countRotations(A, B) {
    let count = 0;
    const n = A.length;

    for (let i = 0; i < n; i++) {
      let valid = true;
      for (let j = 0; j < n; j++) {
        if (A[(i + j) % n] <= B[j]) {
          valid = false;
          break;
        }
      }
      if (valid) {
        count++;
      }
    }
    return count;
  }
  console.log('2.9 countRotations: ', countRotations([1, 2, 3], [0, 1, 2])); // Outputs: 1

  /*
  Longest Increasing Subsequence (LIS)
  Input: arr[] = [3, 10, 2, 1, 20]
  Output: 3
  Explanation: The longest increasing subsequence is 3, 10, 20
  Time O(n²), Space O(n) — dynamic programming
  */
  function lis(arr) {
    const n = arr.length;
    const dp = Array(n).fill(1); // Initialize LIS values for all indexes as 1

    //	•	For each element arr[i], look back at all previous elements arr[j] (where j < i).
    // •	If arr[i] > arr[j], it can extend the increasing subsequence ending at j.
    // •	Update dp[i] = max(dp[i], dp[j] + 1)
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
          dp[i] = dp[j] + 1;
        }
      }
    }
    // Pick maximum of all LIS values
    return Math.max(...dp);
  }
  console.log('2.8 lis: ', lis([100, 10, 2, 1, 20])); // Outputs: 2 // 10, 20
  console.log('2.8 lis: ', lis([100, 10, 1, 2, 3, 10, 20])); // Outputs: 5 // 1, 2, 3, 10, 20


  /*
  Longest Common Subsequence (LCS)
  Given two strings, s1 and s2, the task is to find the length of the Longest Common Subsequence.
  subsequences of “ABC” are “”, “A”, “B”, “C”, “AB”, “AC”, “BC” and “ABC”. In general, a string of length n has 2n subsequences
  Input: s1 = “ABC”, s2 = “ACD”
  Output: 2 Explanation: The longest subsequence which is present in both strings is “AC”.
  Input: s1 = “ABC”, s2 = “CBA”
  Output: 1 A/B/C
  */
  function lcs(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        //Use this rule:
        // •	If s1[i-1] === s2[j-1] → dp[i][j] = dp[i-1][j-1] + 1
        // •	Else → dp[i][j] = max(dp[i-1][j], dp[i][j-1])
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
    return dp[m][n];
  }
  /*
        B  D  E
   ┌────────────
   │ 0  0  0  0
 A │ 0  0  0  0
 B │ 0  1  1  1
 C │ 0  1  1  1
 D │ 0  1  2  2
 E │ 0  1  2  3
  */
  console.log('2.7 lcs: ', lcs("ABCDE", "BDE")); // Outputs: 3
  console.log('2.7 lcs: ', lcs("ABC", "ACD")); // Outputs: 2
  console.log('2.7 lcs: ', lcs("ABC", "CBA")); // Outputs: 1


  /*
  6. Greedy Algorithm: Fractional Knapsack Problem
  Given two arrays, val[] and wt[], representing the values and weights of items, and an integer capacity representing the maximum weight a knapsack can hold, the task is to determine the maximum total value that can be achieved by putting items in the knapsack.
  Time O(n log n), Space O(n) — greedy by value/weight ratio
  */
  function fractionalKnapsack(val, wt, capacity) {
    const items = val.map((value, index) => ({
      value,
      weight: wt[index],
      ratio: value / wt[index]
    }));

    // Sort items by _________ "value-to-weight" ratio in descending order
    items.sort((a, b) => b.ratio - a.ratio); // [{value: 60, weight: 10, _____ratio: 6}, {value: 100, weight: 20, ratio: 5}, {value: 120, weight: 30, ratio: 4}]

    let totalValue = 0;
    for (const item of items) {
      if (capacity <= 0) break;

      if (item.weight <= capacity) {
        totalValue += item.value;
        capacity -= item.weight;
      } else {
        totalValue += item.ratio * capacity;
        capacity = 0;
      }
    }
    return totalValue;
  }
  console.log('2.6 fractionalKnapsack: ', fractionalKnapsack([60, 100, 120], [10, 20, 30], 50)); // Outputs: 240


  /*
  6. Greedy Algorithm: Maximum Length Chain of Pairs | DP-20
  You are given n pairs of numbers. In every pair, the first number is always smaller than the second number. A pair (c, d) can follow another pair (a, b) if b < c. Chain of pairs can be formed in this fashion
  given pairs are {{5, 24}, {39, 60}, {15, 28}, {27, 40}, {50, 90} }, then the longest chain that can be formed is of length 3, and the chain is {{5, 24}, {27, 40}, {50, 90}}
  Solution:
  1. Sort the pairs in increasing order of the second element.
  Time O(n log n), Space O(1) — sort + two pointer traversal
  */
  function maxChainLength(pairs) {
    pairs.sort((a, b) => a[1] - b[1]); // [[5, 24], [15, 28], [27, 40], [39, 60], [50, 90]]
    let maxLength = 1;
    let lastEnd = pairs[0][1]; // 24 ---> IMPORTANT

    for (let i = 1; i < pairs.length; i++) {
      if (pairs[i][0] > lastEnd) {
        maxLength++;
        lastEnd = pairs[i][1];
      }
    }
    return maxLength;
  }
  console.log('2.5 maxChainLength: ', maxChainLength([[5, 24], [39, 60], [15, 28], [27, 40], [50, 90]])); // Outputs: 3

  /*
  6. Greedy Algorithm: Minimum Platforms Required for Given Arrival and Departure Times:
  Input: arr[] = [900, 940, 950, 1100, 1500, 1800], dep[] = [910, 1200, 1120, 1130, 1900, 2000]
  Output: 3
  First, we sort the arrival and departure times of all trains. Then, using two pointers, we traverse through both arrays.
  Using Sorting and Two Pointers – O(n log(n)) time and O(1) space
  */
  function findPlatform(arr, dep) {
    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);

    let platformNeeded = 1;
    let maxPlatforms = 1;
    let i = 1;
    let j = 0;

    while (i < arr.length && j < dep.length) {
      if (arr[i] <= dep[j]) {
        platformNeeded++;
        i++;
      } else {
        platformNeeded--;
        j++;
      }
      maxPlatforms = Math.max(maxPlatforms, platformNeeded);
    }
    return maxPlatforms;
  }
  console.log('2.4 findPlatform: ', findPlatform([900, 940, 950, 1100, 1500, 1800], [910, 1200, 1120, 1130, 1900, 2000])); // Outputs: 3



  /*
  TapeEquilibrium
  Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
  Find minimum absolute difference between the sum of the first part and the sum of the second part.
  Time O(n²), Space O(n) — recomputes left/right sum repeatedly
  */
  function TapeEquilibrium(A) {
    // Implement your solution here
    let minDiff = Infinity, sumLeft, sumRight, currentP;
    for (let i = 0; i < A.length - 1; i++) {
      currentP = i + 1;
      sumLeft = A.slice(0, currentP).reduce((sum, val) => sum += val, 0);
      sumRight = A.slice(currentP).reduce((sum, val) => sum += val, 0);
      if (Math.abs(sumLeft - sumRight) < minDiff) {
        minDiff = Math.abs(sumLeft - sumRight)
      }
      // console.log(A[i], currentP, sumLeft, sumRight, minDiff);
    }
    return minDiff;
  }
  console.log('2.3 TapeEquilibrium([3, 1, 2, 4, 3]): ', TapeEquilibrium([3, 1, 2, 4, 3])); // Outputs: 1 ------> O(N^2)
  //Better solution:
  //Time O(n), Space O(1) — computes total sum once, then iterates through array
  function TapeEquilibrium2(A) {
    const totalSum = A.reduce((sum, val) => sum + val, 0);
    let minDiff = Infinity;
    let leftSum = 0;

    for (let i = 0; i < A.length - 1; i++) {
      leftSum += A[i];
      const rightSum = totalSum - leftSum;
      const diff = Math.abs(leftSum - rightSum);
      if (diff < minDiff) minDiff = diff;
    }

    return minDiff;
  }
  console.log('2.3 TapeEquilibrium2([3, 1, 2, 4, 3]): ', TapeEquilibrium2([3, 1, 2, 4, 3])); // Outputs: 1 ------> O(N)

  // rotate array A K times; that is, each element of A will be shifted to the right K times.
  //NOTE : The elements of the array are rotated to the right by K positions.
  const rotateArrayKTimes = (A, K) => {
    for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
    }
    return A;
  }
  console.log('2.2 rotateArrayKTimes: [1, 2, 3, 4, 5]: ', rotateArrayKTimes([1, 2, 3, 4, 5], 2)); // Outputs: [4, 5, 1, 2, 3]


  //Replace all occurrences of a given value in an array ------> EASY BUT VAA
  const replaceAllOccurrences = (arr, target, replacement) => {
    return arr.map((item) => (item === target ? replacement : item));
  }
  console.log('2.1 replaceAllOccurrences: ', replaceAllOccurrences([1, 2, 3, 4, 5, 2], 2, 99)); // Outputs: [1, 99, 3, 4, 5, 99]
  //NOTE : Replace all occurrences of a given value in an array without using built-in functions

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
  Time O(2^N), Space O(N) — uses DFS to explore combinations - Each element (glass) has 2 choices: include or exclude. so 2^N
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








  //------------------- 8 Map questions ------------------





  //------------------- 7 Stack questions ------------------

  /*
  Given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
  For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
  Given A = [1, 2, 3], the function should return 4.
  Given A = [−1, −3], the function should return 1.
  Time O(n), Space O(n) — uses Set + linear scan
  */
  function findSmallestMissingNumber(A) {
    const set = new Set(A);
    return Array.from({ length: A.length + 2 }, (_, i) => i + 1).find(x => !set.has(x));
  }
  console.log('7.2: findSmallestMissingNumber([1, 3, 6, 4, 1, 2]): ', findSmallestMissingNumber([1, 3, 6, 4, 1, 2])); // Outputs: 5
  console.log('7.2: findSmallestMissingNumber([1, 2, 3]): ', findSmallestMissingNumber([1, 2, 3])); // Outputs: 4
  console.log('7.2: findSmallestMissingNumber([-1, -3]): ', findSmallestMissingNumber([-1, -3])); // Outputs: 1


  /*
  Your task is to compute the minimum number of blocks needed to build the wall.
  The wall should be straight and N meters long, and its thickness should be constant; however, it should have different heights in different places. The height of the wall is specified by an array H of N positive integers. H[I] is the height of the wall from I to I+1 meters to the right of its left end. In particular, H[0] is the height of the wall's left end and H[N−1] is the height of the wall's right end.
  console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8])); // ➜ Output: 7
  Time O(N), Space O(N) — stack to track heights
  */
  function buildWall(H) {
    const stack = [];
    let blocks = 0;

    for (let i = 0; i < H.length; i++) {
      const currentHeight = H[i];

      // Remove blocks until we can place current one
      while (stack.length > 0 && currentHeight < stack[stack.length - 1]) {//------------> LESS THEN POP
        // console.log('POP: currentHeight is less than stacks last: ', currentHeight, stack[stack.length - 1]);
        stack.pop();
      }

      // Only add a new block if it's different than the top one
      if (stack.length === 0 || currentHeight > stack[stack.length - 1]) { //------------> HIGH THEN PUSH and increase block++
        // console.log('PUSH: currentHeight is more than stacks last: ', currentHeight, stack[stack.length - 1]);
        stack.push(currentHeight);
        blocks++;
      }
      // console.log('stack:', H[i], stack);
    }
    return blocks;
  }
  console.log('7.1: buildWall([8, 8, 5, 7, 9, 8, 7, 4, 8]): ', buildWall([8, 8, 5, 7, 9, 8, 7, 4, 8])); // Outputs: 7
  console.log('7.1: buildWall([8, 2, 9, 7, 9, 8, 10, 1, 2]): ', buildWall([8, 2, 9, 7, 9, 8, 10, 1, 2])); // Outputs:


  //Trapping Rain Water Problem
  /*
  Trapping Rainwater Problem states that given an array of n non-negative integers arr[] representing an elevation map where the width of each bar is 1, compute how much water it can trap after rain.
  Input: arr[] = [3, 0, 1, 0, 4, 0, 2]
  Output: 10
  Time: O(n) Space: O(1)
  */
  function trapRainWater(height) {
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    let leftMaxHeight = 0;
    let rightMaxHeight = 0;
    let waterTrapped = 0;

    while (leftIndex < rightIndex) { //We move the left and right pointers toward each other:
      if (height[leftIndex] < height[rightIndex]) {
        if (height[leftIndex] >= leftMaxHeight) {
          leftMaxHeight = height[leftIndex];
        } else {
          waterTrapped += leftMaxHeight - height[leftIndex]; //At every index, calculate how much water it can hold:
        }
        leftIndex++;
      } else {
        if (height[rightIndex] >= rightMaxHeight) {
          rightMaxHeight = height[rightIndex];
        } else {
          waterTrapped += rightMaxHeight - height[rightIndex];
        }
        rightIndex--;
      }
    }
    return waterTrapped;
  }
  // Example
  const arr = [3, 0, 1, 0, 4, 0, 2];
  console.log(trapRainWater(arr)); // Output: 10



  //------------------- 8 Tree questions ------------------

  //BST implementation
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  class BST {
    constructor() {
      this.root = null
    }
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
    //delete Node
    deleteNode(value) {
      this.root = this._deleteNode(this.root, value);
    }
    _deleteNode(node, value) {
      if (node === null) {
        return null;
      }
      if (value < node.value) {
        node.left = this._deleteNode(node.left, value);
      } else if (value > node.value) {
        node.right = this._deleteNode(node.right, value);
      } else {
        // Node with only one child or no child
        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }
      }
    }
    //Diameter of a Binary Tree = number of edges on the longest path between any two nodes
    getDiameter() {
      let diameter = 0;
      function calculateHeight(node) {
        if (node === null) {
          return 0;
        }
        const leftHeight = calculateHeight(node.left);
        const rightHeight = calculateHeight(node.right);
        diameter = Math.max(diameter, leftHeight + rightHeight);
        return Math.max(leftHeight, rightHeight) + 1;
      };
      calculateHeight(this.root);
      return diameter;
    }
    //LCA - Lowest Common Ancestor in a Binary Tree
    getLca(node1, node2) {
      const findLCA = (node, n1, n2) => {
        if (node === null) {
          return null;
        }
        if (node.value === n1 || node.value === n2) {
          return node;
        }
        const leftLCA = findLCA(node.left, n1, n2);
        const rightLCA = findLCA(node.right, n1, n2);
        if (leftLCA && rightLCA) {
          return node;
        }
        return leftLCA ? leftLCA : rightLCA;
      };
      return findLCA(this.root, node1, node2);
    }

    //inOrderTraversal: Go left from 10 → to 5 → to print 3. Go back to 5, print it ✅ Outputs: [3, 5, 7, 10, 12, 15, 18]
    //Always sorted (ascending) order
    inOrderTraversal(node = this.root, result = []) {
      if (node) {
        this.inOrderTraversal(node.left, result);
        result.push(node.value);
        this.inOrderTraversal(node.right, result);
      }
      return result;
    }
    //preOrderTraversal: Go to 10, print it. Go left to 5, print it. Go left to 3, print it ✅ Outputs: [10, 5, 3, 7, 15, 12, 18]
    preOrderTraversal(node = this.root, result = []) {
      if (node) {
        result.push(node.value);
        this.preOrderTraversal(node.left, result);
        this.preOrderTraversal(node.right, result);
      }
      return result;
    }
    //postOrderTraversal: Go left to 3, print it. Go back to 5, print it. Go back to 10, print it ✅ Outputs: [3, 7, 5, 12, 18, 15, 10]
    postOrderTraversal(node = this.root, result = []) {
      if (node) {
        this.postOrderTraversal(node.left, result);
        this.postOrderTraversal(node.right, result);
        result.push(node.value);
      }
      return result;
    }
  }

  const tree = new BST();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(18);
  //     10
  //   /    \
  //  5      15
  // / \     / \
  //3   7   12 18
  console.log('8.1: BST in-order traversal: ', tree.inOrderTraversal()); // Outputs: [3, 5, 7, 10, 12, 15, 18]
  console.log('8.1: BST pre-order traversal: ', tree.preOrderTraversal()); // Outputs: [10, 5, 3, 7, 15, 12, 18]
  console.log('8.1: BST post-order traversal: ', tree.postOrderTraversal()); // Outputs: [3, 7, 5, 12, 18, 15, 10]
  tree.deleteNode(5);
  console.log('8.1: BST in-order traversal after deleting 5: ', tree.inOrderTraversal()); // Outputs: [3, 7, 10, 12, 15, 18]
  //Below breaking ui 
  // console.log('8.1: BST diameter: ', tree.getDiameter()); // Outputs: 4 (3-5-10-15-18)
  // console.log('8.1: BST LCA of 3 and 7: ', tree.getLca(3, 7).value); // Outputs: 5










  //------------------- 9 Queue questions ------------------
  class Queue {
    constructor() {
      this.items = [];
    }
    enqueue(element) {
      this.items.push(element);
    }
    dequeue() {
      if (this.isEmpty()) return null;
      return this.items.shift();
    }
    front() {
      return this.isEmpty() ? null : this.items[0];
    }
    isEmpty() {
      return this.items.length === 0;
    }
    size() {
      return this.items.length;
    }
    print() {
      console.log('9.1 Queue: ', this.items.join(' <- '));
    }
  }
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log('9.1: Queue size: ', queue.size()); // Outputs: 3
  console.log('9.1: Queue front: ', queue.front()); // Outputs: 1
  queue.print(); // Outputs: 1 <- 2 <- 3


  //------------------- 10 Linked list questions ------------------
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
    }
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        return;
      }

      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      console.log('10.1: LinkedList append: ', current);
    }
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
    delete(value) {
      if (!this.head) return;
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
      if (current.next) {
        current.next = current.next.next;
      }
    }
    print() {
      let current = this.head;
      const values = [];
      while (current) {
        values.push(current.value);
        current = current.next;
      }
      console.log('10.1 Linked list: ', values.join(" -> "));
    }
  }
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.print(); // Outputs: 1 -> 2 -> 3
  // Node {value: 1, next: Node}
  //   next: Node {value: 2, next: Node}
  //     next: Node {value: 3, next: null}
  linkedList.prepend(0);
  linkedList.delete(2);
  linkedList.print(); // Outputs: 0 -> 1 -> 3



  //------------------- 11 capital one questions ------------------

  /*
  construct an array with first character of a[i] and last character of a[i+1]
  a = ["cat", "dog", "ferret", "scorpion"]
  Output: ["cg", "dt", "fn", "st"]
  Time O(n), Space O(n) — linear scan
  */
  const firstAndLast = (arr) => {
    const result = [];
    arr.forEach((word, index) => {
      const nextWord = arr[index + 1] ? arr[index + 1] : arr[0],
        lastChar = nextWord[nextWord.length - 1];
      result.push(word[0] + lastChar);
    });
    return result;
  }
  console.log('11.1 firstAndLast: ', firstAndLast(["cat", "dog", "ferret", "scorpion"])); // Outputs: ["cg", "dt", "fn", "st"]


  /*
  fantasy card duel problem:
  During each round:
    •	The top cards of both decks are revealed.
    •	If the card from playerDeckA is greater than or equal to the card from playerDeckB,
    •	Player A wins the round, and both cards are placed at the bottom of playerDeckA,
  first their own, then playerDeckB’s card.
    •	Otherwise,
    •	Player B wins the round, and both cards are placed at the bottom of playerDeckB,
  first their own, then playerDeckA’s card.
  The game ends when either player’s deck becomes empty (they can’t draw any more cards).
  
  Task: Determine how many rounds the duel lasts.
  */
  const cardDuel = (playerDeckA, playerDeckB) => {
    let rounds = 0;
    while (playerDeckA.length > 0 && playerDeckB.length > 0) {
      const cardA = playerDeckA.shift();
      const cardB = playerDeckB.shift();
      rounds++;
      if (cardA >= cardB) {
        playerDeckA.push(cardA, cardB); //____________ PUSH MULTIPLE AT END
      } else {
        playerDeckB.push(cardB, cardA);
      }
      // console.log('11.2: cardDuel: A:', playerDeckA.join(','), ' B: ', playerDeckB.join(','));
    }
    return rounds;
  }
  console.log('11.2 cardDuel: ', cardDuel([1, 2, 3], [3, 2, 1])); // Outputs: 9 //A[2,3] B[2,1,3,1] --> A: 3,2,2  B:  1,3,1 -> A: 2,2,3,1  B:  3,1 ->  A: 2,3,1  B:  1,3,2 -> A: 3,1,2,1  B:  3,2 ->  ...... -> A: 3,3,2,2,1,1  B:
  console.log('11.2 cardDuel: ', cardDuel([1, 2, 3], [4, 5, 6])); // Outputs: 3
  console.log('11.2 cardDuel: ', cardDuel([1, 2, 3], [1, 2, 3])); // Outputs: 3


  /*
  gravity-based puzzle
  You are given a rectangular matrix board representing the game board.
  Each cell contains one of the following:
  •	'.' — an empty cell
  •	'x' — an obstacle
  •	'#' — a part of the figure (the shape you want to drop)
  It is guaranteed that the figure consists of one piece, with all '#' cells connected by the sides.
  
  Task: Simulate how the figure would fall, and find the minimum number of obstacles ('x') that must be removed to allow the figure to touch the bottom row of the board with at least one of its cells.
  The figure falls straight down (gravity), maintaining its shape.
  The figure cannot rotate or move horizontally.

  board = [
    ['.', '.', '.', '.', '.'],
    ['.', 'x', 'x', '.', '.'],
    ['.', '.', '#', '#', '.'],
    ['x', 'x', '.', '.', '.'],
    ['.', '.', '.', '.', '.']
  ]
    Output: 2
  */
  function gravityPuzzle(board) {
    const rows = board.length;
    const cols = board[0].length;

    // Step 1: Identify figure blocks
    const shape = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (board[i][j] === '#') {
          shape.push([i, j]);
        }
      }
    }
    console.log('11.3 gravityPuzzle: shape: ', shape);

    // Step 2: Simulate how far the shape can drop before colliding
    let minRemovals = Infinity;

    // Try all possible drops
    for (let drop = 0; drop < rows; drop++) {
      let collision = false;
      let removals = 0;

      for (const [x, y] of shape) {
        const newX = x + drop;
        if (newX >= rows) {
          collision = true;
          break;
        }

        if (board[newX][y] === 'x') {
          removals++;
        }
      }

      if (collision) break;
      minRemovals = Math.min(minRemovals, removals);
    }

    return minRemovals;
  }
  console.log('11.3 gravityPuzzle: ', gravityPuzzle([
    ['.', '.', '.', '.', '.'],
    ['.', 'x', 'x', '.', '.'],
    ['.', '.', '#', '#', '.'],
    ['x', 'x', '.', '.', '.'],
    ['.', '.', '.', '.', '.']
  ])); // Outputs: 0
  console.log('11.3 gravityPuzzle: ', gravityPuzzle([
    ['.', '.', '#', '.', '.'],
    ['.', '#', '#', '#', '.'],
    ['.', 'x', 'x', 'x', '.'],
    ['.', '.', '.', '.', '.'],

  ])); // Outputs: 2

  /*
  Given an infinite integer number line, you would like to build some blocks and obstacles on it.
  You have to implement code which supports two types of operations:
    1.	[1, x] — Builds an obstacle at coordinate x along the number line.
  It is guaranteed that coordinate x does not contain any obstacles when the operation is performed.
    2.	[2, x, size] — Checks whether it’s possible to build a block centered on x and extending size-1 in each direction.
  For example, for size = 3 and x = 0, it will check -2 through 2 on the number line for obstacles (i.e., all positions from x-(size-1) to x+(size-1)).
    •	Produces "1" if possible (i.e., there are no obstacles at any of these positions).
    •	Produces "0" otherwise.
    [
      [1, 2],      // place obstacle at 2
      [1, 6],      // place obstacle at 6
      [2, 4, 2],   // check if block size 2 at center 4: check 3,4,5
      [2, 5, 2],   // check if block size 2 at center 5: check 4,5,6
      [2, 1, 1],   // check if block size 1 at center 1: check 1
      [2, 1, 2],   // check if block size 2 at center 1: check 0,1,2
    ]
    Output: 1010
    const ops = [
      [2, 0, 2], // check -1,0,1
      [1, -1],
      [2, 0, 2],
      [1, 0],
      [2, 0, 2],
    ];
    Output: 100
    Time O(n), Space O(n) — uses Set to track obstacles
  */
  function solution(operations) {
    const obstacles = new Set();
    let result = "";

    for (const op of operations) {
      if (op[0] === 1) {
        // [1, x] - build an obstacle at x
        obstacles.add(op[1]);
      } else {
        // [2, x, size] - check block centered at x, from (x-(size-1)) to (x+(size-1))
        const [, x, size] = op; // Ignore op[0], take x and size
        let canBuild = true;
        for (let i = x - (size - 1); i <= x + (size - 1); i++) {
          if (obstacles.has(i)) {
            canBuild = false;
            break;
          }
        }
        result += canBuild ? "1" : "0";
      }
    }
    return result;
  }
  console.log('11.4 solution: ', solution([
    [1, 2],      // place obstacle at 2
    [1, 6],      // place obstacle at 6
    [2, 4, 2],   // check if block size 2 at center 4: check 3,4,5
    [2, 5, 2],   // check if block size 2 at center 5: check 4,5,6
    [2, 1, 1],   // check if block size 1 at center 1: check 1
    [2, 1, 2],   // check if block size 2 at center 1: check 0,1,2
  ])); // Outputs: 1010
  console.log(solution([
    [1, -1000000],
    [2, -1000000, 1],
    [2, -999999, 2],
    [2, -1000001, 2],
  ])); // => "010"











  return (
    <div>
      <GoBackToHome />
      <h1> ES6 and TypeScript Practice</ h1>
    </div>
  )
}