// In JS, try, catch statements are used to handle errors without stopping the program unexpectedly.
// try- contains the code that you want to execute
// catch- executes when an error is thrown inside try block
// error- contains the information about error
/*
try{
    // code that causes error
}
catch(error)
{
    // code that handles the error
}
*/

// Example-1
try{
    console.log("Inside try block");
}
catch(error)
{
    console.log("Inside catch block");
}
finally
{
    console.log("Always executes");

}


// Example-2
console.log("Start");
try{
    console.log(printing_without_quotes_causes_the_error);
}
catch(error)
{
    console.log("Error occured");
    console.log(error.message);
}
console.log("End");

//Example-3
try{
    console.log(Inside_try_block);
}
catch(error)
{
    console.log("Inside catch block");
}
finally
{
    console.log("Always executes");

}

//Example 4:
try{
    let a=10,b=0;
    if(b === 0)
    {
        throw new Error("Division is not possible"); // custom error
    }
    else{
        console.log(a/b);
    }

}
catch(error)
{
    console.log(error.message);
}