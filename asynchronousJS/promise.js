// Promise: A promise is an object that represents a result that was not ready yet but will be done in future
// We have 3 states of promises pending, fulfilled and rejected

function login(userName)
{
    return new Promise((resolve,reject) =>    //state: Pending
    {
        setTimeout(()=>{                     // still pending for 1second
            if(userName === "")
            {
                reject(new Error("Username is not empty")); //rejected
            }
            else{
                resolve({name: userName}) //fulfilled state
            }

        },1000);
    });
}
login("JavaScript")
.then((user) => console.log("Login Successful: ",user))
.catch((error) => console.log("Login Failed: ",error.message))
.finally(()=> console.log("Always runs"));

login("")
.then((user)=>console.log("Login successful",user))
.catch((error)=>console.log("Login failed:",error.message))
.finally(()=>console.log("Always runs"));

const p1 = login("JavaScript");
console.log("Right away:", p1); //immediate
setTimeout(() => console.log("After 2 seconds:", p1), 2000); //prints after 2 seconds

const order = new Promise((resolve,reject)=>{ //pending
    resolve("Order placed"); //fulfilled
    resolve("Order placed again"); //skipped
    reject(new Error("Payment failed")); //skipped
});
order
.then((msg)=> console.log("then:",msg))
.catch((err)=> console.log("catch:",err.message));

// only one resolve/reject will matters, so promise trust worthy. 


const p = new Promise((resolve, reject) => {
  reject(new Error("Timeout"));
  resolve("Done");
});
p.then((v) => console.log("then:", v))
 .catch((e) => console.log("catch:", e.message))
 .finally(() => console.log("finally"));


function smokeTest(testCaseName)
{
    return new Promise((resolve,reject)=>{ //pending
        setTimeout(() =>{
        if(testCaseName === "")
            reject(new Error("testCase can't be empty"));
        else
            resolve({test: testCaseName, category: "Smoke Test"});
    },3000);
    });
}

smokeTest("")
.then((testCaseName)=>{console.log("TestCase success:",testCaseName.test);
                       console.log("Category:",testCaseName.category);})
.catch((err)=> console.log("Failed:",err.message));

smokeTest("Login")
.then((msg)=> console.log("TestCase success:",msg))
.catch((err)=> console.log("Failed:",err.message))
.finally(()=> console.log("It is always executes"));

const x= new Promise((resolve,reject)=>{
    const status =200;
    if(status === 200)
        resolve("successful");
    else
        reject(new Error("Failed"));
}
);
x
.then((msg)=>console.log(msg))
.catch((err)=>console.log(err.message));

// .then(),  accept callback functions and runs when the promise is settled.
//.catch(), .finally()
// .then() runs when the promise is fulfilled.
// .catch() handles errors when the promise is rejected or when previous .then() callback throws an error.
// .finally() runs when promise is settled. It receives no arguements and it commonly used for cleanup tasks ,
// such as closing session.















