/*
    *** Quick Sorting Algorithms ***
        => Quick Sort is the important sorting algorithms, which works divide and conquer. It's pick up a pivot element from array and partitions the given array around the picked pivot.

    * You can pick pivot many waies:
        => Always pick first element as pivot
        => Always pick last element as pivot
        => Pick a random element as pivot
        => Pick median as pivot.
*/
/*
 *** Implementation of Quick Sort ***
 */
// create a custome swap function for swaping two element
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// create pivot function for getting pivot index which takes start(pivot) end (total array length)
function pivot(arr, start = 0, end = arr.length - 1) {
    // desire pivot value to strore pivotValue variable
    let pivotValue = arr[start];
    // index of smaller index and indicates the right position of pivot found so far
    let swapIdx = start;

    // looping every each element after pivot element for comparing to the pivot value
    for (let i = start + 1; i <= end; i++) {
        // checking pivot value is the greater than the array value
        if (pivotValue > arr[i]) {
            // increament index of smalller element
            swapIdx++;
            // swaping with after pivot value to checking value
            swap(arr, swapIdx, i);
        }
    }
    // swaping with pivot value to the end of the swaping value
    swap(arr, start, swapIdx);
    // return end of the swaping index
    return swapIdx;
}

// create a quick sort array
// arr -> array to be sorted
// left -> starting index
// right -> ending index
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // base base
        // pivot value index
        let pivotIdx = pivot(arr, left, right);
        // divide sort element before pivot left and after pivot right
        // left
        quickSort(arr, left, pivotIdx - 1); // recursive case
        // right
        quickSort(arr, pivotIdx + 1, right); // recursive case
    }
    // return sorting array
    return arr;
}
quickSort([4, 6, 2, 5, 3]);

/*
    *** Time Complexity of Quick Sort ***
        => if list of element are partitioned with middle, in this case time complexity of Quick Sort is the O(n log n)

                                                                                                    n
                                                                                        n/2              n/2
                                                                                n/4      n/4        n/4     n/4
                                                                                    ...................
                                                                                =>  n / 2k = 1          
                                                                                => n = 2k
                                                                                => log n = log 2 2k (in computer science log base 2)
                                                                                =>  log n =  k (log 2 2 = 1)
                                                                                => k = log n   
    function quickSort(arr, left = 0, right = arr.length - 1) {
        if (left < right) {
            // base base
            // pivot value index
            let pivotIdx = pivot(arr, left, right); / *** n time partision so, => n logn***
            // divide sort element before pivot left and after pivot right
            // left
            quickSort(arr, left, pivotIdx - 1); // recursive case
            // right
            quickSort(arr, pivotIdx + 1, right); // recursive case
        }
        // return sorting array
        return arr;
    }
    => finally:best case =>  n log n

    =>  if list of element are partitioned with first element, in this case time complexity of Quick Sort, worst case, is the O(n * 2)
    => average case and best case are the same (O(n logn))

    *** Space Complexity ***
        => O(logn)
*/
