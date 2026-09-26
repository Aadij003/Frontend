// whenever the code runs the execution context is created

// Execution context has 2 phases ----> 1) Memory allocation   2)Exection phase


// 1) Memory allocation
// a=undefined
// b=undefined
// Add(num1,num2)=function Code
// sumResult1=undefined
// sumResult2=undefined


// 2) Execution Phase
// console.log(a);
//  a=10
//  b=20
// sumResult1 stores reference of function Code therefore now function Code will run and since function is running therefore again the execution context will be created and memory allocation anf execution phase will run for that function
// dumResult1=30
// similarly sumResult2=9



// console.log(a);        // output will be undefined , actually what will happen is firstly memory allocation phase will run therefore a=undefined,b=undefined,sumResult1=undefined,sumResult2=undefined and then execution phase would run where first line is console.log(a) therefore it would be print the value which 'a' is holding currently i.e. undefined
// var a=10;            //  in the 'memory execution phase', if the variable has var keyword then that variable gets undefined stored in it
// var b=20;

// function Add(num1,num2){
//     var sum=num1+num2;
//     return sum;
// }

// var sumResult1=Add(a,b);
// var sumResult2=Add(4,5);
// console.log(sumResult1,sumResult2);



// let const
//for let and const keyword , in memory allocation phase the variable gets "uninitialised"

// Execution Context :

// 1) Memory allocation
// a=<uninitialised>  (Temporal Dead Zone)
// b=<uninitialised>  (Temporal Dead Zone)

// 2) Execution Phase
// console.log(a)     // error

console.log(a);            // output will be error, what will happen is , firstly memory allocation phase runs and a and b gets uninitialised stored in them then execution phase runs but the very first line is console.log(a) and a has uninitialised stored and in the case of 'let' & 'const' keyword we can't access any variable if it is not initliased yet or if it contains 'uninitialised'
let a =10;
const b=20;




// Hoisting
// it is a JavaScript behaviour of knowing about a variable or function's existence before executing the code. It depends on keyword(function,var,let,or const)
// function : hoisted completely (name and body)
// var : Hoisted and initialised with undefined
// let/const : Hoisted, but not initiased. They are put in a Temporal Dead Zone.