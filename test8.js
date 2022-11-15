
/*
Given an arrangement of students in a line. We need to find the next longest student in front of each student in that line. If no greater element is present input -1.
example = [10,13,7,15,8]
Ouput - [13,15,15,-1, -1]
*/

function nextGreater(ele, n) {

    let stck = [], out = [];
    for (let i = 0; i < n; i++) {
        out.push(-1);
    }
    stck.push(0);
    for (let i = 1; i < n; i++) {
        while (stck.length != 0 && ele[stck[stck.length - 1]] <= ele[i]) {

            out[stck[stck.length - 1]] = ele[i];
            stck.pop();
        }

        stck.push(i);
    }
    console.log(out);

}
let arr = [10, 13, 7, 15, 8];
nextGreater(arr, arr.length);