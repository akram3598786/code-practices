
function fib(n){
  let num1 = 0, num2 = 1, next;

  for(let i=0;i<n;i++){
    console.log(num1);
    next = num1+num2;
    num1 = num2;
    num2 = next;
   
  }
}
fib(5);

// ==============================================
function fib(number){
  let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
let finn = 0;
let out =[];
for (let i = 1; i <= number; i++) {
 // console.log(n1);
 finn+=n1 + n2;

  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
  out.push(n1)
}
console.log(out)
}
fib(5);
