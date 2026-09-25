// Function

// function print(){
//     console.log("Hello");
// }
// print();

// function Sum(a,b){
//     let sum=a+b;
//     console.log("The sum is:",sum);
// }
// Sum(10,20);



//rest operator= if we have to pass multiple arguments then it is very tidious to write every parameter for every argument , therefore we use rest operator
// ... always returns an array 
// function Sum(...a){
// let sum=0;
// for(let i of a){
//     sum+=i;
// }
// console.log(sum);
// }

// Sum(10,20);
// Sum(10,20,30);
// Sum(10,20,30,40,50,60);


//Method 2 to create a function is to store it in any variable
// const a=function(a,b){
//    return a+b;
// }
// console.log(a(10,20));


// Method 3 to create a function is to use arrow function



// Arrow Function

// const a= ()=>{
//     console.log("hello");
// }
// a();                   // output= hello


// Syntax 1
// const a= (a,b)=>{
//     return a+b;
// }
// console.log(a(10,20));


// Syntax 2 (if we only have to return something then no need to put {} and also no need to put return keyword)
// const a= (a,b)=> a+b;
// console.log(a(10,20));

// Syntax 3 (if we have only one parameter in function then no need to put ())
// const a=num=>num*num;
// console.log(a(5));


// Immediately Evoked Function(IIFE)
// (function Print(){
//     console.log("Hello");
// })
// ();

// (()=> {
//     console.log("hello");
// })
// ();


// callback function

function Print1(){
    console.log("Hi");
}

function Print2(){
    console.log("hey");
}
function X(callback){           // not compulosry to write "callback", we can write anything

    console.log("Hello");
    callback();
}

X(Print1);
X(Print2);