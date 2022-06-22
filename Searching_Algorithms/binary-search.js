/*
        *** Binary Search ***
            => Binary Search such a algorithm which works through index. binary means two
            => Binary Searcch only works on sorted arrays!
            => It works dividing in half the portion of the list of items, it's continue divide halpf portion until finding desire value.
*/
/*
    *** Binary Search Pseudocode ***
        => This function accepts a sorted array and a value
        => Create a left pointer at the start of the array, a right pointer at the end of the array.
        => While the left pointer comes before the right pointer:
            * Create a pointer in the middle
            * If you find the value you want, return the index.
            * if the value is too small, move the left pointer up.
            * if the value is too large, move the right pointer down.
        => if you never find the value, return -1
*/
//1. function accepts a sorted array and a value
function binarySearch(arr, searchingValue){
    let start = 0; // 2. Create a left pointer at the start of the array
    let end = arr.length - 1; // 3. a right pointer at the end of the array.
    let middle = Math.floor( (start + end) / 2) // 4.1Create a pointer in the middle
    while(arr[middle] !== searchingValue && arr.includes(searchingValue)){ //  while(arr[middle] !== searchingValue && start <= end){
        if(arr[middle] > searchingValue) {
            end = middle -1 ; //4.2  if the value is too small, move the right pointer down.
        }else {
            start = middle + 1 //4.3 if the value is too large, move the left pointer up.
        }
        middle = Math.floor( (start + end) / 2)
    }
    return arr[middle] === searchingValue ? middle : -1 // 5. if you never find the value, return -1
}
binarySearch([1,2,3,4,6,8,9,13,15], 3)
// [1,2,3,4, 6, 8,9,13,15]
//  S          M             E  

    // [1,    2,  3, 4, 6, 8,9,13,15]
    //  S    M   E  

        // [1,    2,  3,      4, 6, 8,9,13,15]
        //           SME  

/*
    *** Big O Notation of Binary Search ***
        => Best Case / Worst Case (O(log N))
        => average Case (O(1))
*/
function binarySearchBigONotation(arr, searchingValue){
    let start = 0;
    let end = arr.length - 1;
    let middle = (start + end) / 2;
    let step = 0;
    console.log("Step", step);

    while(arr[middle] !== searchingValue && start <= end){
        step++
        console.log("Step", step);
        if(arr[middle] > searchingValue){
            end = middle -1;
        }else{
            start = middle + 1
        }
        middle =  (start + end) / 2;
    }
    console.log("total step", step)
    return arr[middle] === searchingValue ? middle : -1
}
binarySearchBigONotation([1,2,3,4,6,8,9,13,15], 3)
// [1,2,3,4, 6, 8,9,13,15]
//  S          M             E   = step 1

    // [1,    2,  3, 4, 6, 8,9,13,15]
    //  S    M   E  = step 2

        // [1,    2,  3,      4, 6, 8,9,13,15]
        //           SME  = step 3

// calculation: log(9) = 3