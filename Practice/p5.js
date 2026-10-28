/* write it yourself

Use your login (add role: "Tester" to the resolved object), then write a chain that:

In .then: if user.role === "Tester", prints Access granted to <name>. Otherwise it throws new Error("Access denied for <name>").
In .catch: prints Error: <message>.
In .finally: prints Test finished.

Run it with login("Shamili") and login(""), and paste both outputs.
Then change the role in resolve to "Admin" and run login("Shamili") again. Which handler runs now, and why?
*/

function login(userName)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            if(userName === "")
                reject(new Error("Username should not be empty"));
            else
                resolve({name: userName, role: "Admin"});

        },1000);
    });
}
/*
login("Shamili")
.then((user)=>{ if(user.role === "Tester")
                    console.log("Access granted to",user.name);
                else
                    throw new Error(`Access denied for ${user.name}`);                   

})
.catch((err)=>console.log("Error:",err.message))
.finally(()=>console.log("Test finished"));

login("")
.then((user)=>{ if(user.role==="Tester")
                    console.log(`Access granted to ${user.name}`);
                else
                    throw new Error(`Access denied for ${user.name}`);

})
.catch((err)=> console.log("Error:",err.message))
.finally(()=>console.log("Test finished."));
*/


login("Shamili")
  .then((user) => {
    console.log("A:", user.name);
    null.length;
    console.log("B");
  })
  .catch((error) => console.log("C:", error.name)) 
  .finally(() => console.log("D"));