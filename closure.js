
function sum(a){
    let c = 9;
   return function sub(b){
       return function child(){
          console.log(a+b+c);
        }
    }
}
sum(2)(3)();
// OR ======
let sum2= sum(2)
let sum3 = sum2(3)
let sum4 =sum3();