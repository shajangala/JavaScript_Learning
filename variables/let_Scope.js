// let variable is introduced in ES6
// let variable declared blocked scope.
// let can be re-assigned but can't re-declared with in the scope.
// let can declared and assigned later but can't be accessed before declaration.

//let example-1

let a ;
// let a =20; //SyntaxError: Identifier 'a' has already been declared
console.log(a); //undefined
a=10;
console.log(a);
a = 20;
console.log(a); //20)

//let example-2
console.log("*******");
let bool= true;
console.log(bool); //true

function letScope(){
      let bool = false;
      console.log(bool); //false
      bool = "inside function";
      console.log(bool); //inside function
}
letScope();
console.log(bool); //true
bool = "hello";
console.log(bool); //hello