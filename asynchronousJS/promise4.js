// Promise.race():
// .then() runs when the first Promise to settle is fulfilled.
// .catch() runs when the first Promise to settle is rejected.
// .finally() runs whether the combined Promise fulfills or rejects.
// It settles with the result of the first Promise to settle,
// whether fulfilled or rejected.

function login(userName,delay = 1000)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
                if(userName === "")
                    reject(new Error("Username should not empty"));
                else
                    resolve({name:userName,Role: "Tester"});
        },delay);
    })
}
Promise.race([
    login("Java",3000),
    login("Script",2000),  //fastest
    login("JS",4000)
])
.then((user)=>console.log("Winner:",user.name))
.catch((err)=> console.log("Error:",err.message))
.finally(()=> console.log("Promise.race always checks fatest promise settled"));

Promise.race([
    login("Java",3000),
    login("Script",4000),  
    login("",2000) //fastest
])
.then((user)=>console.log("Winner:",user.name))
.catch((err)=> console.log("Error:",err.message))
.finally(()=> console.log("Promise.race always checks fastest promise settled"));