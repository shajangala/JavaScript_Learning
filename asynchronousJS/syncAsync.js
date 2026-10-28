// Synchronous: It means JS executes oneline at a time, in order. The next statement waits until the current statement finishes
//Ex:
console.log("1");
console.log("2");
console.log("3");


// Asynchronous: It means some operations can complete later, allowing the JS to continue the execution of other code
// instead of waiting for the operation to finishes.
//Ex:
console.log("1");
setTimeout(()=>{
    console.log("2");
},2000);
console.log("3");

// promise
function login(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName === "") {
        reject(new Error("Username is empty"));
      } else {
        resolve({ name: userName, role: "Tester" });
      }
    }, 1000);                     
  });
}
/*
login("JS")
.then((user)=>{
    if(user.role==="Tester")
        console.log(`Access granted for ${user.name}`);
    else
        throw new Error(`Access denied for ${user.name}`);
})
.catch((err)=> console.log(err.message))
.finally(()=> console.log("Test Finsihed"));
*/


// async await
async function checkAccess(userName)
{
    try{
        const user= await login(userName);
        if(user.role=== "Tester")
            console.log(`Access granted:${user.name}`);
        else
            throw new Error(`Access denied:${user.name}`);
    }
    catch(error)
    {
        console.log(`Error:${error.message}`);
    }
    finally{
        console.log("Test finished");
    }
    return "Pass";
}
checkAccess("JS");
checkAccess("");
async function check()
{
const result= await checkAccess("Java");
console.log(result);
}
check();
// Both approach works .then(), .catch() & async, await for promise
// we use async, await instead of .then(),.catch() mainly because they make asynchronous code easier to read, understand and maintain
// especially when multiple steps are depend on each other and errors are handled with the normal try/catch/finally