"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test1_1 = require("./test1");
//myvar= "Joke";
console.log(test1_1.myvar);
var test1_2 = require("./test1");
(0, test1_2.myfunc)();
var test1_3 = require("./test1");
var myclassvar = new test1_3.MyClass(20, 55);
console.log(myclassvar.add());
