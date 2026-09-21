// Number
// let a=345.6821;
// console.log(a.toFixed(2));       // output will be 345.68 , basically after decimal only 2 places will be printed at output since toFixed(2) is what we have written in our code 
 
// console.log(a.toPrecision(4));   // represents precision, output will be 345.7 since toPrecision(4) is written

// // IMP        toFixed and toPrecision both returns string

// console.log(a.toString());       // converts number to string





// Number can be also be created this wayyy---
// let b=new Number(20);        // type of this variable b is "object"




//math object
// console.log(Math.abs(-10));
// console.log(Math.LN10);
// console.log(Math.PI);
// console.log(Math.random());                // range of random values is [0,1), means the range of random values would be between 0 & 1 where 0 is included and 1 isn't



//generate number between 1 to 10 including 1 and 10
//  console.log(Math.floor((Math.random()*10)+1)); 
 
 //generate a number between 1 to 6
//  console.log(Math.floor(Math.random()*6)+1);


//generate a number between 15 to 25
//  console.log(Math.floor(Math.random()*11)+15);             // Math.floor(Math.random()*(max-min+1))+min

//generate otp
console.log(Math.floor(Math.random()*(9999-1000+1))+1000);