/*
    *** Design Pattern to solve recursion way problem ***
        => Helper method.
*/

function oddFunction(arr) {
    let newArray = [];
    function helperFuntion(array) {
        // design pattern
        if (array.length === 0) {
            // base case
            return;
        }
        if (array[0] % 2 !== 0) {
            newArray.push(array[0]);
        }
        helperFuntion(array.slice(1)); // recursive case
    }
    helperFuntion(arr);
    return newArray;
}
oddFunction([1, 2, 3, 4, 5, 6]);
