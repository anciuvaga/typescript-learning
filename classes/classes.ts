class Employer {

    empid:number;
    empname:string;
    deptno:number;

    // initialize variables using constructor

    constructor(empid:number, empname:string, deptno:number) {
        this.empid = empid;
        this.empname = empname;
        this.deptno = deptno;
    }

    // initialize variables using method 
    setData(empid:number, empname:string, deptno:number):void {
        this.empid = empid;
        this.empname = empname;
        this.deptno = deptno;
    }

    display():void {
        console.log(this.empid);
        console.log(this.empname);
        console.log(this.deptno);
    }
}

// var emp1=new Employee();
// emp1.empid=101;
// emp1.empname="John";
// emp1.deptno=10;
// emp1.setData(101, "John", 500);

// emp1.display();

var emp = new Employer(110, "Andrew", 54);
emp.display();