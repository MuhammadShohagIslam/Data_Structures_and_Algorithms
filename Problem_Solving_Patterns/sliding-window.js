/*
    *** Sliding Window ***
        => This pattern involves creating a window which can either be an 
        array or number from one position to another.
        => Depending on a certain condition, the window either increase 
        or cloese ( and a new window is created )
        => Very useful for keeping track of a subset of data in an array/string
*/
/*
    Write a function called maxSubarraySum which accepts an array of ingegers
    and number a called n. The function should calculate the maximum sum of 
    n consecutive elements in a array

*/
// without Slideing Window Pattern
function maxSubarraySum(array, num) {
    if (array.length < num) return null;
    let maxSum = -Infinity;
    for (let i = 0; i < array.length - num + 1; i++) {
        let tempSum = 0;
        for (let j = 0; j < num; j++) {
            tempSum += array[i + j];
        }
        if (maxSum < tempSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}
// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// without Slideing Window Pattern
function maxSubarraySumWithSlideWindow(array, num) {
    if (array.length < num) return null;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += array[i];
    }
    tempSum = maxSum;
    for (let j = num; j < array.length; j++) {
        console.log(array[j], j);
        tempSum = tempSum - array[j - num] + array[j];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
console.log(maxSubarraySumWithSlideWindow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
