var mystring = "Welcome to TypeScript";
var myString1 = "welcome";
//charAt()
console.log(mystring.charAt(0));
console.log(mystring.charAt(2));
//comcat()
var str1 = "Welcome";
var str2 = " to TupeScript";
var str3 = " and Protractor";
console.log(str1.concat(str2).concat(str3));
//replace()
var str = "TypeScript Programming";
console.log(str.replace("i", "x"));
console.log(str.replace("Type", "Java"));
//split()
var fruits = "Apple Banana Orange";
console.log(fruits.split(" ")); // [ 'Apple', 'Banana', 'Orange' ]
console.log(fruits.split(" ", 2)); // [ 'Apple', 'Banana' ]
console.log(fruits.split(" ", 1)); // [ 'Apple' ]
//substring()
var str = "Welcome";
console.log(str.substring(0, 3));
console.log(str.substring(2, 5));
//toUpperCase() && toLoweCase()
str = "TypeScript";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
//trim()
str = "    welcome      ";
console.log(str.trim());
console.log(str.trimEnd);
