/**
 * @param {string} inputString
 * @returns {object} - Returns an object with the reversed sentence
 */

/*
  To rearrange the sentence backwards (reverse the words in the sentence).
*/
function test2(inputString) {
    // Check if inputString is valid and is a string
    if (!inputString || typeof inputString !== 'string') {
        return {};
    }
    
    // Split the string into words, reverse the words, and join them back into a string
    const reversedSentence = inputString.split(' ').reverse().join(' ');

    // Return the reversed sentence inside an object
    return {
        name: 'test2',
        reversedSentence: reversedSentence
    };
}

// Example usage
const result = test2("Hello world from computer");
console.log(result);  