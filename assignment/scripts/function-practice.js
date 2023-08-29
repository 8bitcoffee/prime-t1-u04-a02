console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log("\n---Question #1---");
console.log('Test - should say "Hello World!\n"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log("\n---Question #2---");
console.log("Test - should say 'Hello Chris!'\n", helloName("Chris"));

// 3. Function to add two numbers together & return the result
console.log("\n---Question #3---");
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log("Test - should return '7': ", addNumbers(2,5));

// 4. Function to multiply three numbers & return the result
console.log("\n---Question #4---");
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log("Test - should return '70': ", multiplyThree(2,5,7));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
console.log("\n---Question #5---");
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
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

console.log("\n---Question #6---");
function getLast(array) {
  return array.length > 0 ? array[array.length-1] : 'undefined'; 
}
console.log("Test - should return '8': ", getLast([4,5,6,7,8]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
console.log("\n---Question #7---");
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
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
console.log("\n---Question #8---");
function isFirstLetter(letter, string) {
  return string[0] == letter ? true : false;
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));


// 9. Function to return the sum of all numbers in an array

console.log("\n---Question #9---");
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

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log("\n---Question #10---");
function allPositive(inputArray) {
  let posArray = [];
  for(let num of inputArray){
    if (num > 0){
      posArray.push(num);
    }
  }
  return posArray;
}
console.log("Test - should return '[7,4]: ", allPositive([-2,-7,7,-9,4]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

console.log("\n---Question #11---");
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
