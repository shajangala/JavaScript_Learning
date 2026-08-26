let a=10,b=3;
let math_operation="*";
switch(math_operation)
{
    default: console.log("Invalid Operation");
             break;
    case '+': console.log(`Addition of two numbers is ${a+b}`);
              break;
    case '-': console.log(`Subtraction of two numbers is ${a-b}`);
              break;
    case '*': console.log(`Multiplication of two numbers is ${a*b}`);
              break;
    case '/': console.log(`Division of two numbers is ${a/b}`);
              break;
    case '%': console.log(`Modulus of two numbers is ${a%b}`);
              break;
    
}