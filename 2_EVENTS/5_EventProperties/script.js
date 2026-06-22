btn = document.getElementById("btn")

// ! event.type
btn.addEventListener("click", function(event) {
    console.log("Event Type: ", event.type)
})

// ! event.target
btn.addEventListener("click", function(event) {
    console.log("Event Target: ", event.target)
})

// ! event.target.textContent
btn.addEventListener("click", function() {
    console.log("Text Inside HTML: ", event.target.textContent)
})

// ! keyboard Events    
btn.addEventListener("keydown", function(event) {
    console.log(event.key);
})

// ! event.clientX & event.clientY
btn.addEventListener("click", function(event) {
    console.log("Event Client X: ", event.clientX);
    console.log("Event Client Y: ", event.clientY);
})

link = document.querySelector("a")
// ! event.preventDefualt()
link.addEventListener("click", function(event) {
    event.preventDefault();
})