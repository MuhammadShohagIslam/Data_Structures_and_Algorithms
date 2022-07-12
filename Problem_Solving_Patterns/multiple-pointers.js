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
    integers. The function should find the first pair where the sum is 0. Return an array that includes both values the sum to zero or undefined if a pair does not exist.
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
    sorted array, and counts the unique values in the array.There can be negative numbers in the array, but it will always be sorted.
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
console.log(counterUniqueValues([-1, 0, 5, 1, 1, 1, 2, 6, 5, 7]));
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
console.log(counterUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]));
