// @ts-nocheck Temporary ignore

//Remember these 5 lines -

export const debounce = (callback, delay) => { //_________ (callback, delay) ______ALSO WRITE FROM timeoutId perspective. 3 times in first 4 lines
  let timeoutId; //✅ 1. Store timeout reference for clearing

  return (...args) => { //2 _____________________________ VAAAAAAA ✅ 2. Return a new debounced function

    clearTimeout(timeoutId); //3 ____ I wrote timeoutId.clearTimeout(timeoutId);
    timeoutId = setTimeout(() => { //4 _____________________________ timeout = setTimeout VA ✅ 4. Set new delay
      callback(...args); //✅ 5. Execute callback after delay
    }, delay);
  };
};


// This function returns a debounced version of the callback function.
// The returned function will delay the execution of the callback until after the specified delay has passed since the last time it was invoked.
// It uses a closure to maintain the timeout variable across invocations.

// •	T extends (...args: any[]) => void means:
// •	The type T must be a function,
// •	It can take any number of arguments (...args: any[])

/*
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number

): ((...args: Parameters<T>) => void) => { //The returned function will take the same arguments as the original function T, and it returns nothing

  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  // console.log("Debounce function created with delay:", delay, timeoutId); //ON EVERY RENDER

  return (...args: Parameters<T>) => {

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);

  };
};

*/