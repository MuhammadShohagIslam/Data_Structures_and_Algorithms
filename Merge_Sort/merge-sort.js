/*
    *** Merge Sort is a one kind of algorithms which works as a divide and conquer strategy.
        => It's combination of two things - merging and sorting
        => Exploits the fact that arrays of 0 or 1 element are always sorted.
        => Works by decomposing an array into smaller arrays of 0 or 1, then building up a newly sorted array.
*/
/*
     *** Merging Arrays ***
        => In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.
        => Given two arrays which are sorted, this helper function should create a new array which is also sorted, 
        => This function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it.
*/
let array = [4, 6, 8, 2, 9];
// create merge function to merging two array
function merge(array1, array2) {
    // create empty array for new merging sort array
    let result = [];
    // initial variable for first array
    let i = 0;
    // initial variable for second array
    let j = 0;
    // comparing each element for checking and pushing to new array with sort way
    while (i < array1.length && j < array2.length) {
        // if first array element array item less than second array element array to push this array elemet to new result otherwise second array element to go result array
        if (array1[i] < array2[j]) {
            result.push(array1[i]);
            i++;
        } else {
            result.push(array2[j]);
            j++;
        }
    }

    // array 1 element are pushing to result until finished the array element
    while (i < array1.length) {
        result.push(array1[i]);
        i++;
    }
    // array 2 element are pushing to result until finished the array element
    while (j < array2.length) {
        result.push(array2[j]);
        j++;
    }
    return result;
}

// create a merge-sort function to find brand new two sort arrat from existin array
function mergeSort(array) {
    // base case for recursive algorithms, if array has 1 or 0 element, do return existing array.
    if (array.length <= 1) return array;
    let mid = Math.floor((0 + array.length) / 2);
    // variable left and right recursive case where array are dividing into half unitl find single array element
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));
    // pass slice array to the merge function
    return merge(left, right);
}
mergeSort(array)
