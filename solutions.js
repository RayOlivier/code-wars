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
}
//notes: apparently you can make a variable negative just but putting a - in front of it, x: -num
