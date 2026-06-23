let a = (p) => {
    console.log(`printing: ${p}`)
}

async function b() {
    console.log("hi")
    await a(20)
    console.log("end")
}

b()