
const loginPromise = new Promise((resolve, reject)=>{
    let port =  3000;
    if(port === 3000){
        resolve(true)
    }else{
        reject("something wrong");
}
});

loginPromise
.then((res)=>console.log("login done"))
.catch((err)=>console.log(err));