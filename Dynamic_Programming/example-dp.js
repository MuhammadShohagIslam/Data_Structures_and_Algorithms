/*
 *** Example of Dynamic Programming ***
 */
// without use of dynamic programming
// time complexity is the bad: O(2*N), it's worst
function fib(n) {
    if (n <= 2) return 1; //base case
    return fib(n - 1) + fib(n - 2); //subproblem
}
// How can i improve above probelm, using dynamic programming

/*
    *** Enter Memoization! ***
        => storing the data in an array or object or some structure
        => Stroing the results of expensive function calls and returning the cached result 
        when the same inputs occur again.
*/
function fibWithDynamicWay(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1; // base case
    let res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    return res;
}
console.log(fibWithDynamicWay(5));

// without use of base case
function fibWithDynamicWay1(n, memo = [undefined, 1, 1]) {
    if (memo[n] !== undefined) return memo[n];
    let res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    return res;
}
console.log(fibWithDynamicWay1(10));

/*
    *** Tabulation ***
    => Usually done using iteration
    => Stroring the result of a previous result in a "table" (using an array)
    => Better space complexity can be achieved using tabulation.
*/
function fib_table(num) {
    if (num <= 2) return 1;
    let result = [0, 1, 1];
    for (let i = 3; i <= num; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[num];
}
console.log(fib_table(6));
/*
    *** Time Complexity ***
        => O(N) --- roughly grows linearly with N
*/
