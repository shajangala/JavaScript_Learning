// An array is a variable that can store multiple values in a single place. These values can be of the same or different data types.



// method 1 declaring array with values of same data type
let arr1 = ["Orange","Apple","pear"]
console.log(arr1);  // It will print whole array
console.log(arr1[0]); //It will print first element of the array
console.log(arr1[1]); //It will print second element of the array
console.log(arr1[2]); //It will print third element of the array
console.log(arr1[3]); //It will print undefined when array element does not exist
console.log("****",arr1[-1]);

//method 2 declaring array with values of different data type
let arr2 = ["JavaScript",true,345.7];
console.log(arr2);     //It will print whole array
console.log(arr2[0]);  //It will print first element of the array
console.log(arr2[1]);  //It will print second element of the array
console.log(arr2[2]);  //It will print third element of the array
console.log(arr2[3]);  //It will print undefined when array element does not exist

// method 3 declaring arrays as empty

let numbers=[];
console.log(numbers); // Prints empty array

//using new keyword 
let arr3 = new Array("red","green","yellow");
console.log(arr3);    //It will print whole array
console.log(arr3[0]); //It will print first element of the array
console.log(arr3[1]); //It will print second element of the array
console.log(arr3[2]); //It will print third element of the array
console.log(arr3[3]); //It will print undefined when array element does not exist
console.log(arr3[-1]); //It will print undefined when array element does not exist

//Empty array using new keyword
let names = new Array();
names[0] = "Java";
names[2] = "Phyton";
names[3] = "JavaSCript";
console.log(names);     //It will print whole array
console.log(names[0]);  //It will print first element of the array
console.log(names[1]);  //It will print undefined when array element does not exist
console.log(names[2]);  //It will print third element of the array
console.log(names[3]);  //It will print fourth element of the array
console.log(names[4]);  //It will print undefined when array element does not exist
console.log(names[-1]); //It will print undefined when array element does not exist