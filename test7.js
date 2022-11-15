

let flg = false;
function getColor() {
    // console.log(event.target);
   let container = document.getElementById("container");

   flg = !flg;
   if(flg){
    container.style.backgroundColor = 'salmon';
   }else{
    container.style.backgroundColor = 'white';
   }
    
    // 👇️ change background color
    // event.target.style.backgroundColor = 'salmon';
  
    // 👇️ optionally change text color
    // event.target.style.color = 'white';
  }
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