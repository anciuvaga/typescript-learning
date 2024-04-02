var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setData = function (empid, empname, deptno) {
        this.empid = empid;
        this.empname = empname;
        this.deptno = deptno;
    };
    Employee.prototype.display = function () {
        console.log(this.empid);
        console.log(this.empname);
        console.log(this.deptno);
    };
    return Employee;
}());
var emp1 = new Employee();
var emp2 = new Employee();
// emp1.empid=101;
// emp1.empname="John";
// emp1.deptno=10;
emp1.setData(101, "John", 500);
emp1.display();
