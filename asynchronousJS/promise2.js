// Till we handled single promise at a time. But if 3 users needs to log in same time [parallel at a time not one after another]
// methods of promise
// Promise.all() : Fulfills when all the Promises are fulfill.Rejects as soon as one reject
// Promise.allSettled() : Waits until every promise is settles, then report each result
// Promise.race() : settles with result of first promise settle.

// Promise.all():
// .then() runs when all Promises are fulfilled.
// .catch() runs when any Promise rejects.
// .finally() runs whether the combined Promise fulfills or rejects.



function login(userName, delay = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName === "") {
        reject(new Error("Username is empty"));
      } else {
        resolve({ name: userName, role: "Tester" });
      }
    }, delay);                     // ← was 1000, now uses the parameter
  });
}
/*
login("Java",2000); //having 2sec delay
login("Script",3000); //having 3sec delay
login("JS"); //it will take default given delay 1sec
*/
Promise.all([
    login("Playwright",2000),
    login("JS",3000),
    login("TS",4000)
])
.then((users)=>users.forEach((u)=>console.log(u.name)))
.catch((err)=> console.log("Error:",err.message));


Promise.all([
    login("Playwright",2000),
    login("",3000),
    login("TS",4000)
])
.then((users)=>users.forEach((u)=>console.log(u.name)))
.catch((err)=>console.log("Error: ",err.message));



