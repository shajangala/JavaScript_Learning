// An array stores duplicates values so to overcome this Set came into picture.
// Set is a collection of unique values

// empty set
const empty= new Set();

// from an array
const browsers=new Set(["Chrome","Edge","Chrome"]); 
console.log(browsers); //Set(2) {'Chrome','Edge'}

//from an string
const str=new Set("hello");
console.log(str); //Set(4) {'h','e','l','l','0'}

//Set methods
const b=new Set();
b.add("Chrome"); // adds single value to Set 
b.add("Edge").add("Chrome"); //add returns Set so we can chain
console.log(b); //Set(2) {'Chrome','Edge'} 2nd value Chrome will be ignored 
console.log(b.has("Edge")); //true has checks the value is present in set
console.log(b.has("chrome")); //false has is case senstive  and similar to ===
console.log(b.delete("Edge")); // true it existed and removed
console.log(b.delete("Firefox")); // false value isn't present
console.log(b.size); //returns number of values present
console.log(b.clear()); //removes everything returns undefined
console.log(b); // Set(0) {}

// How uniqueness checked
const s1= new Set([1,'1',1]); // 1 and '1' are different data types both kept
console.log(s1); // Set(2) {1,'1'}
const s2= new Set([{id:'1'},{id:'1'}]); //both values are kept because objects are compared by reference not by content
console.log(s2);

// Looping through Sets
// It has no index so Set[0] won't work
const statuses =new Set(['Pass','Fail']);
for(const v of statuses)
{
    console.log(v); // prints in insertion order
}

statuses.forEach((v)=>console.log(v));