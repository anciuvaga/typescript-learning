function greet(greeting:string, name:string):string {
    return  greeting + " " + name;
}

// Optional param

console.log(greet("Welcome", "John"));

function greet1(greeting:string, name?:string) {
return greeting + " " + name;
}

console.log(greet1("Welcome"));

// Default param

function greet2(name:string, greeting:string="Hello"):string {
    return greeting + " " + name;
    }
 console.log(greet2("Vasea"));