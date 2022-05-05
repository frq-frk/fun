let arr = [1,2,3,4,5,6,7,8,9,10];

let res = "";

arr.forEach(myfunc);

function myfunc(value){
    let ans = 19 * value;
    res = res + "19\t*\t"+value+"\t=\t"+ans+"<br>";
}

document.getElementById("display").innerHTML = res;

// splitting arrays into two

// using for each

odd = []
even = []

arr.forEach(function(value,index){
    if(index % 2){even.push(value)}
    else {odd.push(value)}
})

console.log(odd);
console.log(even);

// using map

odd2 = arr.map(function(value,index){
    if(index%2 == 1){return value}
})

even2 = arr.map(function(value,index){
    if(index%2 == 0){return value}
})

console.log(odd2);
console.log(even2);

// usinf filter

odd3 = arr.filter(function(value,index){
    if(index%2 == 1){return value}
})

even3 = arr.filter(function(value,index){
    if(index%2 == 0){return value}
})

console.log(odd3);
console.log(even3);