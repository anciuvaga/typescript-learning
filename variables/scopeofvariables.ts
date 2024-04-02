var y = 100; // global variable

function check() {

    if(true){
        var x = 100;
        let z = 100;
        console.log(p);
        console.log(x);
        console.log(z);

    }
    // console.log(z) //  error 
    console.log(x); // ok
    console.log(p);
} 

// console.log(x); // error
console.log(y); // ok
console.log(p);





// var --> within the function 
// we can update or redefine a var variable. 

//let --> within a block
// cannot be redeclared or updated within the same scope.

//const --> we must declare a const variable with an initial value
// the value cannot be reassign again

