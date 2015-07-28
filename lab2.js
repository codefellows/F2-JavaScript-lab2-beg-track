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

function Blob(blobs) {
  return blobs;
}

var blob = new Blob();

var peopleLeft = 1000;
var j = 1;
while (peopleLeft > 0) {
  peopleLeft = (peopleLeft - j);
  j++;
}
var hoursSpentInDowington = j;
console.log(hoursSpentInDowington);

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  this.population = population;
  this.peoplePerHour =  peoplePerHour;
  for (var i = 0; this.population > 0; i++) {
    this.population = this.population - (this.peoplePerHour * i);
  }
  var hoursSpentInDowington = i;
  console.log(hoursSpentInDowington);
};

  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');
assert(blob.hoursToOoze(45, 3) === hoursSpentInDowington, 'it took ' + hoursSpentInDowington + ' to consume the town');
assert(blob.hoursToOoze(1000000, 1) === hoursSpentInDowington, 'thats a long time in Dowington');
assert(blob.hoursToOoze(1000000, 100) === hoursSpentInDowington, 'thats an speedy blob');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************
// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.

var hello = {
  klingon: 'nuqneH',
  romulan: 'Jolan\'tru',
  'federation standard': 'hello'
};

function SentientBeing(homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
  console.log(hello[this.language]);
  return (hello[sb.language]);// this is the only place its breaking,
};

SentientBeing.prototype.sayHello();

var klingon = new SentientBeing('Qo\'noS', 'klingon', 'nuqneH'); // TODO: make a klingon
var romulan = new SentientBeing('Romulus', 'romulan', 'Jolan\'tru'); // TODO: make a romulan
var human = new SentientBeing('Earth', 'federation standard', 'hello'); // TODO: make a human

assert(human.sayHello(klingon) === 'nuqneH',
  'the klingon should hear nuqneH');
assert(klingon.sayHello(human) === 'hello', 'the human should hear hello');
assert(klingon.sayHello(romulan) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');
assert(romulan.sayHello(human) === 'hello', 'the human should hear hello');
assert(human.sayHello(human) === 'hello', 'the human should hear hello');
assert(human.sayHello(klingon) === 'nuqneH', 'the human should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  return Math.max.apply(Math, array);
  // TODO: return the largest number in the given array
}

// TODO: write three more assertions
assert(max([1, 3, 2]) === 3, '[1,3,2]');
assert(max([40, 2, 1.9]) === 40, '[40, 2, 1.9]');
assert(max(['dog', 'cat', 'ant']) === 'dog', '[\'dog\', \'cat\', \'ant\']');
assert(max([100, 10.0, 1.00]) === 100, '[100, 10.0, 1.00]');

function variablify(string) {
  var splitString = string.split(' ');
  var rightCase = [];
  for (var i = 1; i < splitString.length; i++) {
    var newString = splitString[i].charAt(0).toUpperCase() + splitString[i].substr(1);
    rightCase.push(newString);
  }
  rightCase.unshift(splitString[0]);
  rightCase.join('');
  return rightCase;
}
// I worked with Alina to come up with a plan for manipulating the string
// I referred to MDN for info on split() and push()
// TODO: write three more assertions
assert(variablify('one two three') === 'oneTwoThree',
  'variablify(\'one two three\')');
assert(variablify('the quick brown fox') === 'theQuickBrownFox', 'variablify(\'the quick brown fox\')');
assert(variablify('my dogs are cool') === 'myDogsAreCool', 'variablify(\'my dogs are cool\')');
assert(variablify('coding can be fun') === 'codingCanBeFun', 'variablify(\'coding can be fun\')');
//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
