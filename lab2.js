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

function Blob(name, homePlanet) {
  this.name = name;
  this.homePlanet = homePlanet;
}

var consume = 1;
var citizen = 1000;
var hoursSpentInDowington = 0;

for (var i = 0; i < 1000; i++) {
  citizen = citizen - consume;
//    console.log(citizen);
  consume++;
  hoursSpentInDowington++;
  if (citizen < 0) {
    console.log('Hours spent in Dowington: ' + hoursSpentInDowington);
    break;
  }
}

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  var hourCounter = 0;
  while (population > 0) {
    population -= peoplePerHour;
    peoplePerHour++;
    hourCounter++;
    if (population === 0) {
      return hourCounter;
    }   //end if
  }   //end while loop
  return hourCounter;
}       //end hoursToOoze function

Blob.prototype.hoursToOoze = hoursToOoze;

var blob = new Blob('Bob the Blob', 'meteorite');
// var phil = new Blob('Bob the Blob', 'pluto');
// var ceci = new Blob('Ceci the Blobette', 'mars');

// console.log("Hours to Ooze in Orlando: " + blob.hoursToOoze(5000, 100));
// console.log("Hours to Ooze in Philly: " + phil.hoursToOoze(1000, 10));
// console.log("Hours to Ooze in Seattle: " + ceci.hoursToOoze(3439000, 1));

blob.hoursToOoze(0, 1);
blob.hoursToOoze(1000, 1);
blob.hoursToOoze(1, 1);
blob.hoursToOoze(608700, 1);
blob.hoursToOoze(7130000000, 1);

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
   'hoursSpentInDowington should match hoursToOoze\'s result for 1000');
assert(blob.hoursToOoze(1, 1) === 1, 'should only take 1 hour.');
assert(blob.hoursToOoze(608700, 1) === 1103, 'it should take 1,103 hours to eat the population of Seattle');
assert(blob.hoursToOoze(7130000000, 1) === 119415, 'it should take 119,415 hours (13.65 years) to eat the population of Earth');

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

// TODO: specify a home planet and a language
// you'll need to add parameters to this constructor
function SentientBeing(homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object
// TODO: say hello prints out (console.log's) hello in the
// language of the speaker, but returns it in the language
// of the listener (the sb parameter above).
// use the 'hello' object at the beginning of this exercise
// to do the translating
//TODO: put this on the SentientBeing prototype

function SayHello(sb) {
  if (hello[this.language]) {
    console.log(hello[this.language]);
  }else {
    console.log(hello['federation standard']);
  }
  if (hello[sb.language]) {
    return hello[sb.language];
  }else {
    return hello['federation standard'];
  }
}     //end sayHello function

SentientBeing.prototype.SayHello = SayHello;

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing('Qo\'noS', 'klingon'); // TODO: make a klingon
var romulan = new SentientBeing('Romulus', 'romulan'); // TODO: make a romulan
var human = new SentientBeing('earth', '"federation standard"'); // TODO: make a human

assert(human.SayHello(klingon) === 'nuqneH',
   'the klingon should hear nuqneH');
assert(human.SayHello(romulan) === 'Jolan\'tru',
   'the romulan should hear Jolan\'tru');

assert(klingon.SayHello(human) === 'hello',
  'the human should hear hello');
assert(klingon.SayHello(romulan) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');

assert(romulan.SayHello(klingon) === 'nuqneH',
  'the klingon should hear nuqneH');
assert(romulan.SayHello(human) === 'hello',
  'the human should hear hello');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  return Math.max.apply(null, array);
}

max([1, 3, 2]);
max([11, 333, 2000, 21, 2020, 777, 7777, 88]);
max([230, 303, 210, 10000, 10230, 3201]);

// TODO: write three more assertions
assert(max([1, 3, 2]) === 3, '[1,3,2]');
assert(max([11, 333, 2000, 21, 2020, 777, 7777, 88]) === 7777, '[11, 333, 2000, 21, 2020, 777, 7777, 88]');
assert(max([230, 303, 210, 10000, 10230, 3201]) === 10230, '[230, 303, 210, 10000, 10230, 3201]');

// TODO: you are given a string with several words in it
// return a corresponding variable name that follows
// javascript conventions
// HINT:
// you might want to use these string methods:
//  split(), charAt(), toUpperCase()
// and this array method: join()

// TODO: write three more assertions
 // 'variablify(\'one two three\')');

function variablify(string) {
  var splitString = string.split(' ');
  //     document.write(splitString + "</br>");
  var i = 1;
  while (i < splitString.length) {
    var oneUp = splitString[i].charAt(0).toUpperCase();
    splitString[i] = oneUp + splitString[i].substr(1);
    i++;
  }
  return splitString.join('');
}

 // document.write(variablify('one two three'));

variablify('four scores and seven years ago');
variablify('an eye for an eye makes the whole world blind');
variablify('common sense aint so common');

assert(variablify('one two three') === 'oneTwoThree',
  'variablify(\'one two three\')');
assert(variablify('four scores and seven years ago') === 'fourScoresAndSevenYearsAgo',
  'variablify(\'fourScoresAndSevenYearsAgo\')');
assert(variablify('an eye for an eye makes the whole world blind') === 'anEyeForAnEyeMakesTheWholeWorldBlind',
  'variablify(\'anEyeForAnEyeMakesTheWholeWorldBlind\')');
assert(variablify('common sense aint so common') === 'commonSenseAintSoCommon',
  'variablify(\'commonSenseAintSoCommon\')');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************

//#########################################################
//REFERENCES::
//
//MATH MAX
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
//
//STRING SORT:
//http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript

//###########################################################
