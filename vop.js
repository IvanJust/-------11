console.log("Задание 1");
const items = ["items", "apple", "items", "orange", "items", "apple"];
console.log(items);
let mo = items[0];
    let n = 0;
function FindItem(item){
    let map = {};
    for(var i = 0; i < items.length; i++){
        if(!map[items[i]]){
            map[items[i]]=1;
        }else{
            ++map[items[i]];
            //console.log(map[items[i]])
            if(map[items[i]]>map[mo]){
                mo = items[i];
            }
        }
    }
    n = map[mo];
    return mo;
}
console.log(`Элемент ${FindItem(items)} встречается ${n} раз(а)`)