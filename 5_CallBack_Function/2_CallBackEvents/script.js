function attachEvent(){
    let count = 0;


document.getElementById("btn").addEventListener("click", function xyz() {
    console.log("Button Clicked: ", ++count);
})}

attachEvent();