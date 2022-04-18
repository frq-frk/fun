function calculate(){
    var m = Number(document.getElementById("maths").value);
    var p = Number(document.getElementById("physics").value);
    var c = Number(document.getElementById("chemistry").value);

    // console.log(m);
    // console.log(p);
    // console.log(c);

    var percent = ((m+p+c) / 300) * 100;

    var grad;

    if(percent > 80)
        grad = "A";

    else if(percent > 70)
        grad = "B";
    
    else if(percent > 40)
        grad = "c"
    
    else grad = "F"

    // console.log(percent);

    document.getElementById("result").innerHTML = "The grade calculated is "+grad;
}