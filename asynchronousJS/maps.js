// A map is a collection of key-value pairs where kay can be anytype: a string,number, boolean, object or even a function.
// We have already key-value pairs in objects but object keys are always converted to strings

//creating a Map

const empty= new Map();

const results = new Map([['login','Pass'],['search','Fail']]);
console.log(results); //Map(2) {'login'=>'Pass','search=>'Fail'}

//Map methods
const test_results= new Map();
test_results.set('login','Pass'); //add or update a pair
test_results.set('search','Fail');
test_results.set('cart','Pass');
console.log(test_results); //Map(3) {'login'=>'Pass','search'=>'Fail','cart'=>'Pass'}
console.log(test_results.get('login')); // "Pass" gives key value
console.log(test_results.get('payment')); //undefined no such key is present
console.log(test_results.has('cart')); // true checks keys is present or not
console.log(test_results.size); //3
console.log(test_results.delete('search')); // deletes the pair and returns true
console.log(test_results);
console.log(test_results.clear()); // removes everything return undefined
console.log(test_results);

// Any type as a key
const responses = new Map();
responses.set(200,"ok");
responses.set(true,"Enabled");
console.log(responses);

const user= {id:'1'};
responses.set(user,"Logged in");
console.log(responses.get(user)); //Logged in


//Looping over Map
const results1 = new Map([["login", "Pass"], ["cart", "Pass"]]);
for(const [key,value] of results1)
{ 
    console.log(key,value); //prints key,value
}
results1.forEach((key,value)=>console.log(key,value)); //prints value key

// counting characters in the given string storing them in a Map

const counts=new Map();

for(const c of "hello")
{
    counts.set(c,(counts.get(c)||0)+1); //h ->1
                                         
}
console.log(counts);

// converting object to map
const obj1={
    a:1,
    b:2
}
obj1.a=3;
const map=new Map(Object.entries(obj1)); //obj ->map
console.log(map); 
const obj2=Object.fromEntries(map); //map -> obj
console.log(obj2);

const obj3={
    name1: "Java",
    platform: "MAC"
};
const map2=new Map(Object.entries(obj3));
console.log(map2);
const obj4= Object.fromEntries(map2);
console.log(obj4);
