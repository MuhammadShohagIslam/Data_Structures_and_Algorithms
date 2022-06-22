/*
    *** Bubble Sort Algorithms ***
        => Bubble Sort is the sorting algorithms through which we sort list of array items like lowest to highest, values up to top.
*/
/*
    *** bubble Sort Pseudocode ***
        1. Start looping from with a variable called i the end of the array towards the begining
        2. Start an inner loop with a variable called j from the beginning until i -1
        3. if array[j] is greater than array[j+1], swap those two values!
        4. return the sorted array.
*/
// Implementation Bubble Sort in JavaScript
let arr = [1, 4, 7, 45, 7, 43, 44, 25, 6, 4, 6, 9];

function bubbleSort(array) {
    let swap;
    for (let i = array.length; i > 0; i--) {
        swap = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swap = false;
            }
        }
        if (swap) break;
    }
    return array;
}
bubbleSort(arr);

// function bubbleSort(array) {
//     let swap;
//     for (let i = 0; i < array.length; i++) {
//         swap = true;
//         for (let j = 0; j < array.length - 1; j++) {
//             if (arr[j] > array[j + 1]) {
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//                 swap = false;
//             }
//         }
//         if (swap) break;
//     }
//     return array;
// }
// bubbleSort(arr);

// ES6 Version with Bubble Sorting in JavaScript
function bubbleSortES6(array) {
    // make a swap function
    const swap = (array, index1, index2) => {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    };
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}
bubbleSortES6(arr);

/*
    *** Time Complexity of Bubble Sort ***
        => O(n * 2);
        => O(n) is the best case, if the array is sorted already.
*/

function bubbleSortBigONotation(array) {
    let swap;
    for (let i = array.length; i > 0; i--) {
        // Outer loop is O(n)
        swap = true;
        for (let j = 0; j < i - 1; j++) {
            // Inner loop is O(n)
            if (arr[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swap = false;
            }
        }
        if (swap) break;
    }
    return array;
    // Bubble Sorting is Time Complexity -> O(n * 2)
}
bubbleSort(arr);
