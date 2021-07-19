'use strict';
/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5
  //numPassengers = numPassengers || 1;
  //price = price || 199;

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
createBooking('LH123', undefined, 1000);
*/

/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmit',
  passport: 242345245242,
};

const checkIn = function (flightNum, passenger) {
  if (passenger.passport === 242345245242) alert('Checked in');
  else alert('Wrong passport');
};

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

const lufthasa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline}
        flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthasa.book(233, 'Jonas');
console.log(lufthasa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthasa.book;

// Does not work
//book(23, 'Sarah');

// call method allows you to manually set the this keyword
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

// bind method
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Smed');

// with event listeners
lufthasa.planes = 300;
lufthasa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthasa.buyPlane.bind(lufthasa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23

console.log(addVAT(100));
