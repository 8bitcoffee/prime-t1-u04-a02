console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

/**
 * Uses the question number to set the div where the result populates
 * Then shows the value of htmlBody on the DOM in that div
 * 
 * @param {String} question // String of question number
 * @param {String} htmlBody // What the question div will show on the DOM
 * @return {undefined} // No return value made.
 */

function returnDivInner(question = '1', htmlBody = ''){
  let idString = "#question-"+ question; 
  let divId = document.querySelector(idString);
  divId.innerHTML = htmlBody
}


// 1. Function to return 'Hello World!'

console.log("\n---Question #1---");
let questionNum = '1';

function hello() {

  return 'Hello World!';
}

// Call the function to test

console.log('Test - should return "Hello World!\n"', hello());
returnDivInner(questionNum,`Test - should return 'Hello World!' : ${hello()}`);

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

console.log("\n---Question #2---");
questionNum = '2';

function helloName(name) {
  return `Hello, ${name}!`;
}

// Remember to call the function to test

console.log("Test - should return 'Hello Chris!'\n", helloName("Chris"));
returnDivInner(questionNum,`Test - should return 'Hello Chris!': ${helloName('Chris')}`);

// 3. Function to add two numbers together & return the result

console.log("\n---Question #3---");
questionNum = '3';

function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log("Test - should return '7': ", addNumbers(2,5));
returnDivInner(questionNum,`Test - should return '7': ${addNumbers(2,5)}`);

// 4. Function to multiply three numbers & return the result

console.log("\n---Question #4---");
questionNum = '4';

function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}

console.log("Test - should return '70': ", multiplyThree(2,5,7));
returnDivInner(questionNum,`Test - should return '70': ${multiplyThree(2,5,7)}`);

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise

console.log("\n---Question #5---");
questionNum = '5';

function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else {
    return false;
  }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

console.log('isPositive - should return true', isPositive(3));
console.log('isPositive - should return false', isPositive(0));
console.log('isPositive - should return false', isPositive(-3));

returnDivInner(questionNum,`
  isPostitive - should return 'true': ${isPositive(3)} <br>
  isPostitive - should return 'false': ${isPositive(0)} <br>
  isPostitive - should return 'false': ${isPositive(-3)}`)

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

console.log("\n---Question #6---");
questionNum = '6';

function getLast(array) {
  return array.length > 0 ? array[array.length-1] : 'undefined'; 
}

console.log("Test - should return '8': ", getLast([4,5,6,7,8]));
returnDivInner(questionNum,`Test - should return '8': ${getLast([4,5,6,7,8])}`);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

console.log("\n---Question #7---");
questionNum = '7';

function find(value, array) {
  let inArray = false;
  for (let item of array){
    if (value == item){
      return true;
    }
  }
  return inArray;
}

console.log("Test - should return 'true': ", find('found me', [3,4,5,'found me',6]));
returnDivInner(questionNum,`Test - should return 'true': 
  ${find('found me', [3,4,5,'found me',6])}`);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

console.log("\n---Question #8---");
questionNum = '8';

function isFirstLetter(letter, string) {
  return string[0] == letter ? true : false;
}
console.log("isFirstLetter - should return 'true'", isFirstLetter('a', 'apple'));
console.log("isFirstLetter - should return 'false'", isFirstLetter('z', 'apple'));
returnDivInner(questionNum,`
  isFirstLetter - should return 'true': ${isFirstLetter('a', 'apple')}<br>
  isFirstLetter - should return 'false': ${isFirstLetter('z', 'apple')}`)

// 9. Function to return the sum of all numbers in an array

console.log("\n---Question #9---");
questionNum = '9';

function sumAll(numArray) {
  let sum = 0;
  // TODO: loop to add items
  for (let num of numArray){
    sum += num;
  }
  // TODO: return the sum
  return sum;
}
console.log("Test - should return '15': ",sumAll([1,2,3,4,5]));
returnDivInner(questionNum, `Test - should return '15': ${sumAll([1,2,3,4,5])}`);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

console.log("\n---Question #10---");
questionNum = '10';

function allPositive(inputArray) {
  let posArray = [];
  for(let num of inputArray){
    if (num > 0){
      posArray.push(num);
    }
  }
  return posArray;
}
console.log("Test - should return '7,4' : ", allPositive([-2,-7,7,-9,4]));
returnDivInner(questionNum,`Test - should return '7,4' : ${allPositive([-2,-7,7,-9,4])}`);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

console.log("\n---Question #11---");

questionNum = '11';

console.log("Used problem from: https://edabit.com/challenge/4gzDuDkompAqujpRi");

/* Add up the Numbers from a Single Number
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
Notes
Expect any positive number between 1 and 1000. */

function addUp(numToAdd){
  let retTotal = 0
  for (let i = 1; i <= numToAdd; i += 1){
    retTotal += i;
  }
  return retTotal;
}

console.log("Test - should return '10': ", addUp(4));
console.log("Test - should return '91': ", addUp(13));
console.log("Test - should return '180300': ", addUp(600));

// -------

returnDivInner(questionNum,`
Used problem from: <a id='ref' href='https://edabit.com/challenge/4gzDuDkompAqujpRi'>
  https://edabit.com/challenge/4gzDuDkompAqujpRi<a><br></br>

Add up the Numbers from a Single Number<br>
Create a function that takes a number as an argument.<br>
Add up all the numbers from 1 to the number you passed to the function.<br></br>

For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.<br></br>

Examples:<br>
addUp(4) ➞ 10<br></br>

addUp(13) ➞ 91<br></br>

addUp(600) ➞ 180300<br>
Notes:<br>
Expect any positive number between 1 and 1000.<br></br>

<hr><br>
function addUp(numToAdd){<br>
<div class ="line2">retTotal = 0</div><br>
<div class = "line2">for (let i = 1; i <= numToAdd; i += 1)</div><br>
<div class = "line3">retTotal += i;</div><br>
<div class = "line2">}</div><br>
<div class = "line2">return retTotal;</div><br>
}<br></br>

Test - should return '10': ${addUp(4)}<br>
Test - should return '91': ${addUp(13)}<br>
Test - should return '180300': ${addUp(600)}<br></br>
`);


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
