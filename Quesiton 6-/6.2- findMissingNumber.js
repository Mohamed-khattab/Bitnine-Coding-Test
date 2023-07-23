function findMissingNumber(arr) {
  const n = 45; // Total number of elements in the original sequence (1 to 45)
  const sumOfAllNumbers = (n * (n + 1)) / 2; // Sum of all numbers from 1 to 45

  // Calculate the sum of elements in the given array
  const sumOfArrayElements = arr.reduce((acc, num) => acc + num, 0);

  // Calculate the missing number
  const missingNumber = sumOfAllNumbers - sumOfArrayElements;

  return missingNumber;
}

// Example usage:
const numbersArray = [1, 2, 3, /*...*/, 44, 45]; // An array with 45 numbers and one missing number
const missingInteger = findMissingNumber(numbersArray);
console.log("Missing Integer:", missingInteger);
