var h1 = document.querySelector('h1')
var p = document.querySelector('p')
var h2 = document.querySelector('h2')
var ul = document.querySelector('ul')

function getRandomColor(){
    var letters = '0123456789ABCDEF'
    var color = '#';
    for(var i=0;i<6;i++){
        var r = Math.floor(Math.random()*16);
        console.log(r);
        color = color+letters[r];
    }
    return color
}
// console.log(h1)

function changeColor(){
    var rc = getRandomColor()
    h1.style.color = rc;
    p.style.color = rc;
    h2.style.color = rc;
    ul.style.color = rc;
}

setInterval(changeColor,1000)