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