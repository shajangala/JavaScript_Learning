// A callback is a function that you pass another function as an arguement. so that the other function can call it later.
// 1
function runStep(stepName, callback)
{
    console.log(`Running: ${stepName}`);
    callback();
}
runStep("Login",()=>console.log("Login Done"));


//2
const browsers=["chrome","IE","Firefox"];
browsers.forEach((browser)=>
{
    console.log(`Test started on ${browser} browser`);
});


//3
setTimeout(
    ()=> console.log("I will print after 2secs"),2000);

//4
function runTest(testName, onFinish)
{
    console.log(`Running ${testName}`);
    onFinish(testName);    //callback function
}
function report(name)
{
   console.log(`${name} is finished`);
}
runTest("test1",report)

setTimeout(()=>console.log("later"),1000);


// callback hell
// when async steps must happen in order, each next step goes inside the previous steps callback.
// The code keeps nesting deeper and turns into a pyramid.
setTimeout( ()=>{
    console.log("1.Open browser");
    setTimeout(()=>{
        console.log("2. Login");
        setTimeout(()=>{
            console.log("Search");
            setTimeout(()=>
            {
                console.log("Check out");
            },1000);
        },1000);
     },1000);
},1000);

// disadvantages
// Hard to read code, Hard to handle errors, hard to change-adding/removing a step means re-nesting everything.
