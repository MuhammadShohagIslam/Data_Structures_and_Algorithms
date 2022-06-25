/*
    *** Insertion Sorting Algorithms ***
        => Builds up the sort by gradually creating a larger left half which is always sorted.

    *** Rule Of Thung ***
        => if we see in your array list 100 element number or less than 100 element number, we figure out, this element is not randomly arranged,
        in that time, we can not use advanced sorting algorithms, we can use 'Insertion Sorting Algorithms'

        => When the numbers are already sorted or mostly sorted, in this case, insertion sort is the best effective for sorting.
            Note That: Insetion sort is not effective, when the numbers are arranged in reverse.

        Syntax: 
        0            1      2      3 
        43         31   26    29 
    Sorted       Unsorted     
                temp = 31
        
         0       1         2      3     
        31     43       26    29   
        Sorted         Unsorted     
                 temp = 26

         0    1    2         3    
        26   31  43       29  
        Sorted              Unsorted     
                                temp = 29

         0    1    2    3    
        26   29  31  43
            Sorted    
        
        => Temp vlaue have to be greater than sort
                        
*/
/*
    *** Insertion Sort Pseudocode ***
        1. Start by picking the second element in the array.
        2. Now compare the second element with the one before it and swap if necessary.
        3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion.(the left side) to place the element in the correct place
        4. Repeat until the array is sorted.
*/
const array = [55, 23, 45, 12, 5, 3, 4];

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        // start picking the second element in the array
        const currentValue = array[i];
        // compare the second element with the one before
        for (let j = i - 1; j >= 0 && array[j] > currentValue; j--) {
            // swaping if the condition true
            array[j + 1] = array[j];
            array[j] = currentValue;
        }
    }
    return array;
}
insertionSort(array); // lowest to highest [3, 4 ,5, 12, 23, 45, 55]

// highest to lowest
function insertionSortHighToLow(array) {
    for (let i = 1; i < array.length; i++) {
        // start picking the second element in the array
        const currentValue = array[i];
        // compare the second element with the one before
        for (let j = i - 1; j >= 0 && array[j] < currentValue; j--) {
            // swaping if the condition true
            array[j+1] = array[j];
            array[j] = currentValue;
        }
    }
    return array;
}
insertionSortHighToLow(array);  // [55, 45,23, 12, 5, 3, 4]

/*
 *** Second Way ***
 */
function insertionSort1(array) {
    for (let i = 1; i < array.length; i++) {
        // start picking the second element in the array
        const currentValue = array[i];
        // before current values's index
        let j = i - 1;
        // compare the second element with the one before
        while (j >= 0 && array[j] > currentValue) {
            // swaping
            array[j + 1] = array[j];
            console.log(array, "While")
            j--
        }
        console.log(array, "before")
        array[j+1] = currentValue;
        console.log(array, "after")

    }
    return array;
}
insertionSort1(array);

// highest to lowest
function insertionSortHighToLow1(array) {
    for (let i = 1; i < array.length; i++) {
       // start picking the second element in the array
        const currentValue = array[i];
        // before current values's index
        let j = i - 1;
        // compare the second element with the one before
        while (j >= 0 && array[j] < currentValue) {
            // swaping
            array[j + 1] = array[j];
            console.log(array, "While")
            j--
        }
        console.log(array, "before")
        array[j+1] = currentValue;
        console.log(array, "after")
    }
    return array;
}
insertionSortHighToLow1(array); 
/*
    *** Time Complexity ***
        => best case: O(n)
            1, 2, 3, 4, 5, 6 -> (O(n))
        => Worst Case: O(n * n)

          0,  1    2   3  => j 
          4   3   2   1
         
            j = 0 -> number of comparison 1
            j = 1 -> number of comparison 2 
            j = 2 -> number of comparison 3
            j = n - 1 -> number of comparison n

            1 + 2  +3 + -----  + n 
            => n (n +1) / 2
            => n * n + n / 2
            => O(n * n)




*/

