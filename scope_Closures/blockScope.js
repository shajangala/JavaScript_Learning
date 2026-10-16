// Block scope is anything inside {}. let and const are block scope.

{
    let a =10;
    console.log(a);
}
// console.log(a); // a is not defined
{
    var b = 20;
    console.log(b);
}
console.log(b);

{
    const c =30;
    console.log(c);
}
console.log(c); // c is not defined