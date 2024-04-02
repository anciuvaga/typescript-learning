// Number
 var first:number=12.0;
 var second:number=0x37CF;
 var third:number=0o377;
 var fourth:number=0b111001;

 console.log(first);
 console.log(second);
 console.log(third);
 console.log(fourth);

 // String
 var empName:string="John";
 var empDept:string="IT";

 console.log(empName);
 console.log(empDept);

 var stmt:String=empName + " works in " + empDept;
 console.log(stmt);

 //Boolean
 var b:boolean=true;
 console.log(b);

 //void type

 function hello():void{
    console.log("This is welcome message")
 }

 //NUll Null represents a variable whose value is undefined.
 var num1:number= null;
 num1=100;
 console.log(num1);

 //Undefined: Denotes all uninitialized variables.
 var num2:number=undefined;
 num2=100;
 console.log(num2);

 // Any type
 var val:any = "Hi"
 console.log(val);

 val = 100;
 console.log(val);

 val=false;
 console.log(val);

function myFunction(x:any, y:any) {
console.log(100, 200);
}

myFunction(100, 200);
myFunction("Hi ", "Welcome");



   