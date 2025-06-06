'use strict';

//// HELLO, BUDDY😊............

//// Functions...
////////////////////////////////////////////////
///// Default Parameters.....
/*
const booking = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // unmPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123,5');

createBooking('LH123', undefined, 1000);
*/
///
///////
////////////////////////////////////////////////

//// how to passing Arguments Works_ Value vs. Reference.
/*
const flight = 'LH234';
const mukund = {
  name: 'Mukund Kumar',
  passport: 829497458848,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.name === 829497458848) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight,mukund);
// console.log(flight);
// console.log(mukund);

//////IS the same as doing ......
//const flightNum = flight;
//const passenger  = mukund;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(mukund);
checkIn(flight, mukund);
*/

///
/////
//////////////////////////////////////////////

//First-Class and Higher-Order Functions.....
//
///
///Functions Accepting Callback Functions.
/*
const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//////Higher-order function...................
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//// JS callbacks all the time.....
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['mukund', 'raj', 'sourav'].forEach(high5);
*/

////
/////
///////////////////////////////////////////////
//

///Functions Returning Functions.....
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('radhe');
greeterHey('raj');

greet('Hello')('radhe');

// Challenge ........

const greetArr = greeting => Name => console.log(`${greeting} ${Name}`);

greetArr('Hiiii')('raj,,,');
*/

/////
//////
//////////////////////////////////////////////

///
//// The call and apply Methods......
/*
const air_india = {
  airline: 'air india',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push(`{ flight: ${this.iataCode}${flightNum}, name}`);
  },
};

air_india.book(239, ' raj');
air_india.book(239, 'hira');
console.log(air_india);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = air_india.book;

/// Doesn't work.....
// book(1220, 'ujjwal');

book.call(eurowings, 23, 'ujjwal');
console.log(eurowings);

book.call(air_india, 23, 'radhe');
console.log(air_india);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'ray');
console.log(swiss);

// Apply method
const flightData = [583, 'bhawesh'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
*/

////
/////////////
/////////////////////////

///continue...

////////The bind Method..........

// book.call(eurowings, 23, 'ujjwal');
/*
const bookEW = book.bind(eurowings);
const bookLH = book.bind(air_india);
const bookLX = book.bind(swiss);

bookEW(23, ' ujjwal');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('raj');
bookEW23('hira');

//// With Event Listeners.....
air_india.planes = 300;
air_india.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// air_india.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', air_india.buyPlane.bind(air_india));

/// Partial application.....
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

//////
//////

////////////////////////////////////////////////

//Coding Challenge #1.......
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  ///// This generates [0, 0, 0, 0]. More in the next section 😊😊😊😊😊😊
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //// Get answer......
    const answer = Number(
      prompt(`
        ${this.question}\n${this.options.join('\n')}\n(Write option number)`)
    );
    console.log(answer);

    //// Register answer......
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      /// Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
*/

////
/////
////////////////////////////////////////////////

///// Immediately Invoked Function Expressions (IIFE).....

/*
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE...
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

////
//////
////////////////////////////////////////////////

///Closures
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

//
////
/////////////////////////////////////////\

/// More Closure Examples.......

//// Example== 1.....
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

/// Re-assigning f function...
h();
f();
console.dir(f);

//// Example== 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
