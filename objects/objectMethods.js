//method inside of an object

let p =
{
   name : "JavaScript",
   lang : "Programming",
   greet()
{
    console.log("method inside of an object "+this.name);
}
};

p.greet();

// object.keys() - returns an array with object keys
console.log(Object.keys(p));

// object.values() - returns an array with object values
console.log(Object.values(p));

// object.entries() - returns an array with key-value pairs
console.log(Object.entries(p));

//object.hasOwn() - checks the object has paticular property
console.log(Object.hasOwn(p,"name"));
console.log(Object.hasOwn(p,"lang"));
console.log(Object.hasOwn(p,"greet"));
console.log(Object.hasOwn(p,"city"));

let p1 ={
    name : "JS"
};
let p2 ={
   city : "Delhi"
};

//Object.assign() - copies properties from p2 to p1   Object.assign(target,source)
Object.assign(p1,p2);
console.log(p1);
console.log(p2);




