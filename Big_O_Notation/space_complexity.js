/*
    *** Space Complexity ***
        => (How much additional memory) do we need to allocate in order (to run the code in our algorithm)?

    *** What about the inputs ? ***
        => Sometimes we will hear the term auxiliary space complexity to refer to (space required by the algorithm), not including (space taken up by the inputs.)

    *** When we talk about space complexity, technically we will (talk about auxiliary space complexity).

*/

/*
    *** Space Complexity in JS ***
        => Most primitves (boolean, numbers, undefined, null) are constant space.
        => String require O(n) space (Where n is the string length)
        => Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
*/

const array = [ 1, 3, 4, 5, 6]

function sum(arr) {
    let total = 0; // one number
    for (let i = 0; i <= arr.length; i++) { // another number(let i = 0)
        total += arr[i];
    }
    return total;
    // space complexity O(1)
}
console.log(sum(array));

function double(arr) {
    let newArray = []; // array which O(n) beacuse it's new array
    for (let i = 0; i <= arr.length; i++) {
        newArray.push( arr[i] * 2)
    }
    return newArray; // n numbers
    // space complexity  O(n)
}
console.log(double(array));

