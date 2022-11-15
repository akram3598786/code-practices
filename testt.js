


function solv(nums, tgt){
    let n = nums.length;

    let mp = new Map();

    for(let i=0;i<n;i++){

        if(mp.get(nums[i])==undefined){
            mp.set(tgt-nums[i] , i);
        }else{
            return [mp.get(nums[i]), i];
        }
    }
}
let nums = [2,7,11,15], target = 9;

let pairs = solv(nums, target);
console.log(pairs);
