interface IEmployee {

    empN:string;
    empID:number;
    empSal:number;

    dispData:() => void;

}

var firstemployee:IEmployee=
{
    empN:"John",
    empID:101,
    empSal:500,
    dispData():void{
        console.log(this.empN+ " " + this.empID + " " + this.empSal)
    }
}

console.log(firstemployee.empN);
console.log(firstemployee.empID);
console.log(firstemployee.empSal);
firstemployee.dispData()

interface I1{
    a:number;
    b:number;
    sum():number;
}

interface I2 extends I1{
    x:number;
    y:number;
    sub():number;
}

class C1 implements I2 {
    a:number;
    b:number;
    x:number;
    y:number;

    sum():number {
        return (this.a + this.b);
    }

    sub():number {
        return (this.x-this.y);
    }
}

var c1 = new C1();
c1.a=100;
c1.b=200;
c1.x=300;
c1.y=400;
console.log(c1.sum());
console.log(c1.sub());