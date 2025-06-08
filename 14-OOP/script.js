'use strict';

/////...............................................................................................//////

///// Constructor Functions and the new Operator.....

/*
const person = function (firstName, birthYear) {
  /// Instance properties....
  this.firstName = firstName;
  this.birthYear = birthYear;

  /// Never to this
  /// this.calcAge = function {
  /// console.log(2037 - this.birthYear);
  /// };
};

const mukund = new Person('Mukund', 2005);
console.log(mukund);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);
*/

////.............................................................................................../////

///// Prototypes.....

/*
console.log(personalbar.prototype);

personalbar.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

mukund.calcAge();
matilda.calcAge();

console.log(mukund__proto__);
console.log(mukund__proto__ === personal.prototype);

console.log(personal.prototype.isPrototyprOf(mukund));
console.log(personal.prototype.isPrototyprOf(jonas));
console.log(personal.prototype.isPrototyprOf(person));

/// .prototypeOfLinkedObjects....

personalbar.prototype.species = 'Homo Sapiens';
console.log(mukund.species, matilda.species);

console.log(mukund.hasOwnProperty('firstName'));
console.log(mukund.hasOwnProperty('species'));
*/

////................................................................................................./////

////  Prototypal Inheritance on Built-In Objects.....

/*
console.log(mukund.__proto__);
///Object.prototype (top of prototype chain)
console.log(mukund.__proto__.__proto__);
console.log(mukund.__proto__.__proto__.__proto__);

console.dir(personalbar.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; //new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

////...............................................................................................////
