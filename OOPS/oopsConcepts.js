// Inheritance:
// A child class inherits the properties and methods of a parent class, so it can reuse the code.
// extend keyword is used for inherit the parent class and super keyword is used to access the parent class properties and methods.

class Test{
constructor(name)
{
    this.name=name;
}
run()
{
    return `Running ${this.name}`;
}
}

class SmokeTest extends Test{
    constructor(name,browser)
    {
        super(name); // calls parent constructor sets this.name=name
        this.browser=browser;
    }

}
const test1=new SmokeTest("Login","Chrome");
console.log(test1.run());

/*
Types of Inheritance:
1. single inheritance (A->B):
       A single child class extends the property and methods of one parent class.
2. Multilevel inheritance(A->B->C):
       One class inherits from parent class and another class inherits the child class.
3. Hierrachical inheritance(A->B A->C):
       2 or more child classes inherits the parent class properties and methods.
4. Multiple inheritance:
       One child class inherits the properties from 2 parent classes. JS doesn't support this.
5. Hybrid inheritance:
       It is a mix of multi level, multiple and hierarchical inheritance. JS doesn't support this.
*/

//Polymorphism:
// It means one name, many forms. say different classes have same method name but implement it in different ways.
// In this we have 2 types overloading and overriding
// method overriding
// when a child class provides its own implements the method which is defined by the parent class

class Test1{
    run()
    {
        return 'Running in parent class'
    }
}
class FunctionalTest extends Test1
{
     run()
     {
        return 'Running the Functional test in child class using overriding concept.'
     }
}
class RegressionTest extends Test1{
    run()
    {
        return 'Running the Regression test in child class using overriding concept'
    }
}

const t1=new FunctionalTest();
const t2=new RegressionTest();
console.log(t1.run());
console.log(t2.run());

// method overloading
// one method with different parameters. In JS last one wins.
class Calc{
    add(a,b){ 
        return a+b;
    }
    add(a,b,c) // replaces the first one
    {
        return a+b+c;
    }
}
const c= new Calc(1,2); // 1+2+undefined = NaN.

