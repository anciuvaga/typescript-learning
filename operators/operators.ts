var x=10;
var y=20;

// arithmetic operators
console.log(x+y);
console.log(x**x);

x+=1;
console.log(x);

x++; //post increment 11
console.log(x);
// ++x //pre-increment operators
console.log(x);

// y=y-1;
y-- // post-decrement; //--y pre-decrement
console.log(y);

// Assignment operators
x=100;
y=50;

x+=y; //x=x+y
console.log(x); //150
console.log(x-=y); //x=x-y
console.log(x*=y); //x=x*y
console.log(x/=y); //x=x/y
console.log(x%=y); //x=x%y

// Relational/comparison operators
// always return a boolean value true/false

x=10;
x=20;

console.log(x>y);
console.log(x<y);  
console.log(x!=y); 
console.log(x<y?x:y);
console.log(x>y?x:y);

// logical operators
//&& || !