class Bank{

    rateOfInterest:number=0;

    roi():number{
        return this.rateOfInterest;
    } 
}

class BankX extends Bank{

    roi():number {  //overriding
        return 10.0;
    }
}

class BankY extends Bank{
    
    roi():number { //overriding
        return 5.0;
    }
}

var bankx = new BankX();
console.log(bankx.roi());