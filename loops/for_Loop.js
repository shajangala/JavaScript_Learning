for(let i=0;i<10;i++)
{
    console.log(i); // it will print 0 to 9
}

let str="Hello Javascript";
for(let i=0;i<str.length;i++)
{
console.log(str[i]); //it will print each character of the given string.
}

//nested for loop
for(let i = 0; i < 3; i++)
{
     let str = "";
    for(let j=0; j <=i; j++) //j=0; i=0; i=1;j=0, i=1,j=1
    {
        str+="* ";
        // console.log(str);
        // process.stdout.write("* ");
        // console.log("*"+" ");
    }
    console.log(str);
}