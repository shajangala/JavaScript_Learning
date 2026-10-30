// static methods and properties
// static members are belong to class itself, not to the objects created from it. we can access them by using class name.
class Counter
{
    static count=0;
    static add()
    {
        Counter.count++;
        return Counter.count++;
    }
}
Counter.add(); 
console.log(Counter.add()); //3
console.log(new Counter().count); // undefined
// example of static methods Math.sqrt(), Math.max()

// Private properties
// A private field (starts with #) can be accessed/used within the class. Accessing it from outside side throws an error.
// to protect data like passwords
class Account{
    #password="Sceret";
    check(p)
    {
        return p === this.#password;
    }
}

const acc= new Account();
console.log(acc.check("Sceret")); //true
console.log(acc.password); //undefined
// console.log(acc.#password); // syntax error

// Protected JS has no real protected keyword,_used before name convention meaning "USe this with in the class and its child classes."
class Company{
    _role="QA";
}
console.log(new Company()._role); //QA
