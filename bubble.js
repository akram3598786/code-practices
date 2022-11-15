


function bubble(ele, n){

    const swap=(n1,n2)=>{
      [ele[n1], ele[n2]] = [ele[n2], ele[n1]];
    }

    for(let i=0;i<n-1;i++){
        for(let j=i;j<n;j++){
            if(ele[i] > ele[j]){
                swap(i,j);
            }
        }
    }
}

let arr = [7,8,3,9,2,4,1];
bubble(arr,arr.length);
console.log(arr);