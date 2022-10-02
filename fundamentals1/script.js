// ---------------------------------------- fundamental lecture 9 - linking javascript
/**

let js = "amazing";
if (js === "amazing") alert("JS is amazing");
console.log(10 + 789 - 565 + 88);
 
*/
// -----------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------- fundamental lecture 10 - values and variables
/**

let myName = 'John';
console.log(myName);
let PI = 4.1415;

*/
// -----------------------------------------------------------------------------------------------------------------------------------------

// fundamental lecture 11 - Assignment - values and variables
/**
let country = "India";
let continent = "Asia";
let population = 1400000000;
console.log( country, "which is a country in the continent", continent, "has population of approximately", population,"+ people!"); 

*/
// -----------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------- fundamental lecture 12 - data types
/* 
let isTrue = true;
console.log(isTrue);
console.log(typeof isTrue);
console.log(typeof 23);
console.log(typeof 'john');

isTrue = 'Yes!';
console.log(isTrue);
console.log(typeof isTrue);

let isFalse;
console.log(isFalse);
console.log(typeof isFalse);

isFalse = 'No';
console.log(isFalse);
console.log(typeof isFalse);
*/
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 13 - let vs const vs var
/* 
let time = '11:44';
console.log(time);

time = '11:45'
console.log(time);

const GENDER = 'Male';
console.log(GENDER);

//GENDER = 'Female'; cant be assigned
var day = 'Thursday';
day = 'Friday';

week = 53;
console.log(week);//variable defined in global scope
*/
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 14 - Basic operators
// Allows us to to combine and transform values
/* 
let fruits = 20;
let apples = 5;
console.log("fruits other than apples", fruits - apples);

let otherFruitsDividedInThree = (fruits - apples) / 3;
console.log(otherFruitsDividedInThree);

let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName);
*/

// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 15 - Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
// most or the operations are left to right, assignment and exponent operations are right to left
/* 
let ageJhon = 27;
let ageJean = 19;
let ageJaan = 40;

let avg = (ageJaan + ageJhon + ageJean) / 3; //grouped operations are done first and then divided
console.log(avg);

let x, y;
x = y = 50 - 89 + 77;
console.log(x, y);
*/
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 16 - coding challenge
//test case 1
/* 
let mass, height;
mass = 78;
height = 1.69;
let bmiMark = mass / height ** 2;
mass = 92;
height = 1.95;
let bmiJohn = mass / height ** 2;
let markHigherBMI=bmiMark>bmiJohn
console.log(bmiMark);
console.log(bmiJohn);
console.log(markHigherBMI);
*/
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 17 - string and template literals
/* 
let name = 'John Smith'
let greeting = `Hi! I ${name} welcome you to JS`;

console.log(greeting);
console.log(`This
is 
multi
line
string`);
*/
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 18 - if/else
/* 
let age = 17;
let isOldEnough = age >= 18;
if (isOldEnough) {
  console.log(`You are eligible to drive`);
} else {
  console.log(`You are ${18 - age} years away to be able to drive`);
} 
*/
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 20 - data type conversion and coercion
/* 
// type conversion
let age = '17';
console.log(Number(age));
console.log(typeof Number(age));
age = age + 2;
console.log(age);

console.log(Number('John'));

// type coercion
console.log("This is a number "+2+" which is a first prime number");
console.log("10"+2+"8");
console.log("10"-(-2+"8"));
console.log("10"-"8");
*/
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 21 - truthy and falsy
/* 
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean('Hi!'));
console.log(Boolean({}));
console.log(Boolean(NaN));

let scale = 10;

if(scale){
  console.log(`scale has a length ${scale}`);
}else console.log(`scale has no defined length`);

let thirst;

if(thirst){
  console.log(`Person has thirst`);
}else console.log(`Person is not thirsty`);
*/
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 22 - equality
/* 
let scale = 10;
// loose equality
if(scale=='10'){
  console.log(`scale has a length ${scale}`); //output
}else console.log(`scale has no defined length`);

// strict equality
if(scale==='10'){
  console.log(`scale has a length ${scale}`);
}else console.log(`scale has no defined length`); //output

const p = prompt("number of states of mater?")
if(p===3) console.log("try again");
 */
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 23 - Boolean logic
/* AND OR and NOT */
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 23 - Logical operator
/*
let hasLicense = true;
let hasGoodVision = true;
console.log(hasGoodVision && hasLicense);

hasGoodVision = false;
console.log(hasGoodVision && hasLicense);
console.log(hasGoodVision || hasLicense);
console.log(!hasGoodVision);
*/
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 24 - Logical operator
/*
let hasLicense = true;
let hasGoodVision = true;
console.log(hasGoodVision && hasLicense);

hasGoodVision = false;
console.log(hasGoodVision && hasLicense);
console.log(hasGoodVision || hasLicense);
console.log(!hasGoodVision);
*/
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 25 - Challenge
// 2 teams 3 match highest wins match
/* 
let match1scoreDolphin = 96;
let match1scoreKoalas = 88;
let match2scoreDolphin = 108;
let match2scoreKoalas = 91;
let match3scoreDolphin = 89;
let match3scoreKoalas = 110;

let dolphin=0;
let koalas=0;

if (match1scoreDolphin > match1scoreKoalas && match1scoreDolphin > 100) {
  dolphin += 1;
}else if (match1scoreDolphin > match1scoreKoalas && match1scoreKoalas > 100)koalas+=1;
if (match2scoreDolphin > match2scoreKoalas) {
  dolphin += 1;
}else koalas+=1;
if (match3scoreDolphin > match3scoreKoalas) {
  dolphin += 1;
}else koalas+=1;

if(dolphin>koalas) console.log('Winner Dolphin');
else console.log('Winner Koalas'); 
*/
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 26 - switch
/* 
const day = 'Tuesday';

switch(day){
  case 'Sunday':
    console.log('Its almost over');
    break;
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
    console.log('Go to office');
    break;
  case 'Friday':
    console.log('Its a weekend');
    break;
  case 'Saturday':
    console.log('Weekend started');
    break;
}
 */
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 27 - expression and statement
/* 
// expression produces a values
3+2;
true;
true && false;

// statement doesn't produce values but performs an action
if(true){}
switch(day){}
*/
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 28 - ternary operator
/* 
// operator == expression
const age = 18;
console.log(age >= 18 ? "Ill have wine" : "I am underage");
*/
// -----------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------- fundamental lecture 29 - challenge

let bill =400;

console.log(bill > 50 && bill < 300 ? `tip is ${.5*bill}`:`tip is ${.2*bill}`);
// -----------------------------------------------------------------------------------------------------------------------------------------
