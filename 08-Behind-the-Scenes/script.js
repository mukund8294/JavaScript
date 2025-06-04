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

// this keyword practice
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
