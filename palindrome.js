


function palin(str){

    let i = 0, j=str.length-1;
    while(i < j){
        if(str[i]!==str[j]){
            return false;
        }else{
            i++,j--;
        }
    }  
    return true;  
}


let str = "carac";

if(palin(str)) console.log("It is palindrome");
else console.log("It is not palindrome");



