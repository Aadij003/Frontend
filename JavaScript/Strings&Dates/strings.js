// Ways to create a string 
// const str1="ABCD";
// const str2='ABCD';
// const str3=`AB
// C
// D`;                 // modern way to create a string , we can also continue to write the string in the next line which is not possible when we are using "" or ''


// const age=20;
// const str4=`my age is ${age} `;  
// console.log(str4);


// const str=`Hello world !!`;
// console.log(str.length);
// console.log(str[5]);         // output= space 

// const a=str.toUpperCase();
// const b=str.toLowerCase();
// console.log(a);
// console.log(b);
// console.log(str);

// const str=`Hello world !!`;
// console.log(str.indexOf('llo'));
// console.log(str.includes('abcd'));
// console.log(str.slice(2,8));           // starting from index 2(inclusive) till index 8(exclusive i.e. 8th index value won't be printed)


//slicing
// console.log(str.slice(2));      // starting from 2nd index it will print the whole string, output = llo world !!
// console.log(str.slice(-5));      // last index is -1 ,last second is -2,last third is -3 and so on....  therefore -5 means last fifth i.e. from l to ! would be printed i.e. from -5 to last index , outut = ld !! 
// console.log(str.slice(-5,-1));

//substring
// console.log(str.substring(2,5));    // similar concept as slice but "in substring we can't put -ve numbers inside brackets"


// concatenate 2 strings
// const str1=`Hello`;
// const str2=`World`;
// const str3=str1+" "+str2;
// console.log(str3);


// replacement in string
// const str="Hello Everyone";
// const c=str.replace("Everyone","World");
// console.log(c);

// trimming in string
// const str="   Hello   ";
// console.log(str.trim());       //output=Hello (without spaces)


//splitting in string
const str="Rohit,Mohit,Arjun";
console.log(str.split(","));         // output= [ 'Rohit', 'Mohit', 'Arjun' ]   returns an array with splitted part

