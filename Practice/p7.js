const tests = ["Login", "Search", "Cart"];
console.log(tests.length); //3
console.log(tests[tests.length - 1]); // Cart
console.log(tests[3]); // undefined
console.log(tests.push("Payment")); // adds at end 4
console.log(tests.shift()); // removes starting  Login
console.log(tests); // ["Search","Cart","Payment"]

/* Write it yourself: start with const queue = ["Test1", "Test2", "Test3"];

add "Test0" at the start
add "Test4" at the end
remove the last one and print which one was removed
print the final array and its length */

const queue = ["Test1", "Test2", "Test3"];
queue.unshift("Test0"); // ["Test0","Test1", "Test2", "Test3"]
queue.push("Test4");   // ["Test0","Test1", "Test2", "Test3","Test4"]
console.log(queue.pop()); // Test4
console.log(queue); // ["Test0","Test1", "Test2", "Test3"]
console.log(queue.length); //4