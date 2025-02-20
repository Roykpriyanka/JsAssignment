/*
QUESTION:  "Counter Module Using Closures'
Create a createCounter() function that can perform three methods:
1. increment(): Increases the counter by 1 and prints the new value.
2. decrement(): Decreases the counter by 1 and prints the new value.
3. getCount(): Returns the current count value.
Ensure that the counter value remains private and cannot be accessed directly.
Implementation Details:
1. The counter value should not be directly accessible from outside the function.
2. Use closures to maintain the state of the counter.
3. Test the implementation by creating an instance and calling the methods.
*/




function createCounter() {
    let cnt = 0; 
  
    return {
      increment: function () {
        cnt++;
        console.log(cnt);
      },
      decrement: function () {
        cnt--;
        console.log(cnt);
      },
      getCount: function () {
        return cnt;
      }
    };
  }
  

  const counter = createCounter();
  
  counter.increment(); 
    counter.increment(); 
  counter.decrement(); 
  console.log(counter.getCount()); 
  
 
  console.log(counter.cnt);
  