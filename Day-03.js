//1. Add Two Numbers

//Write a function that takes two numbers and returns their sum.

function addTwoNumbers(a, b) {
  return a + b;
}

console.log(addTwoNumbers(3, 5));


//2. Even or Odd


function evenOrOdd(n) {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(evenOrOdd(4));
console.log(evenOrOdd(7));


//3. Find the Largest Number
//Given three numbers, return the largest one.

function findLargest(a, b, c) {
  return Math.max(a, b, c);
}   


function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello"));
