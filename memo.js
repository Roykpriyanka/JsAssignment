/*
QUESTION: Create a memoizedFibonacci() function that optimizes Fibonacci number calculations
by caching previously computed results using closures.
Implementation Details:
1. Use a closure to maintain a cache object that stores previously computed
Fibonacci numbers.
2. If a Fibonacci number is already in the cache, return it directly instead of
recalculating it.
3. Implement the function efficiently using recursion.
4. Test the implementation by computing Fibonacci numbers multiple times and
observing performance improvements.
*/
function memoizedFibonacci() {
    const cache = {}; 
  
    function fibonacci(n) {
      if (n <= 1) return n;
  
      
      if (cache[n]) {
        return cache[n];
      }
  
      
      cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return cache[n];
    }
  
    return fibonacci;
  }
  
 
  const fib = memoizedFibonacci();
  
  console.time("First Calculation");
  console.log(fib(40));
  console.timeEnd("First Calculation");
  
  console.time("Second Calculation");
  console.log(fib(40)); 
  console.timeEnd("Second Calculation");
  
  console.log(fib(50)); 
  console.log(fib(60)); 
  