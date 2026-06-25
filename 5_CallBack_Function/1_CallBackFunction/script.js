setTimeout(()=>{
    console.log("Timer")
},1000)

function x(y){
    console.log("x")
    y()
}
x(function y() {
    console.log("y")
})