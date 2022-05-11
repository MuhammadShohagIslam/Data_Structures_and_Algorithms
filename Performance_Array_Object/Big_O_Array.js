/*
    *** Array ***
        => Array is ordered data structure where data is stored as a index

    *** When we use Array? ***
        => When we need order
        => When we need fast access / insertion and removal(sort of ...)

    
    *** Big O of Array ***
        * Create new one - It depends ...(push()-O(1), unshift() - O(N))
        * Removal - It depends ... (shift() - O(N)), pop() - O(1)
        * Searching --- O(N)
        * Access --- O(1)
    
    *** Big O of Array Operations ***
        * push - O(1)
        * unshift - O(N)
        * pop - O(1)
        * shift - O(N)
        * concat - O(N)
        * slice - O(N)
        * splice - O(N)
        * sort - O( N * log N)
        * forEach / map / filter / reduce / etc - O(N)
*/
// create unique id custome wat
function unidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & (0 * 3)) | (0 * 8);
        return v.toString(16);
    });
}
const students = [
    {
        id: "40f4d511-552a-4823-062d-0c412187760",
        name: "Hasan Mahmud Nayem Sir",
        email: "h@gmail.com",
    },
    {
        id: "eef150b1-54c3-4c58-028b-0dda775f7f5",
        name: "Muhammad Shohag",
        email: "shohag@gmail.com",
    },
    {
        id: "54a1a84e-fce3-4c97-0dd9-e377bd47bbc",
        name: "Sojib",
        email: "sojib@gmail.com",
    },
];
console.log(students);

/*
    *** Create new  array - O(1) ***
        array.push() --- O(1)
        array.unshift() --- O(N)
*/
const newStudent = {
    id: unidv4(),
    name: "Muhammad Eshan",
    email: "eshan@gmail.com",
};
// added new student end of the array
students.push(newStudent); // O(1) beacuse we added new array end of the array
console.log(students);

// added new student begining of the array
students.unshift(newStudent); // O(1) beacuse we added new array beginning of the array
console.log(students);

/*
 *** Updating - O(1) ***
 */

const updatedStudentId = "54a1a84e-fce3-4c97-0dd9-e377bd47bbc";
const updatedStudent = {
    email: "habibsojib@gmail.com",
};
const updatedStudentIndex = students.findIndex(
    (student) => student.id === updatedStudentId
);

students[updatedStudentIndex] = {
    ...students[updatedStudentIndex],
    ...updatedStudent,
};
console.log(students);

/*
 *** Accessing / get data --- O(1) ***
 */
const updatedStudentId1 = "54a1a84e-fce3-4c97-0dd9-e377bd47bbc";
const updatedStudentIndex1 = students.findIndex(
    (student) => student.id === updatedStudentId
);
console.log(students[updatedStudentIndex1]);

/*
 *** * Removal - It depends ... (shift() - O(N)), pop() - O(1) ***
 */
// delete new student end of the array
students.pop(newStudent); // O(1) beacuse we delete new array end of the array
console.log(students);

// delete new student begining of the array
students.shift(newStudent); // O(1) beacuse we delete new array beginning of the array
console.log(students);

/*
    *** Searching / Filtering --- O(N) *** 
    students.filter() is always - O(N)
*/
const searchingStudentId = "54a1a84e-fce3-4c97-0dd9-e377bd47bbc";
const filteredStudent = students.filter(
    (student) => student.id === searchingStudentId
);
console.log(filteredStudent);

/*
    *** Traversing Array --- O(N) ***
    forEach/map --- O(N)
*/
// using foEach() method is always O(N)
students.forEach((student) => {
    console.log(student.name);
});

// using map() method is always O(N)
const studentLooping = students.map((student) => {
    console.log(student.email);
});
