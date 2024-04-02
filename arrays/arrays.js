var fruits1 = ["apple", "mango", "banana"];
var fruits2;
fruits2 = ["apple", "mango", "banana"];
console.log(fruits1);
console.log(fruits2);
//multi-type array
var values = ["apple", "mango", 100];
console.log(values);
//or
var values = ["apple", 80];
console.log(values);
// read data from array
var fruits10 = ["apple", "orange", "banana"];
console.log(fruits10[0]);
console.log(fruits10[3]); //undefined
// for loop
for (var i = 0; i < fruits10.length; i++) {
    console.log(fruits10[i]);
}
// Reading elements using for loop with in operator
for (var j in fruits10) {
    console.log(fruits10[j]);
}
//multi-dimensional array
var myarr = [[50, 50], [30, 40], [82, 40]];
console.log(myarr);
var myarr1 = [[10, "xyz"], [525, "str"]];
console.log(myarr1);
// Access 2D array elements
myarr1[0][0];
for (var c = 0; c < myarr1.length; c++) {
    for (var h = 0; h < myarr1[c].length; h++) {
        console.log(myarr[c][h]);
    }
}
// Reading data using for loop with in operator
for (var v in myarr1) {
    for (var m in myarr1[v]) {
        console.log(myarr1[v][m]);
    }
}
