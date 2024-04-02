import{myvar} from "./test1"


//myvar= "Joke";
console.log(myvar);

import { myfunc } from "./test1";
myfunc();

import { MyClass } from "./test1";
var myclassvar= new MyClass(20 , 55);
console.log(myclassvar.add())