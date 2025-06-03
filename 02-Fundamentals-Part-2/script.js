/// Hello, Buddy......

'use strict';
/* 
let hasDriversLicense = false;
constpassTest = true;

if (passTest) hasDriversLiciense = true;
if(hasDriversLicense) console.log('I can drive :D');

///const interface = 'Audio';
// const private = 534:

*/





//////////////  Functions

/*
function logger(){
    console.log('My name is Mukund');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges}'oranges.`;
    return juice;
}

const applejuice = fruitProcessor(5,0);
console.Log(applejuice.juice);

const appleOrange = fruitProcessor(10,5);
console.Log(appleOrange.juice);
*/





/*
// Funcction Declaration
function calcAge1(birthyear) {
    return 2030 - birthyear;
}
const calcAge1 = calcAge1(2005);


// function expression
const calcAge2 = function(birthyear) {
    return 2030 - birthyear;
}
const age2 = calcAge2(2030);

console.log(age1, age2);
*/



//// Arrow functions ///
/*
const calAge3 = birthYear => 2040 - birthYear;
const age3 = calcAge(1993);
console.log(age3);

const yearUnitRetirement = ( birthYear , firstName)
 => {
    const age = 2040 - birthYear;
    const retirement = 65 - age;
    //return retirement;
return `${firstName} retires in ${retirement}
years`;
}

console.log (yearUnitRetirement(1991, 'mukund'));
console.log (yearUnitRetirement(1980, 'Raj'));
*/




/// Calling A function inside A Function
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    retun juice;

}
console.log(fruitProcessor(2,3));
*/





/// Reviewing Functions

/*  
const calcAge = function(birthYear){
    return 2025 - birthYear;
 }

 const yearUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement =65 - age;

    if (retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
 }

 console.log(yearUntilRetirement(2005, 'mukund'));
 console.log(yearUntilRetirement(1930,'buddy'));
*/





 // Coding Challenge #1
/*
 const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test   #1

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >=   2 * avgKoalas) {
    console.log(Dolphins win (${avgDolphins} vs. ${avgKoalas}));

  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(Koalas win (${avgKoalas} vs. ${avgDolphins}));

  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test  #2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/





// hold

// introduction  to Arrays
/*
const friend1 = 'Sourav'
const friend2 = 'Raj';
const friend3 = 'Ujjwal';

const friends = ['Sourav','Raj','hello'
];
console.log(friends);

//const years = new Array(1900,1979,2005,2025);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Hira';
console.log(friends);
// friends =['bob', 'alice']

const firstName = 'Sourav';
const rule = [firstName, 'Mandal', 2025 - 2005,'teacher',friends];
console.log(rule);
console.log(rule.length);

//Exercise
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}
const years = [1990 , 1967 , 2002 ,2010,2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]),calcAge(years[years.length - 1])];
console.log(ages);
*/






//////// Basic Array Operation
/*
// add elements
const friends = ['sourav', 'raj', 'hira'];
const newLength = friends.push('ujjwal');
console.log(friends);
console.log(newLength);

friends.unshift('hello');
console.log(friends);
*/


//**** Remove elements ****//

/*
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(friends.indexOf('raj'));
friends.shift(friends.indexOf('bob'));

friends.push(23);
console.log(friends.includes('bob'));
console.log(friends.includes('raj'));
console.log(friends.includes('23'));

if (friends.includes('raj')) {
    console.log('You have a friend called raj');
}
*/







/////  Coding Challenge #2
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/





/// Introduction to object
/*
const mukundArray = [
    'mukund',
    'kumar',
    2025 - 2005,
    'student',
    ['sourav', 'raj','hira']
];

const mukund = {
    firstName: 'mukund',
    lastName: 'kumar',
    age: 2025 - 2005,
    job: 'student',
    friends: ['sourav', 'raj', 'hira']
};
*/


/////////object
// Dot vs Bracket Notation
/*
const mukund = {
    firstName: 'mukund',
    lastName: 'kumar',
    age: 2025 - 2005,
    job: 'student',
    friends: ['sourav', 'raj', 'hira']
};
console.log(mukund);

console.log(mukund.lastName);
console.log(mukund['lastName']);

const nameKey = 'Name';
console.log(mukund['first' + nameKey]);
console.log(mukund['last' + nameKey]);

//console.log(mukund.'last' + nameKey) --> Wrong way

const interestedIn = prompt('What do you whant to know about mukund? Choose between firstName, lastName, age, profession, and friends');

if (mukund[interestedIn]) {
    console.log(mukund[interestedIn]);
}else{
    console.log('Wrong request! Choose between firstName, lastName, age, profession, and friends');
}
mukund.location = 'hazaribag';
mukund['email'] = 'balmukund8294@gmail.com';
console.log(mukund);


//  Challenge 
// mukund has 3 friends, and his best friend is called raj


console.log(`${mukund.firstName} has ${mukund.friends.length} friends, and his best friend is called ${mukund.friends[1]}`);
*/






///////// OBJECT METHODS //
/*
const jonas = {
  firstName: 'mukund',
  lastName: 'kumar',
  birthYear: 2000,
  profession: 'Student',
  friends: ['sourav', 'raj', 'hira'],
  hasDrivingLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.profession}, and he has ${this.hasDrivingLicense ? 'a' : 'no'} driving license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

console.log(jonas.getSummary());
*/

 




///Coding Challenge  # 3
/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"


if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
  */






//////Iteration the for loop
/*
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');


// for loop keeps running while condition is true

for(let rep = 1; rep <=30; rep++) {
    console.log(`Lifting wights repetition ${rep}`);
}
    */





//////Looping, Arrays, Breaking Condition 
/*
const mukund = [
    'mukund',
    'kumar',
    2025-2005,
    'Student',
    ['raj', 'sourav', 'hira']
];
const types = [];

// console.log(mukund[0])
// console.log(mukund[1])
// ...
// console.log(mukund[4])
// jonas[5] does NOT exist

for (let i = 0; i <mukund.length; i++) {

  // Reading from MUKUND array


  console.log(mukund[i], typeof mukund[i]);

  // Filling types array 

  // types[i] = typeof mukund[i];

  types.push(typeof mukund[i]);
}

console.log(types);

const years = [1995, 2005, 1969, 2021];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}
console.log(ages);


// continue and break
console.log('-----only Strings----')
for (let i = 0; i < mukund.length; i++) {
    if (typeof mukund[i] !== 'string') continue;

    console.log(mukund[i], typeof mukund[i]);
}

console.log('-----Break With Number---')
for (let i = 0 ; i < mukund.length; i++){
    if ( typeof mukund[i]==='number') break;

    console.log(mukund[i], typeof mukund[i]);

}
*/





/////// LOOPING BACKWARDS 
/*
const mukund = [
    'mukund',
    2025-2005,
    'Student',
    ['sourva', 'raj', 'hira']
];

// 0, 1, ..., 4
// 4, 3, .
  

for (let i = mukund.length - 1; i >= 0; i--) {
  console.log(i, mukund[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
    }
}
    */






/////// WHILE LOOP 
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) { 
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end.................');
}
  */






///////Coding  CHALLENGE - #4 
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

*/



/////////////////////    COMPLETED  /////THE END //////
