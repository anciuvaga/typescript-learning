function greet(greeting, name) {
    return greeting + " " + name;
}
// Optional param
console.log(greet("Welcome", "John"));
function greet1(greeting, name) {
    return greeting + " " + name;
}
console.log(greet1("Welcome"));
// Default param
function greet2(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + " " + name;
}
console.log(greet2("Vasea"));
