// ------------------------------------- lecture 32 - strict mode
"use strict";
/* 
let thisIsCorrect= true;

const isTrue = true;
if (isTrue) {
	thisIsCorect = false;
}

if (!thisIsCorrect) {
	console.log('should not show');
} 
*/
// -------------------------------------------------------------------------------------------

// ------------------------------------- lecture 33 - function
/* 
function logger(){
	console.log('this function logs data');
}

// here function is called / invoked / run
logger();

function calculatePower(num,power){
	return num**power;
}

const fourSquare = calculatePower(4,2);//function invoked / called / run
console.log(fourSquare);

const oneGB = calculatePower(2,10);//function invoked / called / run
console.log(oneGB);
 */
// -------------------------------------------------------------------------------------------

// ------------------------------------- lecture 34 - functions declaration and expression
// function declaration
/* 
function years(num) {
  return `you are ${num} years old`;
}

console.log(years(20));

// function expression
const ageString = function (num) {
  return `you are ${num} years old`;
}

console.log(ageString(20)); 
*/
// -------------------------------------------------------------------------------------------

// ------------------------------------- lecture 35 - Arrow function
//arrow function
/* 
(year) => "you are old";

const howOld = (year) => `you are ${year} years old`;

console.log(howOld(50));

const greetProperly = (name, age) => {
  if (age < 25) return `Yo! Big G ${name}`;

  return `Hey ${name}! Welcome aboard`;
};

console.log(greetProperly("dev", 23));
*/
// -------------------------------------------------------------------------------------------

// ------------------------------------- lecture 36 - function calling other function
/* 
const greetName = name => `Hey ${name}!`

const fullGreeting = function(age,name){
	if(age<25) return greetName(name)+ " How have you been!"
	return greetName(name)+" you are most welcome!"
}
console.log(fullGreeting(23, 'Dev'));
console.log(fullGreeting(68 ,'DadaJi')); 
*/
// -------------------------------------------------------------------------------------------

// ------------------------------------- lecture 38 - Challenge
/* const getAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphin = getAvg(44, 23, 71);
const avgKoala = getAvg(65, 54, 49);
console.log(avgDolphin, avgKoala);
console.log(avgDolphin <= 2 * avgKoala);
const checkWinner = (avgDolphin, avgKoala) =>
  avgDolphin >= 2 * avgKoala
    ? "Dolphin"
    : 2 * avgDolphin <= avgKoala
    ? "Koala"
    : "No one won";

console.log(checkWinner(avgDolphin, avgKoala));
 */
// -------------------------------------------------------------------------------------------

// ------------------------------------- lecture 39 - Arrays
/* 
//literal syntex
const fruits = ["apple", "banana", "peach"];
const fruitsList = new Array("apple", "banana", "peach");

console.log(fruitsList[1]);
console.log(fruits[1]);
console.log(fruits.length);
fruits[1] = "lichi";
console.log(fruits);

const banana = "banana";

const newFruitsList = ["apple", 50, banana, 40, "lichi", 750];
console.log(newFruitsList); 
*/
// -------------------------------------------------------------------------------------------

// ------------------------------------- lecture 39 - Arrays Methods
/* 
//literal syntex
const fruits = ["apple", "banana", "peach"];
//push and pop adds at the end of array
const length = fruits.push("lichi");
console.log(fruits);
fruits.pop();
console.log(fruits);

//shift and unshift remove at the start of array
fruits.shift();
console.log(fruits);
fruits.unshift('papaya');
console.log(fruits);

//indexOf return the position of the element
console.log(fruits.indexOf('papaya'));

//includes return the position of the element -- es6
console.log(fruits.includes('papaya'));
console.log(fruits.includes('apple'));

console.log(fruits);
console.log(length);
*/
// -------------------------------------------------------------------------------------------

// ------------------------------------- lecture 43 - Dot and bracket notation
/* 
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 36,
  jobTitle: "Manager",
  favFruits: ["apple", "banana", "peach"],
};

console.log(user);

console.log(user.firstName);
console.log(user["firstName"]);

// const input = prompt('which detail you want to see from user? (firstName, lastName, age, jobTitle, favFruits)')
// console.log(user[input]);

console.log(`${user.firstName} has ${user.favFruits.length} favorite fruits but ${user.favFruits[0]} is his most favorite fruit.`);
*/
// -------------------------------------------------------------------------------------------

// ------------------------------------- lecture 44 - Object Methods
/* 
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 36,
  jobTitle: "Manager",
  favFruits: ["apple", "banana", "peach"],
  isAdult: true,
  greetSomeone: function(person){
    this.greet = `Hi ${person}! My name is ${this.firstName}. Do you want to have ${this.favFruits[0]}?`
    return this.greet;
  }
};

console.log(user.greetSomeone('dev'));
console.log(user.greet);
*/
// -------------------------------------------------------------------------------------------

// ------------------------------------- lecture 45 - Challenge
/* 
const john = {
  fullName: "John Smith",
  height:1.69,
  mass:78,
  calcBMI: function(){
    this.BMI = this.height/this.mass;
  }
};
const mark = {
  fullName: "Mark Miller",
  height:1.92,
  mass:92,
  calcBMI: function(){
    this.BMI = this.mass/this.height**2;
  }
};
mark.calcBMI()
john.calcBMI()
console.log(`John's BMI (${john.BMI}) is ${mark.BMI>john.BMI?'lower':'higher'} than mark's BMI(${mark.BMI})`);
*/
// -------------------------------------------------------------------------------------------

// ------------------------------------- lecture 50 - Challenge
/* 
let arr = [22, 9, 62, 89, 3, 6, 26, 52, 2]
let len = arr.length

let i = 0;
let sum = 0;
while (i<len) {
  sum+=arr[i];
  i++;
}

console.log(sum/len);
 */
// -------------------------------------------------------------------------------------------
