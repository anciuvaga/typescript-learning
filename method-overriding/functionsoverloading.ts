function adunare(a:number, b:number):number;
function adunare(a:string, b:string):string;

function adunare(a:any,b:any):any
{
    return a+b;
};

console.log(adunare(100, 400));
console.log(adunare("WELCOME", "JOHN"));

//Function overloading with different number of parameters and types with same name is not supported

function displayPage(a:string, b:string):void {
    console.log(a+b);
}


function displayPage(a:number):void {
    console.log(a);
}





