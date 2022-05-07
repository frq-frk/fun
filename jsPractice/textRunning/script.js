let text = "Enter the text down to use that text here.."

let i = 0;

const p = document.getElementById("view");

const ip = document.getElementById("text");

ip.addEventListener("keyup",(event) =>{
    console.log("hereee")
    if(event.keyCode === 13){
        if(ip.value !== ""){
            text = ip.value;
            i = 0;
            p.innerHTML=""
            addChar();    
        }
    }
})


function addChar(){

    if(i == text.length){
        i = 0;
        p.innerHTML=""
    }

    p.innerHTML += text.charAt(i);
    i++;
    setTimeout(addChar,100);
}

addChar();