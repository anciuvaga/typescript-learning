function hello(greeting) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return greeting + " " + name.join(" ");
}
console.log(hello("Hello", "John"));
console.log(hello("Hello"));
console.log(hello("Hello", "John", "Cott"));
