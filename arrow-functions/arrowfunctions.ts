var sumare =(x:number, y:number):number =>
{
    return x+y;
}

console.log(sumare(20,30));


// Parameterless Arrow functions
var printtext=() => {
    console.log("Welcome")
};

var printtext = () => console.log("Welcome");
printtext()

var sum2=(x:number, y:number) => x+y;

console.log(sum2(55222, 78452121));
