// A class is a blueprint for creating objects. you can write it once and create as many objects you need.
class TestCase{
constructor(name,status)
{
    this.name=name;
    this.status=status;
}
run(){
    return `Running ${this.name}`;
}
}

const TC1= new TestCase("Login","Pass"); // constructor is called.
console.log(TC1.name); //Login
console.log(TC1.run()); // Running Login

// class is keyword for creating class
// constructor is keyword it is special method that runs automatically when we create object using new
// this is a keyword it refers current object
// new is a keyword it creates a new object from the class
// TC1 is instance of class or object
// run() is a function/method, in class without using function keyword we can create methods

console.log(typeof TestCase); // function
console.log(typeof TC1); // object
