'use strict';
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAgeM = jonas.calcAge;
matilda.calcAgeM();

*/
/*
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
//jonas.greet();
jonas.calcAge();
*/
/*
let age = 30;
let oldAge = age;

age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;

friend.age = 27;
console.log(friend);
console.log(me);
*/

/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

let newnewArr = [1, 2, 3];
let anotherArr = [4, 5, 6];
const combinedArr = [...newnewArr, ...anotherArr];
console.log(combinedArr);

*/

/*
const orderPasta = function (ing1, ing2, ing3) {
  console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`);
};

const ingredients = [
  prompt(`Let's make pasta! Ingredient 1?`),
  prompt(`Let's make pasta! Ingredient 1?`),
  prompt(`Let's make pasta! Ingredient 1?`),
];
orderPasta(...ingredients);
*/
/*
// Spread on the right side of the =
const arr2 = [1, 2, ...[3, 4]];

// Rest is on the left side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const add = function (...numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  console.log(sum);
};
add(1, 4);
add(4, 6, 6);
add(5, 7, 3, 6, 2);

const x = [23, 5, 7];
add(...x);
*/

// short curcuit logical operator
// good for setting defaults without using if statements

const numGuests = 0;
const guest1 = numGuests ? numGuests : 10;
console.log(guest1);

const guest2 = numGuests || 10;
console.log(guest2);
