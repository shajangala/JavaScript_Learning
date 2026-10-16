// Objects stores key-value pairs name is key Jan is value.

// method-1
let person = {
     name : "Jan",
     age : 30,
     city : "Delhi"
};

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);

// method-2
let student = {};
student.name = "Richard";
student.class = "7";
student.syllabus = "CBSE";
console.log(student.name);
console.log(student.class);
console.log(student.syllabus);
console.log(student["name"]);
console.log(student["class"]);
console.log(student["syllabus"]);

// method-3
let baby = new Object();
baby.name = "Jolly";
baby.gender = "F";
console.log(baby.name);
console.log(baby.gender);
console.log(baby["name"]);
console.log(baby["gender"]);

// method-4
let employee =
{
    name1 : "Rose",
    age : 30,
    isTester : true,
    skills : ["Manual testing","JS","Playwright"],
    address:
    {
     city : "Chandigarh",
     country : "India"
    }
};
// Accessing the object values
console.log(employee);
console.log(employee.name1);
console.log(employee.age);
console.log(employee.isTester);
console.log(employee.skills);
console.log(employee.address);

// updating the object values
employee.skills = ["testing","playwright"];
console.log(employee.skills);
console.log(employee.skills[0]);
console.log(employee);

//deleting the object value
delete employee.age;
console.log(employee);


