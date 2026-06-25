// console.log("Start");

// setTimeout(()=>{
//     console.log("CallBack");
// }, 5000)

// fetch("https://www.tryclosets.com/")
// .then(function cb(){
//     console.log("CallBack Google")
// });
// console.log("End");


// First it will move print Start
// Then webAPI - setTimeout Will run by the Brower
// Then Fetch API is Fetching by the Browser
// Then it will print the End 
// Now Promise based Web APIs will moves to the MicroTask Queue
// Then Timer Based will be moves to the CallBack Queue
// Finally, Here Event Loop will be waked and checking the microtask queue is empty or not.
// If it is Empty it will run the Callback Queues
// If no it will first run the Microtask Queue then Call Back Queues.

console.log("Start");

setTimeout(() => console.log("T1"), 0);

Promise.resolve()
  .then(() => console.log("P1"));

Promise.resolve()
  .then(() => console.log("P2"));

setTimeout(() => console.log("T2"), 0);

console.log("End");