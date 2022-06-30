/*
    *** Naive String Search Algorithms ***
        => Naive string search algorithms is a one kind of searching algorithms through which we can count the number of times a smaller string appears in a long string.
*/
// create a naive string search function
function naiveSearch(long, short) {
    // looping over the longer string
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        // lopping over the shorter string
        for (let j = 0; j < short.length; j++) {
            // if the characters do not match, break out of the inner loop
            if(short[j] !== long[i+j]){
                break;
            }
            // after the complete inner loop and find a match, increment the count of match
            if(j === short.length - 1){
                count++
            }
        }
    }
    // return count number how many times match exact short word in the long sentence
    return count;
}
naiveSearch("lolerm spearm", "spe")
