'use strict';

/* ********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js */

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
 with Dowington. */

function Blob() {}

var blob = new Blob();

for (var i = 0; i < population.length; i++)


var hoursSpentInDowington = var hoursSpentInDowington = blob.hoursToOoze(1000, 1);
                            // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  this.population = population;
  this.peoplePerHour = peoplePerHour;
}

  Blob.prototype.hoursToOoze = function(population, peoplePerHour) {

}
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

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

function SentientBeing (homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language = language;
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}

// sb is a SentientBeing object
function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
  }

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.


function Klingon() {
 this.being = 'Klingon'
}
  Klingon.prototype = new SentientBeing('QonoS', 'Klingon')

function Romulas() {
  this.being = 'Romulas'
}
  Romulus.prototype = new SentientBeing('Romulas', 'Romulan')

function English() {
  this.being = 'English'
} 
  sayHello.English.prototype = new SentientBeing('Earth', 'English')

var klingon = new SentientBeing(); // TODO: make a klingon
var romulan = new SentientBeing(); // TODO: make a romulan
var human = new SentientBeing(); // TODO: make a human

assert(human.sayHello(klingon) === 'nuqneH',
  'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

assert(human.sayHello(romulan) === 'Jolan\'tru',
  'the romulan should hear 'Jolan\'tru');
assert(klingon.sayHello(human) === 'hello', 
  'the human should hear hello');
asser(klingon.sayHello(romulan) === 'Jolan\'tru', 
  'the human should hear Jolan\'tru');
assert(romulan.sayHello(human) === 'hello',
  'the human should hear hello');
assert(romulan.sayHello(klingon) === 'nuqneH', 
  'the klingon should hear nuqneH')

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
  return Math.max.apply(Math, array);

};

// TODO: write three more assertions
assert(max([ 1, 2, 3 ]) === 3, '[1,2,3]');
assert(max([ 4, 5, 6 ]) === 3, '[4,5,6]');
assert(max([ 7, 8, 9]) === 3, '[7,8,9]');
assert(max([ 10, 11, 12]) === 3, '[10,11,12]');

function variablify(string) {
  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()
}

var splitString = variablify.split


// TODO: write three more assertions
assert(variablify('one two three') === 'oneTwoThree',
  'variablify(\'one two three\')');
assert(variablify('four five six') === 'fourFiveSix',  
 'variablify(\'four five six\')');
assert(variablify('seven eight nine') === 'sevenEightNine',  
 'variablify(\'seven eight nine\')');
assert(variablify('ten eleven twelve') === 'tenElevenTwelve',  
 'variablify(\'ten eleven twelve\')');
//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
