console.log("Start")

let i = 0   
document.getElementById("btn").addEventListener("click", ()=>{
    console.log(`CallBack: ${i}`)
    i += 1
})

console.log("End")