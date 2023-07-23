#include <iostream>
#include <string>
#include <algorithm>

bool isPalindrome(const std::string& word) {
    // Remove any spaces from the word and convert to lowercase
    std::string cleanWord;
    for (char ch : word) {
        if (std::isalpha(ch)) {
            cleanWord += std::tolower(ch);
        }
    }

    // Check if the cleanWord is a palindrome
    std::string reversedWord = cleanWord;
    std::reverse(reversedWord.begin(), reversedWord.end());
    return cleanWord == reversedWord;
}

std::string reverseString(const std::string& word) {
    // Return the word in reverse order
    std::string reversedWord = word;
    std::reverse(reversedWord.begin(), reversedWord.end());
    return reversedWord;
}

int main() {
    std::string userInput;
    std::cout << "Enter a word: ";
    std::cin >> userInput;

    if (isPalindrome(userInput)) {
        std::cout << "The word is a palindrome." << std::endl;
    } else {
        std::cout << "The word is not a palindrome. Reversed word: " << reverseString(userInput) << std::endl;
    }

    return 0;
}
