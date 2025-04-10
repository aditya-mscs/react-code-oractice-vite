//Remember from tsx file. Just check logs here

function debounce(callback, delay) { // -----------> ALWAYS SAME AND CAN BE REUSED
  let timeout;
  console.log("Debounce function created with delay:", callback);

  return function (...args) { //------------> Closure. RETURN FUNCTION ARGS
    console.log("Debounced " + delay + " function called, resetting timer...");
    clearTimeout(timeout); //1st step - clear previous timer

    timeout = setTimeout(() => {
      console.log("Executing callback with args:", args);
      callback(...args);
    }, delay);
  };
}

// Example function to debounce
function search(query) {
  console.log("🔍 Searching for:", query);
}

// Debounced version
const debouncedSearch = debounce(search, 2000);

// Simulate user typing
debouncedSearch("a");
debouncedSearch("ab");
debouncedSearch("abc");
debouncedSearch("abcd");
//After 2 seconds, it will log "🔍 Searching for: abcd"

/**
Debounce function created with delay: ƒ search(query) {
  console.log("🔍 Searching for:", query);
}
VM2949:10 Debounced 2000 function called, resetting timer...
VM2949:10 Debounced 2000 function called, resetting timer...
VM2949:10 Debounced 2000 function called, resetting timer...
VM2949:10 Debounced 2000 function called, resetting timer...
VM2949:7 Debounce function created with delay: ƒ increment() {
  count++;
  console.log("Count:", count);
}
VM2949:10 Debounced 4000 function called, resetting timer...
VM2949:10 Debounced 4000 function called, resetting timer...
VM2949:10 Debounced 4000 function called, resetting timer...
VM2949:10 Debounced 4000 function called, resetting timer...
 */


// ************** Counter example
let count = 0;
function increment() {
  count++;
  console.log("Count:", count);
}
const debouncedIncrement = debounce(increment, 4000);
debouncedIncrement();
debouncedIncrement();
debouncedIncrement();
debouncedIncrement();
//After 4 seconds, it will log "Count: 1" because the last call to debouncedIncrement was the only one that executed the increment function.


