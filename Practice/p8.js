/* 
Create a Set from ["Chrome", "Firefox", "Chrome", "Edge", "Firefox"]. Print it and its size.
*/

const set1= new Set(["Chrome", "Firefox", "Chrome", "Edge", "Firefox"]);
console.log(set1); // Set(3) {"Chrome", "Firefox", "Edge"}
console.log(set1.size); //3

/* Add "Safari", try to add "Chrome" again, and check has("Edge"). Then delete "Firefox". Print the final Set. */
set1.add("Safari");
set1.add("Chrome");
console.log(set1.has("Edge")); //true
console.log(set1.delete("Firefox"));// deletes the Firefox it exits and deletes so returns true.
console.log(set1); //Set(3) {"Chrome","Edge","Safari"}

/*   Remove duplicates from [3, 1, 3, 2, 1] with a Set → [3, 1, 2]. */
const arr1= [3,1,3,2,1];
console.log([...new Set(arr1)]);

/* Predict: new Set([1, "1", true, "true", 1]).size. Why? */
const set2=new Set([1,"1",true,"true",1]);
console.log(set2.size); // 4 here 1 and "1" are differt true and "true" are different  here set checks like === strict comparison 

/* Create a Map of test name → status: Login → Pass, Search → Fail, Cart → Pass.

get the status of Search
update Search to Pass
print the size
loop and print Login: Pass, etc. */
const testName=new Map([["Login","Pass"],["Search","Fail"],["Cart","Pass"]]);
testName.forEach((value)=> console.log(value));
testName.set("Search","Pass");
console.log(testName);
console.log(testName.size);//3

for(const [key,value] of testName)
{
    console.log(`${key}:${value}`);
}

//Coding: create a class TestRun with static total = 0. 
// Every time a new TestRun is created, increase total (hint: in the constructor). Create 3 objects and print TestRun.
// total → 3.

    class TestRun{
        static total = 0; // static variable
        constructor()    // when object created for class it will run automatically.
        {
             TestRun.total++; // static variable access by classname.total
        }
    }
    new TestRun(); // constructor invoked
    new TestRun();
    new TestRun();
    console.log(TestRun.total); //3
