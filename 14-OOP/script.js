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

////// Coding Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

////..............................................................................................////////

//// ES6 Classes....

/*
/// Class expression...
// const PersonCl = class {}

/// Class declaration...
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  /// Set a property that already exists...
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  /// Static method....
  static hey() {
    console.log('Hey there 👋👋👋👋👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica', prototype);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
// console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

///1. Classes are NOT hoisted
/// 2. Classes are first- class citizes
/// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);
*/

////............................................................................................./////

//// Setters & Getters......

/*
const account = {
  owner: 'RAM...',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/

////................................................................................................/////

/// Object.create

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const stevn = Object.create(PersonProto);
console.log(stevn);
stevn.name = 'stevn';
stevn.birthYear = 2002;
stevn.calcAge();

console.log(stevn._proto_ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('sarah', 1979);
sarah.calcAge();

*/

////............................................................................................/////////
