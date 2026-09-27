// Scope and closure , Higher Order Function

// Scope : 1) Global Scope   2) Functional Scope    3) Block level Scope



// global Scope = accessible anywhere
// let a=10;              
// const b=20;
// if(true){
//     console.log(a,b);
// }



// Functional Scope =accessible only inside that function
// function print(){
//     let c=30;
// }
// console.log(c);    // error since c is in local scope of function print, or we can say it is in 'functional scope'



// block level scope= accessible inside that block
// if(true){
// let d=40;            // 'block level scope' 
// }
// console.log(d);    // error since 'd' is in local scope



// 'var' keyword obeys the rules for global and functional scope, but not follows the rules for block level scope,which means we can access block level variables outside the block as well.


// let a=10;
// function print(){
//     let a=20;                          // output--> 20
//     console.log(a);
// }



// Closure = A function that remembers variables from its outer scope even after the outer function has finished execution.
// function createCounter(){
//     let count=0;
//     function increment(){
//         count++;
//         return count;
//     }
//     return increment;
// }
// const a=createCounter();
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());


//Higher Order Function

// function print(){
//     function print2(){
//         console.log("Print2 function called");
//     }
//     return print2;
// }
// const a=print();
// a();     // output = Print2 function called


function first(value){
    
    return function second(num){
    return num*value; 
    }
}
const n=first(10);
console.log(n);
console.log(n(5));