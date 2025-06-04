'use strict';

///////// Scoping practice
/*
///// FUNCTION SCOPE
function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    ////  BLOCK SCOPE
    if (birthYear >= 1981 && birthYear <= 1996) {
      var Millenial = true;

      // Creating new variable with same name as outer scope's variable
      const firstName = 'Raj';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh my god!!!,  you're a Millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(Millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

//// GLOBAL SCOPE
const firstName = 'mukund';
calcAge(1993);
// console.log(age);
//  printAge();
*/

//
//
//
////// Hoisting and TDZ in Prac.
/*
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'raj';
let profession = 'teacher';
const year = 2005;

// Functions
console.log(addDecl(2, 3));

// console.log(addExpr(2, 3));

//console.log(addArrow(2, 3));

//.

//.
function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

//.

//

// (this) keyword practice
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2027 - birthYear);
  //console.log(this)
};
calcAge(1995);

const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  console.log(this);
};
calcAge(1995);

const Raj = {
  year: 2025,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
};
Raj.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = Raj.calcAge;
matilda.calcAge();
*/

//

////// Regular_function vs Arrow_function

//var firstName = 'matilda';
/*
const Raj = {
  firstName: 'mukund',
  year: 2025,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution ---#2
    const isRaj = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isRaj();
  },
  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstName}`);
  },
};
Raj.greet();
Raj.calcAge();

//
// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/

////// Primitive  Vs. Reference Values
/*
// primitive value

let age = 30;
let oldAge = age;
age = 31;
console.log(age);  //31
console.log(age); //30


//// Reference value
const me = {
    name: 'mukund'
    age: 30,
};
const friend = me;
friend.age =27;

console.log(`friend:`, friend);
//{ name: 'mukund' , age : 27}

console.log('Me:', me);
*/

// 2nd example
/*
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {};

//
// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
*/
