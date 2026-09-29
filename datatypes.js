// JavaScript Data Types

// A data type tells us what kind of value we are storing in a variable.

// JavaScript has 8 basic data types:

// String  : string is text ;  

let age = "2345";
console.log(age);


// Number : numeric value;  

let number = 123;
console.log(number)


// BigInt : BigInt is used for integers that are larger than the safe range of JavaScript's normal Number.
 
let bignumber = 1234567898765432123456787654n;
console.log(bignumber);


// Boolean
//  is true or false 

let a = 23;
console.log(a<10);

// Undefined means a variable exists but currently doesn't have a value.

let text ;
console.log(text);

// Null  means intentionally no value.
// undefined → value hasn't been provided
// null → we intentionally set it to "nothing"



let selectedUser = null;
console.log(selectedUser);

// Symbol creates a unique value.

// let a = Symbol("id");
// let b = Symbol("id");

// object
// Objects are used to store multiple related pieces of information.

let person ={
    name : "ujala",
    age : 23 ,
    college : "icfai university" ,
    isStudent : true

};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.college);
console.log(typeof person.name);
console.log(typeof person.age);
console.log(typeof person.isStudent)


