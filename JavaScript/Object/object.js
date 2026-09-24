// Object
// const user={                       // object forms in key-value pair
//     name:"ABCD",                 // key=name , value=ABCD
//     age:20,                      // key=age , value=20
//     grade:'A',                   // key=grade , value=A
//     password:1234                // key=password , value=1234
// }

// console.log(user);
// console.log(typeof user);

// CRUD operation --->  Create Read Update Delete

// update
// user.password=5678;
// user.grade='A+'


// user.id=1234;
// console.log(user);

// delete 
// delete user.id;
// console.log(user);


// const user={
//     name:"ABCD",
//     age:20,
//     grade:'A',
//     password:1234
// }

                                // Important

//if we want to print only keys of the object
// console.log(Object.keys(user));          // output= [ 'name', 'age', 'grade', 'password' ]

// if we want to print only values of the object
// console.log(Object.values(user));        // output= [ 'ABCD', 20, 'A', 1234 ]

// if we want to print both
// console.log(Object.entries(user));        //output= [  [ 'name', 'ABCD' ], [ 'age', 20 ], [ 'grade', 'A' ], [ 'password', 1234 ] ]


// for(let keys in user){
//     console.log(keys,user[keys]);
// }


// const user={
//     name:"ABCD",
//     age:20,
//     grade:'A',
//     password:1234
// }

// const name=user.name;
// const age=user.age;           // instead of this method we can use another mathod called as object destructuring

// const{name,age} =user;         // object destructuring

// similarly we can do array destructuring
// const arr=[10,20,30,40,50];
// const[first,second]=arr;              // we can write any name in place of first and second
// console.log(first,second);


// const user={
//     name:"ABCD",
//     age:20,
//     grade:'A',
//     password:1234,
//     print:function(){
//         console.log(`Hello my name is ${this.name}`);
//     }
// }
// user.print();


// Nested Objects
const user={
    name:"ABCD",
    age:20,
    grade:'A',
    password:1234,
    address:{
        city:"xyz",
        state:"XYZ"
    }
}

// console.log(user.address.city);
// console.log(user.address.state);

// if we want to actually copy the whole object into another object then we can use spread operator , remember user2=user just copy by reference and any changes made in user2 object would change the object i.e. user would also experience similar kind of changes but if we want to copy whole object and then make changes accordingly then use spread operator
//shallow copy
// const user2={...user};
// user2.name="abab";
// console.log(user,user2);
// always remember if we are copying an object using spread operator then it only copies till one level meaning if we see in previous example then the address would still be common in both user and user2 , means changes made by user2 in address would also get changed in user

// if we want to copy every single level then 
//deep copy
const user2=structuredClone(user);
user2.address.city="AAB";

console.log(user);
console.log(user2);
