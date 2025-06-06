'use strict';

//// HELLO, BUDDY😊............

//// Functions...
////////////////////////////////////////////////
///// Default Parameters.....

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

///
///////
////////////////////////////////////////////////

//// how to passing Arguments Works_ Value vs. Reference.
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
