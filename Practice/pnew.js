function smokeTest(testCaseName,delay=1000)
{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
if(testCaseName === "")
   reject(new Error("User should not be empty"));
else
   resolve({testCase: testCaseName, testCategory: "Smoke Test"});
},delay);
});
} 

Promise.all([
       smokeTest("login",3000),
       smokeTest("SignUp",2000),
       smokeTest("Home screen",4000)
])
.then((test)=> test.forEach((e)=>console.log(e.testCase)))
.catch((err)=> console.log("Error:",err.message))
.finally(()=> console.log("Test finsed"));

Promise.allSettled([
       smokeTest("login",3000),
       smokeTest("",2000),
       smokeTest("Home screen",4000)
])
.then((test)=> {
    test.forEach((x)=>{
        if(x.status === "fulfilled")
          console.log("Success:",x.value.testCase);
        else 
           console.log("Empty test case can't be executed",x.reason.message);
});

   } )

.finally(()=> console.log("Test finsed"));

Promise.race([
       smokeTest("login",3000),
       smokeTest("SignUp",2000),
       smokeTest("Home screen",4000)
])
.then((test)=> console.log("Winner:",test.testCase))
.catch((err)=> console.log("Error:",err.message))
.finally(()=> console.log("Test finsed"));