
function Fibonacci(n){
    let n1= 0, n2=1, next;
    for(let i=1;i<=n+1;i++){
        // console.log(n1)
        if(i==n)  console.log(n1);
       
        next = n1+n2;
        n1= n2;
        n2 = next;
    }
}

Fibonacci(3)

function fib(n){
    if(n==1 || n==0){
        return n;
    }

    return fib(n-1)+fib(n-2);
}

// console.log(fib(6));