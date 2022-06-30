/*
    *** Redix Sort Algorithms ***
        => Redix Sort is a special sorting algorithms, which works on the list of numbers
        => It's never makes comparision between two numbers of element
        => It's exploits fact that the information about the size of number is encoded in the number of digits.
        => if we want to sort number, comaprison sorting algorithms is better than redix sort
*/
// *** helper function to implement redix sorting algorithms ***
// create a function to get digit through the depend on  the place in the position number
function getDigit(number, p) {
    // return the digit in number at the given place value
    return Math.floor(Math.abs(number) / Math.pow(10, p)) % 10;
}

// create a function through which we can get total number of digit in the given number
function getDigitCount(number) {
    // return the number of digits in the number
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

// create a function through which we can get what is the highest digit number from the given array numbers
function getMostDigitNumber(arrayNumbes) {
    let mostDigitCount = 0;
    for (let i = 0; i < arrayNumbes.length; i++) {
        mostDigitCount = Math.max(
            mostDigitCount,
            getDigitCount(arrayNumbes[i])
        );
    }
    // return the number of digits in the largest numbers in the list.
    return mostDigitCount;
}
// ***  redix sort function ***
// create a redix function that accepts list of numbers
function redix(arrayNumbes) {
    // figure out how many digits the largest number has
    let highestDigit = getMostDigitNumber(arrayNumbes);
    // looping from k = 0 up to this largest number of digits.
    for (let k = 0; k <= highestDigit; k++) {
        // create a bucket for each digit position
        let bucket = Array.from({ length: 10 }, () => []);
        // looping on each arrayNumber for placing each number with coresponding bucket beased on its kth digit
        for (let i = 0; i < arrayNumbes.length; i++) {
            bucket[getDigit(arrayNumbes[i], k)].push(arrayNumbes[i]);
        }
        // return final sorting array
        // return bucket.flat();
        return [].concat(...bucket);
    }
}
redix([1, 2, 56, 886, 997]);

/*
    *** Time Complexity of Redix Sort ***
        function redix(arrayNumbes) {
            let highestDigit = getMostDigitNumber(arrayNumbes);
            for (let k = 0; k <= highestDigit; k++) { // *** k time based on number digit(average)
                let bucket = Array.from({ length: 10 }, () => []);
                for (let i = 0; i < arrayNumbes.length; i++) { // *** n time based on numberArray length
                    bucket[getDigit(arrayNumbes[i], k)].push(arrayNumbes[i]);
                }
                return [].concat(...bucket)
            }
        }
        => Time complexity: best case, average case, worst case=>  (O(kn))
        => Space complexity: O(n+k)
*/
