/*
Problem 1: Reverse a string
Input:  "Automation"
Output: "noitamotuA"
Way 1: a for loop going backwards. Start at the last index (what is it? Topic 1!) and go down to 0, adding each character to a new string.
Way 2: a one-liner with built-in methods (split → reverse → join).
Edge cases: "" → "", and "a" → "a"
*/

const str= "Automation";
let rev_str="";
for(let i=str.length-1;i>=0;i--)
{
  rev_str = rev_str + str[i];
}
console.log(`Reverse of a given string is ${rev_str}`);

rev_str = str.split("").reverse().join("");
console.log(`Reverse of a given string is ${rev_str}`);

/*
Problem 2: Max and min in an array
Input:  [34, 7, 89, 2, 56]
Output: Max: 89, Min: 2
Without Math.max / Math.min (reviewers want the loop logic).
Hint: start by assuming the first element is both the max and the min. Then loop over the rest and update them when you find something bigger or smaller.
Think: why is starting with 0 as the max a bug? Test with [-5, -2, -9].
Bonus: the one-line way using Math.max and spread (...).
*/
const arr1 = [-5,-2,-9];
let max= arr1[0];
let min= arr1[0];
for(let i=1;i<arr1.length;i++)
{
  if(max < arr1[i])
     max=arr1[i];
  if(min> arr1[i])
    min = arr1[i];
}
console.log(`Max and Min numbers of given array is ${max} and ${min}`);

const arr2 = [34,7,89,2,56];
max= Math.max(...arr2);
min=Math.min(...arr2);
console.log(`Max and Min numbers of given array is ${max} and ${min}`);

// Assigning max value to 0 is not good for negative numbers because in the if condition the negative numbers won't enter because negavtive numbers are less than zero

/*
Problem 3: Prime numbers

A prime number is greater than 1 and divisible only by 1 and itself: 2, 3, 5, 7, 11…

Part a: write isPrime(n) that returns true/false.

isPrime(7)  → true
isPrime(10) → false
isPrime(1)  → false
isPrime(2)  → true
Hint: loop through possible divisors starting at 2. 
If n % i === 0 for any of them, it’s not prime. Which numbers do you need to check?
Edge cases: 0, 1, 2
*/

function isPrime(n)
{
  if(n <2)
  {
    return false;
  }
  if(n === 2)
  {
    return true;
  }
  if(n>2)
  {
   for(let i=2;i<n;i++)
   {
     if(n%i === 0)
       return false;
       
   }
    return true;
  }
  
  
}

let bool=isPrime(7);
console.log(`isPrime(7) -> ${bool}`);
bool=isPrime(10);
console.log(`isPrime(10) -> ${bool}`);
bool=isPrime(1);
console.log(`isPrime(1) -> ${bool}`);
bool=isPrime(2);
console.log(`isPrime(2) -> ${bool}`);

/*
Part b: use isPrime to print all the primes from 1 to 50.

2 3 5 7 11 13 17 19 23 29 31 37 41 43 47

Bonus: you only need to check divisors up to Math.sqrt(n). Why?
*/

function isPrime(n)
{
  if(n<2)
    return false;
  
  
    for(let i=2;i<= Math.sqrt(n);i++)
    {
      if(n%i === 0)
      {
        return false;
      }
      
    }
    return true;
  }

for(let j=1;j<=50;j++)
{
  if(isPrime(j))
  {
    console.log(j);
  }
}
/*
Problem 4: Pattern printing: star triangle
Input: n = 5
Output:
*
**
***
****
*****
Hint: you need two loops, one inside the other. The outer loop goes over the rows, 1 to n. The inner loop builds the stars for that row: how many stars does row i have?
Build each row as a string (row += "*"), then console.log(row) once per row.
Bonus: the same with numbers:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

const n=5;
for(let i=1;i<=n;i++)
{
  let row = "";
  for(let j=1;j<=i;j++){
    row= row+"*";
  }
  console.log(row);
}


for(let k=5;k>=1;k--)
{
  let row1="";
  for(let l=1;l<=k;l++)
  {
    row1+="*";
  }
  console.log(row1);
}

for(let p=1;p<=n;p++)
{
  let row2="";
  for(let q=1;q<=p;q++)
  {
    row2+=q +" ";
  }
  console.log(row2);
}