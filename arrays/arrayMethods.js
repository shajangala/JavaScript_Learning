// Array Methods
let num = [10,60,40,30,20];
console.log(num);

//push()- Add the new element at the end of the array.

num.push(90);
console.log(num);

//pop()- Delete the last element of the array.
num.pop();
console.log(num);

//unshift()- Add the new element starting of the array.
num.unshift(100);
console.log(num);

//shift()- Delete the first element of an array.
num.shift();
console.log(num);

//length- Gives the full length of array.
console.log(num.length);

//indexOf()- Gives the index of the given element.
console.log(num.indexOf(40)); // Prints the index as 2

//slice()- It creates the copy of an array with given index. slice(start,end) here end is taken as end-1
let copyNum = num.slice(1,4);// It will print starting index from 1 to ending index will be 3. [60,40,30]
console.log(copyNum);

//splice()- It alters the original array like add, remove and replace of elements in the array.
// removing element using splice -splice(start,delete)
num.splice(2,1); //It starts to remove elements from index 2 and removes one element.
console.log("Removing number in the array using splice",num);

// adding element using splice -splice(start,0,item1,item2,item3...)
num.splice(1,0,1); //add single element to the array at index 1
console.log(num);
num.splice(1,0,80,90); // adds multiple elements to the array at a time at index 1
console.log("Adding number in the array using splice",num);

//replace element using splice -splice(start,delete,replaceitem)
num.splice(3,1,100);
console.log("Replacing the element in the array using splice",num);

//includes()- It checks whether the element is present in the array or not. It gives boolean value, if element found returns true and vice versa.
console.log(num.includes(90));
console.log(num.includes(50));
// We can also specify the index from which the search should start. includes(element,startIndex)
console.log(num.includes(20,3)); // starts searching 20 number from index 3.
console.log(num.includes(90,3));

//sort()- It uses for sorting the elements of the array. It works with strings and not good for numbers.
console.log(num.sort()); // Gives wrong output
console.log(num.sort((a,b)=> a-b)); // using bubble sort we can sort the numbers of an array.

//reverse()- It gives the reverse order of the given array.
console.log(num.reverse());