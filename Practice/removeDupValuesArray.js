let arr1 = ["Apple","Banana","Apple","Grapes"];//[10,20,30,10,40];
let nonRepArr = [];
let i,j;
let flag;
console.log(arr1.length);
for(i=0;i<arr1.length;i++)
{
    flag=false;
    for(j=i+1; j<arr1.length;j++)
    {
        if(arr1[i]==arr1[j])
        {
            flag=true;
            break;
        }
    }
    if(flag==false)
    {
        nonRepArr.push(arr1[i]);
    }
    
}
console.log(nonRepArr); // [20,30,10,40] ['Banana','Apple','Grapes']

// Another method
let str = "I am working in Woodwing";
let str_no_dup = "";
for(const x of str) 
{
    if(!(str_no_dup.includes(x)))
    str_no_dup+= x; 
}
console.log(str_no_dup);

