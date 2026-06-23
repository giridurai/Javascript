const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

handler = () => {
    console.log("parent")
}
handler2 = () => {
    console.log("child")
}

// ! Capturing Top to Down
// ! parent true -> Top
parent.addEventListener("click", handler, true)

child.addEventListener("click", handler2)


const parent2 = document.querySelector("#parent2");
const child2 = document.querySelector("#child2");
// ! Bubbling Down to top

parent2.addEventListener("click", handler)
child2.addEventListener("click", handler2)