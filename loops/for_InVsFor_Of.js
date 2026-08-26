// For in loops are good for iterating the key value of an object.
const person={
    name: "Java",
    language: "yes",
    Dynamic: "yes"
};
for(const key in person)
{
    console.log(key); // It will print the key of the object.
    console.log(person[key]); //It will print the value of the key object.
    console.log();

}

// For of loops are good for iterating the value of an arrays and strings. It will give only values of array.
console.log("*** For of loop ***");
const arr1 = ["Java",25,"yes","Script"];
for(const x of arr1)
{
    console.log(x); // prints the values of an array
}

const str1= "JavaScript";
for(const c of str1)
{
    console.log(c); // prints the value of an string
}

// For each loop good for arrays will give both index and values of an array . 
console.log("*** For Each loop ***");
const arr2=["Banana","Apple","berry"];
arr2.forEach((value,index)=>
{
    console.log(value);
    console.log(index);
});
