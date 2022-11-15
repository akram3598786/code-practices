

let arr = [6,3,9,4,6,7];

merger_sort(0,arr.length-1,0,arr);

function merger_sort(left,right, mid, arr){
    if(left >= right){
      return;
    }
    let mid = left + Math.floor((right - left)/2);
    merger_sort(left, mid-1, mid, arr);
    merger_sort(mid+1, right, right,mid, arr);
    merge(left, right, mid, arr);
}

function merge(left, right, mid, arr){
    let ele1 = arr.splice(left,mid+1);
    let ele2 = arr.splice(mid+1,right+1);

    let i=0, j=0;
    let cur = left;
    while(i<ele1.length && j < ele2.length){
        if(ele1[i] <= ele2[j]) arr[cur] = ele1[i],cur++,i++;
        else arr[cur] = ele2[j],cur++,j++;
    }
    while(i<ele1.length) arr[cur] = ele1[i],cur++,i++;
    while(j<ele2.length) arr[cur] = ele2[j],cur++,j++;
    return;
}
console.log(arr);