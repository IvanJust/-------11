console.log("Задание 2");
let Str = "hIidsHJKJDiJDHOJRDhrehhfrh";
console.log("Строка: ", Str);
function strUpAndDown(str){
    let newStr1 = "", newStr2 = "";
    for(let i in str){
    if(str[i] === str[i].toLowerCase()){ newStr1 += str[i].toLowerCase() }
        else { newStr2 += str[i].toUpperCase() }
    }    
    if(newStr1.length == newStr2.length){ str = newStr1;
        console.log(`Равное количество строчных и прописных(${str.length}): `, str) }
        else if(newStr1.length > newStr2.length){ str = newStr1;
        console.log(`Больше строчных(${str.length}): `, str)}
        else{ str = newStr2;
        console.log(`Больше прописных(${str.length}): `, str) }
} 
strUpAndDown(Str);