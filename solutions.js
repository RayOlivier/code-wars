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
