// this keyword is used in classes as well as in object method


// strict vs non strict mode



// non strict mode

// var a=10;
// b=20;
// console.log(a,b);        // here b is not defined properly but in non strict mode we do not get error and console.log will execute here giving an output of 10 20



// function print(name,name){
//     console.log(name,name);             // since there is non strict mode therefore we will not get any error although function parameters are same   
// }                                       // output: XYZ XYZ 
// print("abc","XYZ");          




// strict mode

// 'use strict'      // this means now we are using strict mode and latest Javascript 




//  var a=10;
// b=20;                      // again b is not defined properly
// console.log(a,b);         // this time it will give error since we are in strict mode 


// similarly

// function print(name,name){
//     console.log(name,name);             // since there is strict mode therefore we will get error since function parameters are same   
// }                                       
// print("abc","XYZ"); 




// global object: In browser environment it is called as window and in node.js it is called as global


// globalThis points to global object of the environment for example if we use globalThis in node.js environment then we get global and if we run globalThis in browser environment then we get window
// console.log(globalThis); 




// 'this' keyword in global scope:          NodeJs----> we get empty object          , in      browser----->global object i.e. window



// const user={
//     name:"ABC",
//     age:10,
//     greet: function(){
//      console.log(this.name);
//     } 
// }

// user.greet();                      // greet() is invoked by user therefore this will point to user object basically 'this' points to that object which invoked the function



// function greet(){
//     console.log(this);             // in no strict mode 'this' will point to global object so we get global object at output but in strict mode 'this' will point to undefined since no object invoked function here so we wil get undefined at output
// }
// greet();                      // we saw above that 'this' always points to the object who invoked it but here greet() is not invoked by any object this means 'this' should not point anywhere but in non strict mode if function is invoked by no object and if we print 'this' by console.log(this) then we will get global object and this is a bug because if function isn't invoked by any object then 'this' should not point anywhere , therefore when we use strict mode and then execute the same code and print 'this' using console.log(this) we get undefined which makes sense




//call 
function greet(){
    console.log(`hii my name is ${this.name}`);
}

function Change(value,name){
this.age+=value;
this.name= name;
console.log(this.age);
}

 const user={
    name:"ABC",
    age:10,
     }

 const user2={
        name:"XYZ",
        age:12
     }
    

// call
// greet.call(user);
// greet.call(user2);
// Change.call(user,2,"abc");
// Change.call(user2,3,"xyz");


// apply (it's functionality is same as call only difference is in syntax)
// Change.apply(user,[10,"abcd"]);
// Change.apply(user2,[5,"wxyz"]);


// bind 
// const a=Change.bind(user,10,"ABCD");      // stores reference and then we can run it when we want
// a();




// in class constructor 'this' points to newly created empty object



// 'this' in arrow function 
// in normal function like this 
// function greet(){
//     console.log(this);     // we know that for functions if we print it like this then for non strict mode we get global object and for strict mode we get undefined in node.js environment 
// }
// greet();

//for arrow function: 'this' doesn't exists for arrow function, 'this' keyword is assigned value from lexical environment scope
 
const print=()=>{
    console.log(this);           // output= {} for node.js environment  and for browser output will be global object i.e. window object
}
print();