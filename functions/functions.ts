//Named functions:

function display() {
    console.log("Welcome to TypeScript")
}
display()


function Sum(x:number, y:number):number {
    return x + y;
}

var res = Sum(100, 200);
console.log(res);

//Anonymous Function

var greeting =function() {
    console.log("Welcome to study");
}

greeting()

// Anonymous Function include parameter types and return type.

var suma = function(x:number, y:number):number {
    return x+y;
}

console.log(suma(50, 100));
