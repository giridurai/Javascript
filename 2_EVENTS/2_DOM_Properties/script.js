let btn = document.querySelector("button")

btn.onclick = () => {
    console.log("Button Clicked");
}

btn.onmouseenter = () => {
    console.log("Mouse Enter")
}
btn.onmouseleave = () => {
    console.log("Mouse Left");
}