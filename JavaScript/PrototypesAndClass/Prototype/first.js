// Prototype and classes 

// const obj={
//     name:"ABC",
//     age:"10",
//     greet: function(){
//         console.log("hello");
//     }
// };

// const obj2={
//     // name:"EFG",
//     account:123
// }

// obj2.__proto__=obj;           // here obj becomes a prototype of obj2
// console.log(obj2.name);
// console.log(obj2.hasOwnProperty("name"));



// similarly when we create any array then automatically it is pointed to array protoype where toString,sort etc are present
// const arr=[40,5,10,100,90];
// console.log(arr.toString());      // here arr automatically pointing to Array.prototype and Array.prototype is pointing to Object.prototype where toString is present  so basically arr is able to use toString property since it is pointing to Array.prototype and Array.prototype is pointing to Object.prototype where toString is present , this is the reason why we call array as object in Javascript since it inherits properties of Array.protoype adn this Array.prototype is pointing to Object.prototype 



//similarly function is also called Object since function points to Function.prototype and Function.prototype points to Object.prototype




//here we made two objects obj and obj2 , obj2 has obj as a prototype and obj has  null prototype which means obj2 can access properties of obj but we wrote console.log(obj2.hasOwnProperty("name")); , here hasOwnProperty is a part of ObjectProtype but obj has null prototype which means obj2 won't be able to access hasOwnProperty since obj2 is pointing to obj and obj is pointing to null
// const obj={
//     name:"ABC",
//     age:"10",
//     greet: function(){
//         console.log("hello");
//     }
// };
// obj.__proto__=null;
// const obj2={
//     // name:"EFG",
//     account:123
// }

// obj2.__proto__=obj;           // here obj becomes a prototype of obj2
// console.log(obj2.name);
// console.log(obj2.hasOwnProperty("name"));          // error




