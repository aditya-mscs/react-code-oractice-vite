//Remember these 5 lines -

// export const debounce = (func, delay) => {
//   let timeoutId; //1

//   return (...args) => { //2
//     clearTimeout(timeoutId); //3
//     timeoutId = setTimeout(() => { //4 timeout = setTimeout
//       func(...args); //5
//     }, delay);
//   };

// };

// This function returns a debounced version of the callback function.
// The returned function will delay the execution of the callback until after the specified delay has passed since the last time it was invoked.
// It uses a closure to maintain the timeout variable across invocations.

export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number

): ((...args: Parameters<T>) => void) => {

  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  // console.log("Debounce function created with delay:", delay, timeoutId); //ON EVERY RENDER

  return (...args: Parameters<T>) => {

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);

  };
};