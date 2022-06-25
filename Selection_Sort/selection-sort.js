/*
    *** Selection Sort ***
        => Selection Sort is the one kind of Sorting Algorithms, which works like we find the minimum swap at the end and put it at the beginning.
        => Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.
*/
/*
    *** Selection Sort Pseudocode ***
        => Store the first element as the smallest value you have seen so far.
        => Compare this item to the next item in the array until you find a smaller number.
        => If a smaller number is found, designate that smaller number to be the new miniumn and continue until the end of the array.
        => If the minimum is not the value(index) you iniitally began with, swap the two values.
        => Repeat this with the next element until the array is sorted.
*/
const array = [13, 30, 5, 6, 20];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        // 1. store the first element as the smallest value you have seen so far.
        let lowest = i;
        for (let j = i + 1; j < array.length; j++) {
            // 2. compare this item to the next item in the array until you find a smaller number.
            if (array[lowest] > array[j]) {
                // 3. if a smaller number is found, designate that smaller number to be the new miniumn and continue until the end of the array.
                lowest = j;
            }
        }
        // 4. if the minimum is not the value(index) you iniitally began with, swap the two values.
        let temp = array[i];
        array[i] = array[lowest];
        array[lowest] = temp;
    }
    return array;
}
selectionSort(array);

function selectionSortES6(array) {
    const swap = (array, index1, index2) => {
        // let a =  [array[index1], array[index2]] ;
        // let b = [array[index2], array[index1]];
        // console.log(a, b)
        [array[index1], array[index2]] = [array[index2], array[index1]];
    };
    for (let i = 0; i < array.length; i++) {
        // 1. store the first element as the smallest value you have seen so far.
        let lowest = i;
        for (let j = i + 1; j < array.length; j++) {
            // 2. compare this item to the next item in the array until you find a smaller number.
            if (array[lowest] > array[j]) {
                // 3. if a smaller number is found, designate that smaller number to be the new miniumn and continue until the end of the array.
                lowest = j;
            }
        }
        // 4. if the minimum is not the value(index) you iniitally began with, swap the two values.
        if(i !== lowest) swap(array, lowest, i);
    }
    return array;
}
selectionSortES6(array);

/*
    *** Time Complexity of Bubble Sort ***
        => O(n * 2);
        => O(n) is the best case, if the array is sorted already.
*/

function selectionSortBigONotation(array) {
    for (let i = 0; i < array.length; i++) {
        // Outer loop is O(n)
        let lowest = i;
        for (let j = i + 1; j < array.length; j++) {
            // Inner loop is O(n)
            if (array[lowest] > array[j]) {
                lowest = j;
            }
        }
        let temp = array[i];
        array[i] = array[lowest];
        array[lowest] = temp;
    }
    return array;
    // Bubble Sorting is Time Complexity -> O(n * 2)
}
selectionSortBigONotation(arr);
