

 let cnt = 0;
 function getData(){
     console.log("doing task", cnt++)
 }
 
 function debounce(fun, delay){
     let timerId;
     return function(){
         let args = arguments;
         let context = this;
        if(timerId) clearTimeout(timerId);
         timerId = setTimeout(() => {
             getData.call(context,args);
         }, delay);
     }
 }
 
 const goodfun = debounce(getData, 300);

let ob ={
    name : "Akram"
}

let ob2 ={
    name : "Akram"
}
//console.log(JSON.stringify(ob) == JSON.stringify(ob2)) // give true
// console.log({...ob} == {...ob2})  always false




