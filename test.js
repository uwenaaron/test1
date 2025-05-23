/*
@param {string}
@returns {object}
*/
function countWordFrequency(inputstring){
    if (!inputstring || typeof inputstring != string){
        return {}
    }

    const lowercasewords = inputstring.toLowerCase()
    const words = lowercasewords
    .replace(/[,.!?]/g,  ' ')
    .split(' ')
    .filer(word=>word.length > 0)
    const frequencyMap = {}
    for (const word of words){
        if (frequencyMap[word]){
            frequencyMap[word] ++
        }
        else{
            frequencyMap[word] = 1
        }
    }
    return frequencyMap
}

const testString = "Hello world, hello from the computer of THE WOrld."
console.log(countWordFrequency(testString))

