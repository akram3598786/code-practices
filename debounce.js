/*
let obj = {
    a : 2,
    b : 3,
    c : 4
}
//console.log(obj)
for(key in obj){
   // console.log(obj[key])
}
let arry = [2,3,4,5,6,7];

for(let k of arry){
    //console.log(k);
}
 var arr = [1,2,3,4,5]

 for(var i=0; i<arr.length; i++){
   //setTimeout(()=>console.log(arr[i],i),i*1000)
 }
//  console.log('value of i after for loop',i)

function display(i){
    setTimeout(()=>console.log(this[i],i),i*1000);
}
 
 for(var i=0; i<arr.length; i++){
    // display.call(arr, i);
 }
 */

const debounce = (func, delay) => {
    // if the request or call is not interrupted for delay milliseconds
    // then the function should be fired
    let debouncing
    return function(){
        clearTimeout(debouncing)
        debouncing = setTimeout(()=>func.apply(this,arguments), delay )
    }
}

let ob ={
    name : "Akram"
}

let ob2 ={
    name : "Akram"
}
//console.log(JSON.stringify(ob) == JSON.stringify(ob2)) // give true
// console.log({...ob} == {...ob2})  always false




