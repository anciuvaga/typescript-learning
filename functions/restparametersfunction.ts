function hello(greeting:string, ...name:string[]) {
    return greeting+ " " + name.join(" ");
} 

console.log(hello("Hello", "John"));
console.log(hello("Hello"));
console.log(hello("Hello", "John", "Cott"));
