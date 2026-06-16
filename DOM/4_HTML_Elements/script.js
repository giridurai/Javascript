// ! 1. Inner HTML
h = document.querySelector(".heading")
h.innerHTML = "<i> Hello Perumal Here </i>"
// console.log(h.innerHTML)
// ! Inner HTML Includes Tags

// ! 2. Innrer Text
h2 = document.querySelector(".heading2")
h2.innerText = "This is Modified Inner Text"
// ! Inner text Does not Includes Tags

// ! 3. element.Attribute = newValue
h3 = document.querySelector(".heading3")
// ! element.attribute
h3.id = "greeting"
h3.innerText = "Id changed to Greeting"

h4 = document.getElementById("greeting")
console.log(h4)

// ! 4. style - element.style.property = value
h5 = document.querySelector(".heading4")
h5.style.color = "red";
h5.style.backgroundColor = "yellow"
h5.style.fontSize = "70px"
h5.style.border = "5px solid green"
h5.style.padding = "20px"
h5.style.textAlign = "center"

// ! 5. setAttribute() - element.setAttribute("attribute", "value")
h6 = document.querySelector(".heading5")
h6.setAttribute("id", "head")
h6.setAttribute("title", "Welcome")