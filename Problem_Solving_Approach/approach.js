/*
    *** Problem Solving Approach ***
 */
/*
    *** Understand the problem *
        * restate question with your own worlds.
        * What are the inputs that go into problem?
        * What the output look like, What should come from the solution to the problem(What should return from my function?
        * Do we have enough information to solve the problem?
        * Can we get the outputs that are expected just that information?
        * What are the things that really matter in this problem?What terminology that we should use?
 */

/*
 *** Apply strategies with real example ***
 */
// ======================================
// write a function which takes two numbers and returns their sum.
// ======================================

// 1. Can i restate the problem in my own words?
"implement addition";
// 2. What are the inputs that go into the problem?
    // intiger?
    // floats
    // what about string for large numbers
// 3. what are the outputs that should come from the solution to the probelm?
    // intigers?
    // floating?
    // string?
// 4. Do we have enough information to solve the problem?
    // yes
// If we have any confision about anythings, we can asked interviewer.
// 5. What are the things that really matter in this problem?What terminology that we should use?

// ================================================
// =================Explore Examples ====================
// ================================================
// Coming up with examples can help we undertand the problem better
// Examples also provide sanity checks that our eventual solution works how it should.
/*
    *** Start with simple examples (write down two or three simple examples with an input and the output.)
    *** Progress to more complex examples
    *** Explore example with empty inputs(that often give we some insight into the how the problem should work)
    *** Explore examples with invalid inputs.(What happen if a user enters something that is invalid?)
 */
// Write a function which takes in astring and returs counts of each charaters in the string.

// 1. Start with simple examples
charCount("aaaa"); // return probably {a: 4, b:0, c:0}
charCount("hello"); // return probably {h: 1, e:1, l:2, o:1}

// 2. Progress to more complex examples
("my phone number is 1111"); // what about number and space
("hello hi"); // what about space uppercase word and lowercase word

// 3. Explore example with empty inputs
charCount("");
charCount(); // somebody take just empty, what it return, it return empty object at the end   or error boolean

// 4. Explore examples with invalid inputs.
charCount(null); // what is going if we put invalid input, it's even return anything

// ================================================
//== Break It Down (take the actual steps of th problem and write them down) ==
// ================================================
charCount("aaa"); // return {a:3, b: 0}
charCount("This is our number 1111");
/*
        {
            t:1,
            i: 2,
            s: 2
            o:1,
            u: 2
            r: 2, 
            m: 1
            1:4
        }
*/

function charCountApproach(str) {
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string: value should be counts for those characters!
}

function charCount(str) {
    // make object to return at end beacuse we have to show object way
    // looping over every string characters
    // if the char is a number/letter AND is a key in object, add one to count
    // if the char is a number/letter AND is not a key in object, to set object and set value 1
    // if the char is something (space, period, etc) do not do anything
    // return object at end
}

// ================================================
// ================= Solve / Simplify =====================
    // Find the core difficulty in what you are tring to do.
    // Temporarily ignore that difficulty
    // Write a simplified solution
    // Then incorporate that difficulty back in
// ================================================

function charCount(str) {
    // make object to return at end beacuse we have to show object way
    let obj = {};
    // looping over every string characters
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            // if the char is a number/letter AND is a key in object, add one to count
            obj[str[i]]++;
        } else {
            // if the char is a number/letter AND is not a key in object, to set object and set value 1
            // if the char is something (space, period, etc) do not do anything
            obj[str[i]] = 1;
        }
    }
    // return object at end
    return obj;
}
console.log(charCount("aaaa")); // {a: 4}

// if the char is something (space, period, etc) we do not add
function charCount1(str) {
    // to lowercase every string character
    let lowercaseStr = str.toLowerCase();
    // if ignored period
    lowercaseStr = str.replace(/\,/g, "");
    // make object to return at end beacuse we have to show object way
    let obj = {};
    // looping over every string characters
    for (let i = 0; i < lowercaseStr.length; i++) {
        // if the char is something (space, period, etc) we do not add
        if (lowercaseStr[i] !== " ") {
            if (obj[lowercaseStr[i]]) {
                // if the char is a number/letter AND is a key in object, add one to count
                obj[lowercaseStr[i]]++;
            } else {
                // if the char is a number/letter AND is not a key in object, to set object and set value 1
                obj[lowercaseStr[i]] = 1;
            }
        }
    }
    // return object at end
    return obj;
}
console.log(charCount1(" Olive, Apple, Banana"));
/*
    {
        A: 1
        B: 1
        O: 1
        a: 3
        e: 2
        i: 1
        l: 2
        n: 2
        p: 2
        v: 1
    }
*/

// ================================================
// ================ Look Back and Refactor =================
// ================================================
/*
    *** Refactoring Question ***
        * Can we check the result?
        * Can we derive the result differently?
        * Can you understand it at a glance?
        * Can you use the result or method for some other problem?
        * Can you improve the performance of your solution?
        * Can you think of other way to refactore?
        * How have other people solved this problem?
*/
console.time("Good")

// if the char is something (space, period, etc) we do not add
function charCount1(str) {
    // to lowercase every string character
    let lowercaseStr = str.toLowerCase();
    // if ignored period
    lowercaseStr = str.replace(/\,/g, "");
    // make object to return at end beacuse we have to show object way
    let obj = {};
    // looping over every string characters
    for (let i = 0; i < lowercaseStr.length; i++) {
        // if the char is something (space, period, etc) we do not add
        if (lowercaseStr[i] !== " ") {
            if (obj[lowercaseStr[i]]) {
                // if the char is a number/letter AND is a key in object, add one to count
                obj[lowercaseStr[i]]++;
            } else {
                // if the char is a number/letter AND is not a key in object, to set object and set value 1
                obj[lowercaseStr[i]] = 1;
            }
        }
    }
    // return object at end
    return obj;
}
console.log(charCount1(" Olive, Apple, Banana"));
console.timeEnd("Good")