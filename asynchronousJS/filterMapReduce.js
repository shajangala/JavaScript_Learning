// map - change every item of an array, result is an array same length and never changes original array.
// filter - choose some items of an array, result is an array and same or shorter.
// reduce - combine into value of an array, result is one value

const num=[1,2,3,4];
console.log(num.map((n)=>n*2)); //[2,4,6,8]
console.log(num.filter((n)=>n>3)); //[4]
console.log(num.reduce((sum,n)=>(sum+n),0)); // [10] sum is initialised to zero
console.log(num.reduce((sum,n)=>(sum+n))); //[10] if sum is not intialised first value of array will be assigned to sum