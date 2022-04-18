var tasklist = document.getElementsByTagName("li");

var i;

for(i = 0; i<tasklist.length; i++){
  
    var span = document.createElement("span");

    var txt = document.createTextNode("\u00D7");

    span.className = "close";

    span.appendChild(txt);

    tasklist[i].appendChild(span);
}

function addCloseFunction(){
    var closelist = document.getElementsByClassName("close");

    for(i=0;i<closelist.length;i++){
    closelist[i].onclick = function(){
        var d = this.parentElement;
        d.style.display = "none";
        }
    }
}

addCloseFunction();


function addTask(){
    var todoItem = document.createElement("li");

    var input = document.getElementById("t-add").value;

    if(input === ""){
        alert("todo must not be empty");
    }else{

        var txt = document.createTextNode(input);

        todoItem.appendChild(txt);

        var span = document.createElement("span");

        var txt = document.createTextNode("\u00D7");

        span.className = "close";

        span.appendChild(txt);

        todoItem.appendChild(span);

        document.getElementById("myTasks").appendChild(todoItem);

    }


    document.getElementById("t-add").value = "";

    addCloseFunction();
}