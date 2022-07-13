/*
    *** Frequency Counter ***
        => This pattern uses object or sets to collect values / frequency of values.
        => This can always avoid the need for nested loops or O(N*2) operation with arrays / strings.
        => It's the meaning is the another thing is that comparing.
    Note That: multiple loop is the bast better than nested loop in the one function
*/
// ***  An Example ** //
/*
    Write a function called same, which accepts two array, 
    The function should return true, if every value in the array has it's corresponsding value squared in the second array. The frequency of values must be the same.
*/
// it's time complexity O(N**2)
function same(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++) {
        // O(N)
        let currentIndex = array2.indexOf(array1[i] ** 2); // O(N *2 )
        console.log(currentIndex);
        console.log(array2);
        if (currentIndex === -1) {
            return false;
        }
        array2.splice(currentIndex, 1);
    }

    return true;
}
// console.log(same([1, 2, 3, 5], [4, 1, 25, 9]));

// reduce time complexity O(N**2) to O(N)
// my own implement
function sameOptimize1(array1, array2) {
    if (array1.length !== array2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let i = 0; i < array1.length; i++) {
        // O(N)
        if (!frequencyCounter1[array1[i]]) {
            frequencyCounter1[array1[i]] = 1;
        } else {
            frequencyCounter1[array1[i]] = frequencyCounter1[array1[i]] + 1;
        }
    }

    for (let i = 0; i < array2.length; i++) {
        // O(N)
        if (!frequencyCounter2[array2[i]]) {
            frequencyCounter2[array2[i]] = 1;
        } else {
            frequencyCounter2[array2[i]] = frequencyCounter2[array2[i]] + 1;
        }
    }
    for (let keys in frequencyCounter1) {
        // O(N)
        if (!(keys ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[keys] !== frequencyCounter2[keys ** 2]) {
            return false;
        }
    }
    return true;
}
// teacher implement
function sameOptimize(array1, array2) {
    if (array1.length !== array2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let value of array1) {
        // O(N)
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
    }

    for (let value of array2) {
        // O(N)
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
    }

    for (let keys in frequencyCounter1) {
        // O(N)
        if (!(keys ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[keys] !== frequencyCounter2[keys ** 2]) {
            return false;
        }
    }
    return true;
}
// console.log(sameOptimize([1, 1, 1, 2, 3, 5], [4, 1, 1, 1, 25, 9]));

// *** Example Anagram ***
/*
    Give two strings, write a function to determine if the second string is an anagram 
    of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another
*/
// my own implementation
function validAnagram(array1, array2) {
    if (array1.length !== array2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let value of array1) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
    }
    for (let value of array2) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
    }
    for (let keys in frequencyCounter1) {
        // if there is not match key in the object, return false
        if (!(keys in frequencyCounter2)) {
            return false;
        }
        // if there is not total key values in the object, return false
        if (frequencyCounter1[keys] !== frequencyCounter2[keys]) {
            return false;
        }
    }
    return true;
}
// console.log(validAnagram("anagram", "nagarama"));

// teacher implementation
function validAnagram(array1, array2) {
    if (array1.length !== array2.length) return false;
    let lookup = {};

    for (let i = 0; i < array1.length; i++) {
        let letter = array1[i];
        // if the letter exist increment, otherwise set to 1
        lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }
    for (let j = 0; j < array2.length; j++) {
        let letter = array2[j];
        // can not find letter or letter is zero than it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}
// console.log(validAnagram("anagram", "naaagrm"));

/*

    Write a function called samFrequency. Given two positive integers, find out if the two nmbers have the same frequency of digits.

*/
// function samFrequency(int1, int2) {
//     return int1 < int2 ? true : false;
// }
function sameFrequency(num1, num2) {
    let strNumber = num1.toString();
    let strNumber1 = num2.toString();
    if (strNumber.length !== strNumber1.length) return null;
    let lookup = {};
    for (let value of strNumber) {
        lookup[value] ? (lookup[value] += 1) : (lookup[value] = 1);
    }
    for (let value of strNumber1) {
        if (!lookup[value]) {
            return false;
        } else {
            lookup[value]--;
        }
    }
    return true;
}
// console.log(sameFrequency(1821, 2811));
/*

    Write a function called areThereDuplicates. Which accepts a variable number of arguments, and check whether there are any duplicates among the arguments passed in.You can solev the problem with frequency pattern or the multiple pointers pattern.

*/
// problem solve using with frequency counter technique
function areThereDuplicates(...arg) {
    if (arg.length === 0) return null;
    let frequencyCounter = {};
    for (let value of arg) {
        frequencyCounter[value]
            ? (frequencyCounter[value] += 1)
            : (frequencyCounter[value] = 1);
    }
    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > 1) {
            return true;
        }
    }
    return false;
}
// console.log(areThereDuplicates(1, 2, 3, 4));

// problem solve using with multiple pointer technique
function areThereDuplicates1(...arg) {
    // sort the arg array
    arg.sort((a, b) => a - b);
    // two pointer
    let start = 0;
    let next = 1;
    while (next < arg.length) {
        if (arg[start] === arg[next]) return true;
        start++;
        next++;
    }
    return false;
}
console.log(areThereDuplicates1(1, 2, 3, 4, 1));

// problem solve using with one linear solution technique
function areThereDuplicates2(...arg) {
    return new Set(arg).size !== arg.length;
}
console.log(areThereDuplicates2(1, 2, 3, 4, 1));
