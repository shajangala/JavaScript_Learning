//1
let x;
console.log(x,typeof x); // undefined undefined

//2
console.log(typeof null,typeof [],typeof NaN); //object object number

//3
const arr=[1,2,3];
arr.push(4);
console.log(arr); //[1,2,3,4]

//4
function test()
{
    if(true)
    {
        var msg = "inside";
    }
    console.log(msg);
}
test(); //inside

//5
let count=1;
{
    let count=2;
}
console.log(count); //1

//6
console.log(Boolean("0"),Boolean(0),Boolean([]),Boolean("")); // true,false,true,false

//7
console.log(NaN === NaN); //false

// Create a const testCase with id, name, status: "Pending". Change the status to "Passed" and print it. Then try reassigning testCase and read the error message.
const testcase={
    id: 1,
    name: "Java",
    status: "Pending"
}
testcase.status="Passed";
console.log(testcase)
/*testcase={
    name2:"Script"
}
console.log(testcase);
*/

// Make an array with one value of each type (string, number, boolean, null, undefined, BigInt, Date) and print typeof for each.
let arr1=["Java",25,false,null,undefined,10n,new Date()];
console.log(typeof arr1[0]); //string
console.log(typeof arr1[1]); //number
console.log(typeof arr1[2]); //boolean
console.log(typeof arr1[3]); //object
console.log(typeof arr1[4]); // undefined
console.log(typeof arr1[5]); //BigInt
console.log(typeof arr1[6]); //object

//Create let actualTitle = "". Print "Title missing" if it’s falsy, otherwise "Title: …". Test it with both values.
let actualTitle="";
if(actualTitle)
{
    console.log(`Title: ${actualTitle}`);
}
else{
    console.log("Title missing");
}

actualTitle="Hello Ms.India";
if(actualTitle)
{
    console.log(`Title: ${actualTitle}`);
}
else{
    console.log("Title missing");
}

function title(name1)
{
    if(name1)
    {
        console.log(`Title: ${name1}`);
    }
    else
    {
        console.log("Title missing");
    }
}
title("");
title("Ms.Universe");


const test_result={
testName: "Login test",
status: "Pending",
errorMessage:""
}
test(test_result.errorMessage);
test_result.status="Failed";
test_result.errorMessage="Invalid password";
console.log(test_result);
test(test_result.errorMessage);
function test(eM)
{
 if(eM)
{
   console.log(`Login test FAILED: ${eM}`);
}
else
{
console.log("Login test PASSED");
}
}
console.log(typeof test_result.testName); //string
console.log(typeof test_result.status); //string
console.log(typeof test_result.errorMessage); //string

let values=["Chrome", 120,true,null,undefined,25n,new Date()];
for(let i=0;i<values.length;i++)
{
    console.log(`${values[i]} -> ${typeof values[i]}`);
}

const formData ={
    username: "shamili",
    password: "",
    age: 0,
    city: null
}
let count1=0;
for(const key in formData)
{
    if(formData[key]){
        console.log(`${key}: OK(${formData[key]})`);
    }
    else{
        console.log(`${key}: MISSING`);
        count1++;
    }
}
console.log(`Missing fields: ${count1}`);