/*
    *** Linear Search Algorithms ***
        => Linear Search is a sequencial searching data algorithms through which we can search data sequencially

    *** How do you searcch? ***
        => Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want.

    *** Big O Notation of Linear Search ***
        --- Best Case ---
            => When we can find our desire searching value in the first position
            => the search ends with a single successful comparison
        --- Worst Case ---
            => When we may find our desire searching value in the last  position or sometimes it is not there
            => Search success n compariosn or failed n comparison.
        --- Average Case ---
            => When we may be found our searching value in the middle of the array, two or thirds of the way or the quater of the way

*/
/*
     *** JavaScript Has Searching Data Methods ***
        => There are many different search methods on arrays in JavaScript:
                * indexOf
                * includes
                * find
                * findIndex
*/
const array = ["a", "b", "c", "d", "e"];
array.indexOf("a") // return 0 beacuse "a" is available in the array
array.indexOf("g") // return -1 beacuse "a" is not available in the array

// -----------------------------------------------------------
array.includes("a") // return true beacuse "a" is available in the array
array.includes("g") // return false beacuse "a" is not available in the array

//-------------------------------------------------------------
const searchingValue = "a";
array.find(elem => elem === searchingValue) // return a beacuse "a" is available in the array
array.find(elem => elem === "g") // return undefined beacuse "a" is not available in the array

//-------------------------------------------------------------
const searchingValue1 = "a";
array.findIndex(elem => elem === searchingValue1) // return 0 beacuse "a" is available in the array
array.findIndex(elem => elem === "g") // return -1 beacuse "a" is not available in the array

/*
    *** Lnear Search Pseudocode ***
        1. This function accepts an array and a value
        2/3 Loop through the array and check if the current array element is equal to the value.
        4. if it is, return the index at which the element is found
        5. If the value is never found, return -1

*/
// 1. linearSearch function accepts array(arr) and a value(searchingValue)
function linearSearch(arr, searchingValue){
    // 2. looping through into every each element 
    for(let i=0; i<arr.length; i++){
        //3. cheaching the current array element is equal to the value.
        if(arr[i] === searchingValue){
            return i //4. return the index at which the element is found
        }
        // 5. if you do not find value from array, which have to be  return -1
        return -1
    }
}



