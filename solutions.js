////////////////////// 8 KYU and 7 KYU //////////////////////////////////

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
  //code here
  let xCount = 0;
  let oCount = 0;
  let arr = str.toLowerCase().split("");

  arr.forEach((e, i, arr) => {
    if (e === "x") {
      xCount += 1;
    } else if (e === "o") {
      oCount += 1;
    }
  });

  if (xCount === oCount) {
    return true;
  } else {
    return false;
  }
}

// Simple, given a string of words, return the length of the shortest word(s).
function findShort(s) {
  let arr = s.split(" ");
  let shortLength;

  arr.forEach((e, i, arr) => {
    if (i === 0) {
      shortLength = e.length;
    } else {
      if (shortLength > e.length) {
        shortLength = e.length;
      }
    }
  });

  return shortLength;
}

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
  if (num > 0) {
    return num - num * 2;
  } else {
    return num;
  }
} //notes: apparently you can make a variable negative just but putting a - in front of it, x: -num

// Given an array of integers your solution should find the smallest integer.

// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];
    args.forEach((e) => {
      if (e < smallest) {
        smallest = e;
      }
    });
    return smallest;
  }
} //ideal solution: return Math.min(...args)
//note: don't forget built in Math options!

// Your task is to make two functions, max and min (maximum and minimum in PHP) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.
//basically the same thing but i used min and max this time
var min = function(list) {
  return Math.min(...list);
};

var max = function(list) {
  return Math.max(...list);
};

// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x) {
  return x.split(" ").join("");
} //notes: regex alternative x.replace(/\s/g, '')

// Return the number (count) of vowels in the given string. We will consider a, e, i, o, and u as vowels for this Kata.
function getCount(str) {
  var vowelsCount = 0;

  str.split("").forEach((e, i, arr) => {
    if (e === "a" || e === "e" || e === "i" || e === "o" || e === "u") {
      vowelsCount++;
    }
  });

  return vowelsCount;
}

// Complete the solution so that it reverses the string value passed into it.
function solution(str) {
  newArr = [];
  str.split("").forEach((e, i, arr) => {
    newArr.unshift(e);
  });

  return newArr.join(""); //notes: fuck, there's a .reverse for arrays /facepalm
}

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
String.prototype.toJadenCase = function() {
  let result = [];
  let arr = this.split(" ");

  arr.forEach((e) => {
    result.push(e.charAt(0).toUpperCase() + e.substring(1));
  });

  return result.join(" ");
};

// Write a function that returns both the minimum and maximum number of the given list/array.
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)]; //this took like 30 seconds lol
}

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  console.log(numbers);
  return numbers[0] + numbers[1];
}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((e) => {
    return Number.isInteger(e);
  });
}

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
var gimme = function(inputArray) {
  let result;
  inputArray.forEach((e, i, arr) => {
    if (e !== Math.max(...inputArray) && e !== Math.min(...inputArray)) {
      result = i;
    }
  });
  return result;
}; //notes: forgot the spread operator at first

////////////////////////////////////////////////////////////////////////////
////////////////////////// 6 KYU //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *
//EXAMPLE: 6 floors, note the spaces around the stars
// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********'
// ]

function towerBuilder(nFloors) {
  let arr = [];
  let totalChars = 1 + (nFloors - 1) * 2;
  console.log(totalChars);
  for (let i = 1; i <= nFloors; i++) {
    let starsNum = i * 2 - 1;
    let sideSpaces = (totalChars - starsNum) / 2;
    let row =
      " ".repeat(sideSpaces) + "*".repeat(starsNum) + " ".repeat(sideSpaces);

    arr.push(row);
  }
  console.log(arr);
  return arr;
}

// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0;
  arr.forEach((e) => {
    if (
      e.length < 3 &&
      (e.charAt(0) === ":" || e.charAt(0) === ";") &&
      (e.charAt(e.length - 1) === ")" || e.charAt(e.length - 1) === "D")
    ) {
      count++;
    } else if (
      e.length === 3 &&
      (e.charAt(0) === ":" || e.charAt(0) === ";") &&
      (e.charAt(e.length - 1) === ")" || e.charAt(e.length - 1) === "D") &&
      (e.charAt(1) === "-" || e.charAt(1) === "~")
    ) {
      count++;
    }
  });

  return count;
} //notes: arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
//regex is magic and I need to learn it

// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

function tickets(peopleInLine) {
  let numberOfPeople = peopleInLine.length;
  let count25 = 0;
  let count50 = 0;
  let count100 = 0;

  peopleInLine.forEach((e, i, arr) => {
    if (e === 25) {
      count25 += 1;
    }
    if (e === 50) {
      count50 += 1;
    }
    if (e === 100) {
      count100 += 1;
    }
  });

  console.log(numberOfPeople, count25, count50, count100);
  //for every 100, you need 1 25 and 1 50
  //for every 50, you need 1 25

  for (let i = count50; i > 0; i--) {
    count25 -= 1;
  }

  for (let i = count100; i > 0; i--) {
    if (count50 > 0) {
      console.log("subtracting a fifty");
      count50 -= 1;
      count25 -= 1;
    } else {
      console.log("subtracting a triple 25");

      count25 -= 3;
    }
  }

  console.log(numberOfPeople, count25, count50, count100);

  if (count25 < 0 || count50 < 0 || count100 < 0) {
    return "NO";
  } else {
    return "YES";
  }
} //NOTES: this works but doesn't consider the order of the line because I didn't read that part.
