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
