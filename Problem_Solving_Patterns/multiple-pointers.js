/*
    *** Multiple Pointers ***
        => Creating pointers or values that correspond to an index or
         position and move towards the beginning, end or middle based 
         on a certain condition.
        => Very effiecent for solving problems with minimal space complexity as well.
        => Use select multiple
 */
/*
    Write a function called sumZero which accepts a storted array of 
    integers. The function should find the first pair where the sum is 0.
     Return an array that includes both values the sum to zero or 
     undefined if a pair does not exist.
*/
// without multiple pointer pattern which time complexity O(N*2)
function sumZero(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return [array[i], array[j]];
            }
        }
    }
}
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

// *** Using Multiple Pointers which Time Complexity O(N) ***
function sumZero1(array) {
    // create left and right pointer
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === 0) {
            return [array[left], array[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
// console.log(sumZero1([-3, -2, -1, 0, 1, 2, 3, 4]));
/*
            *** Counter Unique Values ***
    Implement a function called counterUniqueValues which accepts a
    sorted array, and counts the unique values in the array.There can be 
    negative numbers in the array, but it will always be sorted.
*/
// my own implementation
function counterUniqueValues(array) {
    let newArray = [];
    for (let j = 0; j < array.length; j++) {
        if (array[j] !== array[j + 1]) {
            newArray.push(array[j]);
        }
    }
    return newArray.length;
}
// console.log(counterUniqueValues([-1, 0, 5, 1, 1, 1, 2, 6, 5, 7]));

// teacher implementation, with multiple pointer
function counterUniqueValues(array) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }
    return i + 1;
}
// console.log(counterUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]));

/*
    Implement a function called averagePair. Given a sorted array of 
    integers and a target average, determine if there is a pair of values 
    in the array where the average of the pair equals the target average.
     There may be more than one pair that matches the average target.
*/
// my implementation
function averagePair(array, target) {
    let start = 0;
    let next = 1;
    while (next < array.length) {
        let average = (array[start] + array[next]) / 2;
        if (average === target) return true;
        start++;
        next++;
    }
    return false;
}
// console.log(averagePair([1, 2, 3], 2.5));
// from teacher
function averagePair(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        let average = (array[start] + array[end]) / 2;
        if (average === target) {
            return true;
        } else if (average > target) {
            end--;
        } else {
            start++;
        }
    }
    return false;
}
console.log(averagePair([1, 2, 3], 2.5));
/*
    Implement a function called isSubsequence which takes in two string and checkes whether the characters in the first string from subsequence
    of the characters in the second string. In other words, the function should check whether the characters in the first string appears somewhere in the second string, without their order changing.
*/
function isSubsequence(string1, string2) {
    let i = 0;
    let j = 0;
    if (!string1) return false;
    while (j < string2.length) {
        if (string2[j] === string1[i]) {
            i++;
        }
        if (i === string1.length) return true;
        j++;
    }
    return false;
}
console.log(isSubsequence("abc", "acb"));
/*
    isSubsequence Solution - Recursive but not O(1) Space

*/
// teacher implementation
function isSubsequence2(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }
console.log(isSubsequence2("abc", "abc"));
