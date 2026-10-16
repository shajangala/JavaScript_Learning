let name1 ="Hello new";
let reverseName = "";
let length = name1.length;
console.log(length);
for(let i=length-1;i>=0;i--)
{
    reverseName = reverseName+name1[i];
}
console.log(reverseName);

// In built functions
let x= name1.split("").reverse().join("");
console.log(x);