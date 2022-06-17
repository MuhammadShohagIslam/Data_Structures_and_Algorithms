/*
    *** Pure Recursion ***
        => Pure recursion meaning is function itself.It's totally self contained
        => We do not need external data structure.
        => Do not need helper function to do recursive.

    *** Pure Recursion Tips ***
        => for array, use method like slice, spread operator and concat that make copies so you do not mutate them.
        => string are immutable, we can use slice, substr, substring so we can copies 
        => to make copies of object, we can use Object.assign or spread operator.
*/
function pureRecursion(arr){
    let newArray = []
    if(arr.length === 0){ // base case
        return newArray;
    }
    if(arr[0] % 2 !== 0){
        newArray.push(arr[0])
    }
    newArray = newArray.concat(pureRecursion(arr.slice(1))) // recursive case
    return newArray;
}
pureRecursion([1,2,3,4,5])
// [1].concat([2,3,4])
        // [1].concat([3,4])
                // [1,3].concat([4])
                    // [1,3].concat([])