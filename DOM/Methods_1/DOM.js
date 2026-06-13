// console.log(document.body)
console.dir(document)
console.log(document.getElementById("heading"))
console.log(document.getElementsByClassName("container"))
console.log(document.getElementsByTagName("section"))

let text = document.getElementById("heading")
console.log(text)

let btns = document.querySelectorAll('.container h1')

for(let i of btns){
    console.log(i)
}