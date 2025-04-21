// @ts-nocheck Temporary ignore
//DONT USE TYPESCRIPT. USE PLAIN JAVASCRIPT
import GoBackToHome from "./GoBacktoHome";

export const Es6TsPractice = () => {



  /*
  TODO: 
Hands-On/Algorithmic Technical Interview
  https://www.geeksforgeeks.org/top-10-algorithms-in-interview-questions/
Design focused Technical Interview
  https://github.com/mutablealligator/system-design-primer#system-design-topics-start-here
https://www.kearney.com/careers/ace-the-interview/crack-the-case

Behavioral Interview:
https://www.kearney.com/careers/ace-the-interview/crack-the-case
https://www.youtube.com/watch?v=iqVlc0G_sBA&list=PLX4RP_tIsvqformMaEHl0m1_k5_V48Kwz&index=3
https://www.youtube.com/watch?v=y4SwYdIM6yA&list=PLX4RP_tIsvqformMaEHl0m1_k5_V48Kwz&index=3
https://www.youtube.com/watch?v=4cDT5YZQwOs&list=PLX4RP_tIsvqeugoNRz10pxj81ovm_BL3m&index=12


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

For more, please refer: Array Data Structure Guide


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

For more, please refer: String Data Structure


3. Sorting Algorithm
QuickSort
MergeSort
HeapSort
Counting Sort
Radix Sort
Bubble Sort
Selection Sort
Insertion Sort
Shell Sort
Bucket Sort

4. Searching Algorithm
Linear Search
Binary Search
Ternary Search
Depth-First Search (DFS)
Breadth-First Search (BFS)
Fibonacci Search

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

7. Tree Algorithm
Lowest Common Ancestor (LCA)
Diameter of Binary Tree
Binary Tree Level Order Traversal
Serialize and Deserialize a Binary Tree
Check if a Binary Tree is BST
Inorder Traversal without Recursion
Convert Binary Tree to Doubly Linked List
Check if Two Trees are Identical
Maximum Width of a Binary Tree
Mirror of a Binary Tree

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

9. Graph Algorithm
Dijkstra’s Algorithm
Kruskal’s Algorithm
Topological Sorting
Bellman-Ford Algorithm
Floyd Warshall Algorithm
Prim’s Algorithm
Depth-First Traversal of a Graph
Breadth-First Traversal of a Graph
Detect Cycle in a Directed Graph
Articulation Points (or Cut Vertices) in a Graph

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

Top 50 Array Coding Problems for Interviews
Top 50 String Coding Problems for Interviews
Top 50 Problems on Heap Data for Interviews
Top 50 Tree Coding Problems for Interviews
Top 50 Dynamic Programming Coding Problems
Top 50 Graph Coding Problems for Interviews
Top 50 Problems on Stack Problems for Interviews
Top 50 Problems on Linked List Problems for Interviews
Top 50 Problems on Matrix/Grid Problems for Interviews
Must Do Coding Questions for Product Based Companies
Must Do Coding Questions for Companies like Amazon

Design:
Topics covered:
  Vertical scaling
  Horizontal scaling
  Caching
  Load balancing
  Database replication
  Database partitioning

  Performance vs scalability
  Latency vs throughput
  Availability vs consistency



  */





  //------------------- 6 RECURSION QUESTIONS/number questions ------------------
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






  return (
    <div>
      <GoBackToHome />
      <h1> ES6 and TypeScript Practice</ h1>
    </div>
  )
}