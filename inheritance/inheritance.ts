class Person {
    name:string;
    
    constructor(name:string) {
        this.name = name
    }
}

class ItPerson extends Person {

    empno:number;

    constructor( name:string, empno:number,) {
        super(name)
        this.empno=empno;
    }

    displayData():void{
        console.log(this.empno);
        console.log(this.name);
    }
}

var itemp = new ItPerson("Jack", 215)
itemp.displayData();

