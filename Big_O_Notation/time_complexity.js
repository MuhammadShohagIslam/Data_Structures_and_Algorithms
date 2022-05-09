/*
        *** Time Complexity ***
            => How can we analyze runtime of an algoritms as the size of the input increses.
            
            *** What does better mean ***
                    * Faster ? (Let's focus here first)
                    * Less memory-intensive?
                    * More readale?
            
            * The Problem with Time *
                => Different machines will record different times
                =>  The same machine will record different times!
                => For fast algorithms, speed measuremrnts may not be precise enough?
            
 */

 /*
     * If not time, then what ?
            => Rather than counting seconds, let's count the number of simple (operations) the computer has to perform!

            function addUpTo(n) { 
                return (n * (n + 1)) / 2;
                
            }
            n * = 1 multiplication
            n + 1 = 1 addition
            / 2 = 1 division
            3 simple operation, regardless of the size of n
            finally result: O(1)

            function addUpTo(n) {
                let total = 0; // 1 assignment
                i = 1 ; 1 assignment
                i<n = n comparisons
                for (let i = 0; i <= n; i++) {  i++ = n additions and n assignments
                    total += i; // n additions and n assignments
                }
                return total;
            }

            total: (5n + 2);
            finally --> O(n)
            
*/
/*
            *** Counting is hard ***
            =>  but regardless of the exact number, the number of operations grow roughly porportionally with n.
            => Depending on what we count, the number of operations can be less low as 2n or as high as 5n +2
            => If n double, the number of operaions will also roughly double.
*/

/*
    *** Constant Don't Matter ***
            O(2n) === O(n)
            O(500) === O(1)
            O(13n * n) === O(n * n)
    
    *** Smaller Terms Don't Matter ***
            O(n + 10) === O(n)
            O(100n + 50) === O(n)
            O(n*n + 5n+8) === O(n*n);

        O(1) => O(logn) => O(n) => O(NlogN) => O(n * n)

*/

/*
            *** Big O Shorthands ***
            => Arithmetic operations are constant
            => Variable assignment is constant
            => Accessing elements in an array (by index) or object(by key) is constant.
            => In a loop, the complexity is the length of the loop, times the complexity of whatever happens inside of the loop.
*/
/*
    An Example: Suppose we want to write a function that calculate the sum of all numbers from 1 up to 
    (and including ) some number n
*/
// first way calculate time performance
console.time("Time For Using Loop")
function addUpTo(n) { // O(1)
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(addUpTo(5));
console.timeEnd("Time For Using Loop") // 10.268ms something


// second way
console.time("Time For without Loop")
function addUpTo(n) { // O(1)
    return (n * (n + 1)) / 2;
}
console.log(addUpTo(5));
console.timeEnd("Time For without Loop") // 0.466 something

/*
            ***     n * (n + 1)) / 2 calculation  ***

            addUpTo(n) = 1 + 2 +3 + ... + (n-1) + n
        + addUpTo(n) = n + (n-1) + (n - 2) + ... + 2 + 1
        ---------------------------------------------------------------------------------------
        2 addUpTo(n) = (n + 1) + (n + 1) + (n + 1) + .... + (n + 1) + (n + 1)
                                ----------------------------------------------------------------------
                                                                  n copies

        addUpTo(n) = n * (n + 1) / 2

*/

function logAtLeast5(n){ // O(n) beacuse It's depend on N
    for(let i = 1; i <= Math.max(5, n); i++){
        console.log(i)
    }
}
logAtLeast5(10);

function logAtMost5(n){ // O(1) beacuse It's not depend on N
    for(let i = 1; i <= Math.min(5, n); i++){
        console.log(i)
    }
}
logAtMost5(10);



