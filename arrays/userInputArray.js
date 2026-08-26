const { stdin } = require("process");
const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter array elements using comma,",(input)=>{
   let arr1=input.split(",");
   console.log(arr1);
rl.close();
});