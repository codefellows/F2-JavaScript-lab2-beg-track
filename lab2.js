'use strict';

// LAB 2: SORTING AND CAMPY SCI-FI

// Welcome to Lab 2 =)

// Be sure to read all the comments!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

// To run this file (in the terminal) use: node lab2.js

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

var dowingtonPop = 1000;
var hours = 1;

var Blob = function(startingRate) {
  this.startingRate = startingRate;
};

var blob = new Blob(1);

while (dowingtonPop > 0) {
  if (dowingtonPop >= blob.startingRate) {
    console.log('Population: ' + dowingtonPop);
    console.log('People consumed: ' + blob.startingRate);
    console.log('Hours: ' + hours);
    dowingtonPop -= blob.startingRate;
    blob.startingRate++;
    hours++;
  } else if (blob.startingRate > dowingtonPop) {
    console.log('Population: ' + dowingtonPop);
    hours += (dowingtonPop / 60);
    dowingtonPop -= dowingtonPop;
    console.log(hours.toFixed(2));
  }
}

var hoursSpentInDowington = hours; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  hoursSpentInDowington = 0;
  while (population > 0 && peoplePerHour > 0) {
    hoursSpentInDowington++;
    if (population >= peoplePerHour) {
      population -= peoplePerHour;
      peoplePerHour++;
    } else if (peoplePerHour > population) {
      hoursSpentInDowington += (population / 60);
      population -= population;
    }
  }
  console.log(hoursSpentInDowington);
  return hoursSpentInDowington;
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(-1, 1) === 0, 'population cannot be negative');
assert(blob.hoursToOoze(1, 0) === 0, 'no consumption rate means no oozing!');
assert(blob.hoursToOoze(1, -1) === 0, 'cannot have a negative consumption rate');

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(homePlanet, greeting) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  this.greeting = greeting;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
    console.log(this.greeting);
    return sb.greeting;
  };

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

function Human() {}
Human.prototype = Object.create(SentientBeing.prototype);
Human.prototype.greeting = hello['federation standard'];
var homosapien = new Human();

function Klingon() {}
Klingon.prototype = Object.create(SentientBeing.prototype);
Klingon.prototype.greeting = hello.klingon;
var klingy = new Klingon();

function Romulan() {}
Romulan.prototype = Object.create(SentientBeing.prototype);
Romulan.prototype.greeting = hello.romulan;
var rommie = new Romulan();

homosapien.sayHello(klingy);
homosapien.sayHello(rommie);
klingy.sayHello(homosapien);
klingy.sayHello(rommie);
rommie.sayHello(homosapien);
rommie.sayHello(klingy);

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');
assert((new Klingon()).sayHello(new Human()) === 'hello',
  'the human should hear hello');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');
assert((new Romulan()).sayHello(new Human()) === 'hello',
  'the human should hear hello');

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
  return Math.max.apply(null, array);
}

max([0, 0, 0]);

// TODO: write three more assertions
assert(max([1, 3, 2]) === 3, '[1,3,2]');
assert(max([-5, 4, -1]) === 4, '[-5, 4, -1]');
assert(max([0, 0, 0, 0, 1, 0, 0, 0]) === 1, '[0,0,0,0,1,0,0,0]');

function variablify(string) {
  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()
  //function capitalize()
  string = string.toLowerCase().split(' ');
  for (var words = 1; words < string.length; words++) {
    string[words] = string[words].charAt(0).toUpperCase() + string[words].slice(1);
  }
  return string.join('');
}

variablify('one two three');

// TODO: write three more assertions
assert(variablify('one two three') === 'oneTwoThree',
  'variablify(\'one two three\')');
assert(variablify('ONE TWO THREE') === 'oneTwoThree',
  'variablify(\'one two three\')');
assert(variablify('OnE tWo THREE FoUR') === 'oneTwoThreeFour',
  'variablify(\'one two three\')');
assert(variablify('one') === 'one',
  'variablify(\'one\')');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
