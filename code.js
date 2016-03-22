var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

// Part 1
var months = "";

for (var i = 0; i < stringList.length; i++) {
  if (i == 0) {
    months = stringList[i];
  } else {
    months += ", " + stringList[i];
  }
}

console.log("Months listed are " + months);

// Part 2
console.log(numList[numList.length - 1]);

// Part 3
var numString = "";

for (var j = 0; j < numList.length; j++) {
  if (j == numList.length - 1) {
    numString += numList[j];
  } else {
    numString += numList[j] + " ";
  }
}

console.log(numString);

// Part 4
var numTotal = 0;

for (var l = 0; l < numList.length; l++) {
  numTotal += numList[l];
}

console.log(numTotal);

// Part 5

if (boolList[1] === true) {
  console.log(numList[0] + numList[numList.length - 1]);
} else {
  console.log(numList[1] * numList[1]);
}

// Part 6
for (var t = 0; t < boolList.length; t++) {
  if (boolList[t] === true) {
    console.log(numList[t]);
  }
}
