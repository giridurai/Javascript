console.log("Start");

// setTimeout(()=>{
//     console.log("CallBack");
// }, 5000)

fetch("https://www.tryclosets.com/")
.then(function cb(){
    console.log("CallBack Google")
});
console.log("End");