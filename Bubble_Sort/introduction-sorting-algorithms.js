/*
    *** Sorting Algorithms ***
        => Sorting is the process of rearranging the items in a collection (e.g an array) so that the items are in some kind of order.

        Example: 1. Sorting numbers from smallest to largest
                        2. Sorting names alphabetically
                        3. Sorting products based on sold
*/
let numbers = [1, 4, 77, 84, 2, 10];
// a is the first element for comparison, b is the second element for comparison
const sorting = numbers.sort((a, b) => {
    return a - b; // sort a before b, through which, we can sort array of number lowest to highest
});

const sorting1 = numbers.sort((a, b) => {
    return b - a; // sort a after b, through which, we can sort array of number hishest to lowest.
});

const sorting2 = numbers.sort((a, b) => {
    return a === b; // no sorting, it's keep original of a and b.
});
console.log(sorting2);

// Sorting array of object
const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
];
items.sort((a, b) => {
    return a.value - b.value;
});

/*
 *** Sorting Array includes NaN or Infinity ***
 */
let array = [
    Infinity,
    -1,
    6,
    1,
    0,
    NaN,
    0,
    -1,
    2,
    5,
    10,
    -Infinity,
    NaN,
    Infinity,
    NaN,
];
// sort -infinity, NaN, infinity to the end in random order
array.sort((a, b) => {
    if (isFinite(a - b)) {
        return a - b;
    } else {
        return isFinite(a) ? -1 : 1;
    }
});
console.log(array);

// sort -Infinity < 0 < Infinity < NaN
array.sort((a, b) => {
    if(isNaN(a)){
        return 1 - isNaN(b)
    }else{
        return a - b;
    }
})
