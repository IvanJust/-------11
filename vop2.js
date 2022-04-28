console.log("Задание 3");
let num = [100, 42, 51, 8, 91, 4, 13, 29, 61];
function prov(numb){
    let ii=0, ii2=0;
    for(let i in numb){ if(numb[i] > numb[i-1]){ii++}}
    for(let i in numb){ if(numb[i] < numb[i-1]){ii2++}}
    if(ii == numb.length - 1){ return console.log("«yes, ascending") }
    else if(ii2 == numb.length - 1){ return console.log("«yes, descending") }
    else {return console.log("no")}
}
console.log(num);
prov(num);
num.sort(function(a, b){return a - b});
console.log(num);
prov(num);
num.sort(function(a, b){return b - a});
console.log(num);
prov(num);