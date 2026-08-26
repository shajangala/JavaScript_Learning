// const variable is introduced in ES6
// const variable declared blocked scope.
// const is can't be re-assigned and can't be re-declared with in the scope.
// const is assigned at the time of declaration only.

// const example-1

// const a; //SyntaxError: Missing initializer in const declaration

const a = 10;
console.log(a); //10
// a =20; //TypeError: Assignment to constant variable.

// const example -2
console.log("*********");
const b =10;
console.log(b); //10

function constScope(){
 const b =20;
 console.log(b); //20
}
constScope();
console.log(b); //10