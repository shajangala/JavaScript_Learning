// Export
// Named Export - It allows us to export multiple variables,functions or classes from a single file.
class Calc
{
    constructor()
    {
       this.a=10;
       this.b=20;
    }


  add()
{
    return a+b;
}

  sub()
{
    return a-b;
}
}
// we use export keyword to make them available to other files.
export default Calc;