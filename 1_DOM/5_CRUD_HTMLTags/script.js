// ! CRUD ON HTML TAGS

// ! C - CREATE

let h1 = document.createElement("h1")
h1.innerText = "This is Giri"

document.body.appendChild(h1)

// ! R - Read
let h = document.querySelector("h1")
console.log(h)

// ! U - Update
let div = document.createElement("div")
div.innerText = "Perumal Here"
document.body.append(div)

div.innerText = "Perumal Again"

div.setAttribute("id", "container")
console.log(document.getElementById("container"))

let h2 = document.createElement("h2")
h2.innerHTML = "<h2>Hello Perumal</h2>"
document.body.appendChild(h2)
// document.body.replaceChild(h2,h1)

// ! D - Delete
document.body.removeChild(div)
document.body.removeChild(h1)
document.body.remove(h1)