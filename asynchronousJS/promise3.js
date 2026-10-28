// Promise.allSettled():
// .then() runs after all Promises have settled.
// Inside .then(), we check each result's status to handle fulfilled and rejected Promises.
// .finally() runs after the combined Promise settles.
// .catch() is usually not needed to handle individual Promise rejections.





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
Promise.allSettled([
       login("PS",2000),
       login("",3000),
       login("October",5000)
])
.then((users)=> {
    users.forEach((result)=>{
    if(result.status === "fulfilled")
        console.log("Fulfilled: ",result.value.name);
    else
        console.log("Rejected:",result.reason.message);
});
})
.finally(()=>console.log("Promise.allSettled is runs fine."))