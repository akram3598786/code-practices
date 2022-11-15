
/*
Given a binary array, find the index of 0 to be replaced with 1 to get a maximum length sequence of continuous ones.

For example, consider array { 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 }. The index to be replaced is 7 to get a continuous sequence of length 6 containing all 1’s.
*/

/*
function solv(ele, n){
  let prev_zero = -1;
  let mxCount = -10;
  let mxInd = 0;

  for(let i=0;i<n;i++){
    if(ele[i] == 0){
      if(i-prev_zero > mxCount){
          mxCount = i-prev_zero;
           mxInd = i;
      }
      prev_zero = i;

    }
  }
  if(n - prev_zero > mxCount) mxInd = prev_zero;
  console.log(mxInd, mxCount);
} */

function solv(ele,n){
 let mxCount = 0, mxInd=-1;
  for(let i=0;i<n;i++){
    if(ele[i] == 0){
      // check leftside
      let l = i-1,lcount = 0;
      while(ele[l]!=0 && l>=0){ lcount++,l--;}

      // check rightside
      let r = i+1, rcount = 0;
      while(ele[r]!=0 && r<n){ rcount++,r++; }
      // chexking max len of 1's sequence
      if(lcount+rcount > mxCount){
        mxCount = lcount+rcount;
        mxInd = i;
      }

      console.log(i, mxCount)

    }
  }
  console.log(mxInd)
}

// let arr = [1,1,1,1, 0,1,1,1,1,1, 0, 1, 1, 1, 0, 1];
let arr = [ 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 ];
let n = arr.length;
solv(arr, n);


// var name = "Akram";
// let parent=(context)=>{
 function child(){
  // console.log(context)
  // let name = "sdcsdc"
    //  console.log(this)
    let name ="sjkdc"
     
  return function gchild(){
      console.log(this.name);
     }
    //  gchild()
  }
  // child();
// }

let obj = {
  name : "Akky"
}
//  let ch = parent();
//  console.log(ch)
//  child.call(obj);
//  let ch = child.call(obj)
// console.log(ch)
// ch.call(obj)