 
 
 //// Hello BUDDY , Starting Of JavaScript ............
 
 
 
 
 /*let js = 'amazing';
  
  console. log(40+8+23-10);
  
  console. log("mukund");
  console.log('23');

  let firstName = "Kumar";  
  
  // variable name write using camel case notation   
  
  console.log(firstName);
  console.log(firstName);
  console.log(firstName);

let Jonas_matilda ="BMK";
let $function = 27;

let person = "mukund";
let PI = 3.1415;

let myFirstJob = 'coder';
let myCurrentJob = 'Teacher';

letjob1 = "coder";
letjob2 = 'Teacher';

console.log(myFirstJob);  */








/*let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'mukund');


javascriptIsFun ='YES!';
console.log(typeof javascriptIsFun);


let year;
console.log(year);
console.log(typeof year);


year = 1991;
console.log(typeof year);

console.log(typeof null); */







/* let age = 30;
age = 31;

const birthYear = 2005;
// birthYear = 1990;  (Wrong)

var job = 'programmer';
job = 'teacher';

lastName = 'Kumar';
console.log(lastName);  */





/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas,ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the powe of 3 = 2 * 2 * 2

const firstName = 'mukund';
const lastName = 'satish';
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);

// Assignment operators
 let x = 10 + 5;  //15
 x += 10; // x = x  + 10 = 25
 x += 10; // x = x * 4 = 100
 x--;
 x--;

 console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah);  //  > , <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now -2018); */
//  first (-) operator work then (> ) bcz precedence series
  




/*  const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas,ageSarah);


console.log(25 - 10 - 5 );   // 10 bcz  left to right 

let x, y;
x = y = 25 - 10 -5 ; // x = 10, x= 10   bcz right to left 
console.log(x,y);


const averageAge = ageJonas + ageSarah/2;
console.log (ageJonas, ageSarah);
*/





//// Coding  Challenge #1

/* const massMark = 67;
 const heightMark = 1.73;
 const massJohn = 72;
 const heightJohn = 1.76;

 const BMIMark = (massMark / heightMark ** 2);
const BMIJohn = (massJohn / (heightJohn * heightJohn));
const markHigherBMI = BMIMark > BMIJohn;
   
console.log(BMIJohn , BMIMark, markHigherBMI);*/



/*const massMark =78 ;
 const heightMark = 1.69;
 const massJohn = 92;
 const heightJohn = 1.95;

 const BMIMark = (massMark / heightMark ** 2);
const BMIJohn = (massJohn / (heightJohn * heightJohn));
const markHigherBMI = BMIMark > BMIJohn;
   
console.log(BMIJohn , BMIMark, markHigherBMI);*/







/*const firstName = 'mukund';
const job = 'student';
const birthyear = 2005;
const year = 2037 ;

const mukund = "I'm" + firstName + ', a ' + ( year - birthyear ) + ' years old ' + job + '!' ;
console.log(mukund);


const mukundNew = `I'm ${firstName}, a ${year - birthyear} year old ${job}!`;
console.log(mukundNew);

console.log(`Just a regular string ........`);

console.log('String with \n\ multiple \n\ lines');

console.log( `string
  multiple
  lines`);  */






 /*   const age = 15;

  if(age >= 18) {
    console.log ('mukund can start driving license ');
  } else {
    const yearLeft = 18 - age;
    console.log (`mukund is too young. Wait another ${yearsLeft} :)'`)
  }

   
  const birthyear = 2012;

  let century;
  if (birthyear <= 2000) {
    century = 20;
  } else {
century = 21;
  }
console.log(century);   */
  




/* const massMark = 67;
 const heightMark = 1.73;
 const massJohn = 72;
 const heightJohn = 1.76;

 const BMIMark = (massMark / heightMark ** 2);
const BMIJohn = (massJohn / (heightJohn * heightJohn));
console.log(BMIMark,BMIJohn);


if(BMIMark> BMIJohn) {
  console.log("mark's BMI is higher than John's!")
}  else {
  console.log("John's BMI is higher than Mark's!")
}  */
   

 /*  const massMark =78 ;
 const heightMark = 1.69;
 const massJohn = 92;
 const heightJohn = 1.95;

 const BMIMark = (massMark / heightMark ** 2);
const BMIJohn = (massJohn / (heightJohn * heightJohn));

console.log(BMIMark,BMIJohn);


if(BMIMark> BMIJohn) {
  console.log(`mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}  else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's(${BMIMark})!`)
}   */






   /*   // type conversion 
const inputYear = '1991';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);


// type coerction
console.log('I am' + 23 + 'years old');
console.log('23' - '10'-3);
console.log('23' /'2');



let n = '1' + 1;    // '11'
n= n -1;
console.log(n);  */ 







/*     //5 falsy values: 0,'',undefined,null,NaN


console.log(Boolean (0));
console.log(boolean(undefined));
console.log(Boolean('mukund'));
console.log(Boolean({}));
console.log(Boolean(''));

const  money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
console.log('You should get a job!');
}


let height = 100;
if(height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is defined');
}
     */






/*  const age = 18;
if (age === 18 ) console.log('you just become an adult :D (strict)');
if ( age ==18) console.log('You just become an adult :D(lo0se)');
// output  you just become an adult :D (strict)
  */ 

const age = '18';
if (age === 18 ) console.log('you just become an adult :D (strict)');
if ( age ==18) console.log('You just become an adult :D(lo0se)');
if ( age ==18) console.log('You just become an adult :D(lo0se)');
// output   You just become an adult :D(lo0se)


/*  const favourite = (prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);  */


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite); 

if (favourite === 23 )  {  // 22 === 23 -> false
  console.log('Cool! 23 is an amazing number!')
} else if (favourite ===7) {
     console.log('7 is also a cool number')
  }   else if (favourite ===9) {
     console.log('9 is also a cool number')

}else {
  console.log('Number is not 23 or 7 or 9')
}


if (favourite !== 23) console.log('Why not 23?');