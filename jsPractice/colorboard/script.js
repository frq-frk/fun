const doc = document.getElementById("container")

const SQUARES = 800;

for(var i = 0;i<SQUARES;i++){

    const sqr = document.createElement("div");

    sqr.classList.add("square");

    doc.appendChild(sqr);

    sqr.addEventListener("mouseover",()=>{

        const color = randomColor();

        sqr.style.backgroundColor = color;
        sqr.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

    })

    sqr.addEventListener("mousedown",()=>{

        const color = randomColor();

        sqr.style.backgroundColor = color;
        sqr.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

    })

    sqr.addEventListener("mouseout",() =>{
        sqr.style.backgroundColor = "#1d1d1d"
        sqr.style.boxShadow = "0px 0px 2px #000"
    })

}

function getRandomInteger(min,max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

function randomColor(){
        return `rgb(${getRandomInteger(0,255)},${getRandomInteger(0,255)},${getRandomInteger(0,255)})`
}