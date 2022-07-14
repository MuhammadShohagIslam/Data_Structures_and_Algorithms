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
// console.log(maxSubarraySumWithSlideWindow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

/*
    Write a function called minSubArrayLen which accepts two parameters-
    an array of positive integers and positive integer.

    This function should return the minimal length of a contiguoussubarray 
    of which the sum is greater than or equal to the ingeter passed to the function.
    If there is not one return 0 instead.
*/
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then
        // move the window to right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        } else if (total >= sum) {
            // if current window adds up to at least the sum given then
            // we can shrink the window
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        } else {
            // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

/*
    Write a function called findLongestSubstring, which accepts a string 
    and returns the length of the longest substring with all distinct characters.
*/
function findLongestSubstring(str) {
    let longest = 0;
    let start = 0;
    let seen = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if(seen[char]){
           start = Math.max(start, seen[char]) 
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}
console.log(findLongestSubstring("longestsubstring"));
