
var num = [100, 42, 51, 8, 91, 4, 13, 29, 61];
var clon = Object.assign([], num);
function prov(numb){
    if(numb == clon.sort(function(a, b){ return a - b})){
        console.log("«yes, ascending")
    } else if(numb == clon.sort(function(a, b) { return b - a })){
        console.log("«yes, descending")
    } else{
        console.log("no")
    }
}
prov(num);
num.sort(function(a, b){ return a - b});
prov(num);
num.sort(function(a, b){ return b - a});
prov(num);