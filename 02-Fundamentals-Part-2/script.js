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