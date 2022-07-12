/*
    *** Divide And Conquer ***
        => Divide and conquer is the another common problem solving pattern 
        which involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
        => This pattern can tremendously decrease time complexity
*/
/*
    Given a sorted array of intergers, write a function called search, that
    accepts a value and returns the index where the value passed to the function 
    is located.If the value is not found, return -1
*/
// linear search which time complexity is O(N)
function search(array, searchValue) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchValue) {
            return i;
        }
    }
    return -1;
}
console.log(search([1, 2, 3, 4, 5], 5));

// *** Binary Search which time complexity is log(N) *** //
function binarySeatch(array, searchValue) {
    let left = 0;
    let right = array.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (array[middle] === searchValue) {
            return middle;
        } else if (searchValue > array[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}
console.log(binarySeatch([1, 2, 3, 4, 5], 4));
