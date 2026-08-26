// Variable is a container to store values. In JS, we have 3 types of variables : var, let and const.
// Rules for variable names:
// It can contain letters, digits, underscores, numbers and dollar sign.
// It can start with letters, numbers and underscores but not with a digit.
// It is case sensitive and cannot be a reserved keyword.

// var variable is function scoped and global scoped.
// var is declared and we can assign the value later.
// var variable can be re-declared and re-assigned within the scope.
// var can accessed before declaration. 

// Var- Example1

var age;
console.log(age); //undefined
age = 10;
console.log(age); //10

function varScope(){
    var age = 20;
    console.log("inside function", age); //20
    age = 30;
    console.log("inside function after re-assigning", age); //30
}
varScope();
var age = true;
console.log(age); //true

// var- Example2
console.log("**********");
var name = "Java";
console.log(name); // Java

function varScope2(){
    var name = "Script";
    console.log("inside function", name); //Script
}
varScope2();
console.log(name); //Java
var name = "JavaSCript";
console.log(name); //JavaSCript