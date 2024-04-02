var empID = 101;
var empName = "John";
// Declare tuple
// var employee=[101,"John", 5000];
var employee = [101, "John", 50000];
console.log(employee);
console.log(employee[0]);
//Add elements into the tuple: - push()
var employee = [101, "John", 50000];
console.log("Original tuple" + employee);
employee.push(102, "Scott", 70000);
console.log(employee);
//Remove elements from tuple - pop()
employee.pop();
console.log("After removing new elements " + employee);
//Update the name in tuple
employee[1] = "Gicu";
console.log(employee);
//Tuple Array
var student;
student = [[101, "smith"], [102, "scott"], [103, "mary"]];
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
