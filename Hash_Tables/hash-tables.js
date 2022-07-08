/*
    *** Hash Tables ***
        => Hash tables are used to store key-value pairs.
        => Hash tables are collection of key-value pairs
        => Hash tables can find values quickly given a key
        => Hash tables can add new key-values quickly
        => Hash tables store data in a large array, and work by hashing the keys.
        => A good hash should be fast, distribute keys uniforly and be deterministic
        => Seperate chanining and linear probing are two strageties used to deal with keys that hash to the same index.
        => They are like arrays, but the keys are not ordered.
        => Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!.
    
    *** Why Should I care? ***
        => Nearly every programming language has some sort of hash table data structure.
        => Beacuse of their speed, hash tables are very commonly used!
        => It would be nice if instead of using indices to access the colors, we could use more human-readable keys.
        => for example: color["cylan"] is way better than colors[2]

    *** The Hash Part ***
        => To implement a has table, we will be using an array
        => In order to look up values by key, we need  a way to convert keys into valid array index.
        => A function that performs this task is called a hash function.

    *** What makes a good Hash? ***
        => Fast(constant time)
        => Does not cluster outputs at specific indices, but distributes uniformly.
        => Deterministic(same input yeilds same output)
*/
// *** implement Hash function ***
class HashTable {
    constructor(size = 17) {
        this.keyMap = new Array(size);
    }
    // creating hash function for getting index
    hash(key) {
        // create a variable to store total character code
        let total = 0;
        // create prime number, beacuse prime number reduce collisions
        let wired_prime = 31;
        // looping through with key
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            // create a variable to store each char with a lowercase
            let char = key[i].toLowerCase();
            // create a variable to store charter code each charcter
            let value = char.charCodeAt() - 96;
            // store index number in the total varaible
            total = (value * wired_prime + total) % this.keyMap.length;
        }
        // return total as a hash index number
        return total;
    }
    // set( adding key value to th array with hash functional way)
    set(key, value) {
        // create a variable to store index of key values using with hash function
        let index = this.hash(key);
        // checking index is already has or not, if it is, set empty Array
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        // store the key value pair in the hash table array via separate chaining
        this.keyMap[index].push([key, value]);
    }
    // get (getting key value pair from the stored array)
    // get(key) {
    //     // hashed the key
    //     let index = this.hash(key);
    //     // first for loop for getting all of the array element
    //     for (let i = 0; i < this.keyMap.length; i++) {
    //         // getting all of the array without empty array
    //         if (this.keyMap[i]) {
    //             // looping through inner array
    //             for (let j = 0; j < this.keyMap[i].length; j++) {
    //                 // retrives the key values pair from the hash table
    //                 if (this.keyMap[i][j][0] === key) {
    //                     return this.keyMap[i][j];
    //                 }
    //             }
    //         }
    //     }
    // }
    // my own get function reduce time complexity
    // get (getting key value pair from the stored array)
    get(key) {
        // hashed the key
        let index = this.hash(key);
        if (!this.keyMap[index]) {
            // if the key is not found return undefined
            return undefined;
        } else {
            if (this.keyMap[index].length > 1) {
                // first for loop for getting all of the array element
                for (let i = 0; i < this.keyMap[index].length; i++) {
                    // retrives the key values pair from the hash table
                    if (this.keyMap[index][i][0] === key) {
                        return this.keyMap[index][i];
                    }
                }
            } else {
                return this.keyMap[index][0];
            }
        }
    }
    // values(getting all values from the hash table array)
    values() {
        // create a variable to store the all values from hash table array
        let valueArray = [];
        // loops through the hash table array and returns an array of values in the table
        for (let i = 0; i < this.keyMap.length; i++) {
            // checking if has array in the hash table array properties
            if (this.keyMap[i]) {
                // looping inner array in the hash table array
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // duplicate checking
                    if (!valueArray.includes(this.keyMap[i][j][1])) {
                        // pushing all values to the valueArray
                        valueArray.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        // return all values which comes from hash table array
        return valueArray;
    }
    // keys(getting all keys from the hash table array)
    keys() {
        let keysArray = [];
        // loops through the hash table array and returns an array of keys in the table
        for (let i = 0; i < this.keyMap.length; i++) {
            // checking if has array in the hash table array properties
            if (this.keyMap[i]) {
                // looping inner array in the hash table array
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    // duplicate checking
                    if (!keysArray.includes(this.keyMap[i][j][0])) {
                        // pushing all keys to the valueArray
                        keysArray.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        // return all keys which comes from hash table array
        return keysArray;
    }
}
let sh = new HashTable();
sh.set("Father", "Abba");
sh.set("Mother", "Amma");
sh.set("Brother", "Baia");
sh.set("Sister", "bone");
sh.set("Sister", "bone");
console.log(sh.keys());

/*
    *** Time complexity of the Hash Table ***
                *** Average Case ***
                    => Insert: O(1)
                    => Deletion: O(1)
                    => Access: O(1)
                *** Worst Hash Function ***
                    => Time complexity: O(n)
*/
