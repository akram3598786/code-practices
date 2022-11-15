

let arr = [6,3,9,4,6,7];

selection(arr);

function selection(arr){
    let n = arr.length;

    for(let i=0;i<n;i++){
        let min = i;

        for(let j=i;j<n;j++){
            if(arr[j] < arr[min]) min = j;
        }

        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
}
console.log(arr);