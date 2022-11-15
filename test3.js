

function getColor(){

 let inputcode = document.getElementById("inputcode").value;
 let ele = document.getElementById("ele");
 let ele2 = document.getElementById("ele2");
    console.log(inputcode);
//   document.bgColor = inputcode;
    ele.style.backgroundColor  = inputcode;
    ele2.style.color = inputcode;
}