function isPalindromeOrReverse(input) {
  // Remove any spaces from the input and convert to lowercase
  const cleanInput = input.replace(/\s/g, '').toLowerCase();
  
  // Check if the cleanInput is a palindrome
  const isPalindrome = cleanInput === cleanInput.split('').reverse().join('');
  
  // If it's a palindrome, return the input
  if (isPalindrome) {
    return input;
  } else {
    // If it's not a palindrome, return the reverse of the input
    return input.split('').reverse().join('');
  }
}

// Example usage:
const userInput = prompt('Enter a word:');
const result = isPalindromeOrReverse(userInput);
console.log(result);
