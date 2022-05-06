const display = document.getElementById("display");

const btns = document.querySelectorAll(".btn");

btns.forEach(b => {

    b.addEventListener("click",() => {

        switch(b.innerHTML){

            case 'C': display.innerHTML = "";
                        break;

            case '←': display.innerHTML = display.innerHTML.slice(0,-1);
                        break;

            case '=': try{
                            display.innerHTML = eval(display.innerHTML)
                        }catch{
                            display.innerHTML = "SYNTAX ERROR!!!"
                        }   
                        
                        break;

            default :
                    display.innerHTML += b.innerHTML;

        }

    })

})