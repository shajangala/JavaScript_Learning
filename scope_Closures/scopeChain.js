let a=10;
function outer()
{
    let b=20;
    console.log(a);
    console.log(b);
    // console.log(c); //error c is not defined
    function inner()
    {
        let c=30;
        console.log(a);
        console.log(b);
        console.log(c);
    }
}
outer();
inner();
console.log(a); // its scope is global can be accessed anywhere 
// console.log(b); // b is not defined its scope is outer() function only
// console.log(c); // c is not defined it's scope is inner() function only