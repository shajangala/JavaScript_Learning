// spread Operator
// Spread -> expands items
// Rest -> collects items
// example1: Merge two arrays
const a=[1,2];
const b=[3,4];
const result=[...a,...b];
console.log(result); // [1,2,3,4]

//example2: copy of an array
const a1=[1,2];
const copy=[...a1];
console.log(copy);// [1,2]
copy.push(3); // original array won't change 
console.log(a1); //[1,2]
console.log(copy); //[1,2,3]

// example 3: Spread in a function call
const nums=[2,3,4,10];
console.log(Math.max(...nums)); //10

//example 4: Spread with objects
const user={name:"Shamili",role:"QA"};
const updated={...user,role:"Lead"};
console.log(user); // {name: "Shamili,role:"QA}
console.log(updated); // {name: "Shamili, role:"Lead"}

// Rest operator
function(...numbers)
{
    console.log(numbers);
}
add(10,20,30,40);