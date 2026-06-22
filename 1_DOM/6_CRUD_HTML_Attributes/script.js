// ! CRUD 

// ! C - CREATE - setAttribute()
h1 = document.querySelector(".heading1")
// console.log(h1)
h1.setAttribute("class", "heading")
console.log(document.querySelector(".heading"))

// ! R - READ - getAttribute()
console.log(h1.getAttribute("class"))

// ! U - UPDATE - setAttribute()
h1.setAttribute("class", "head")
console.log(document.querySelector(".head"))

// ! - Delete - removeAttribute()
h1.removeAttribute("class")
console.log(document.querySelector(".head"))
console.log(document.querySelector(".heading1"))