/*
    *** Object ***
        => Object is unordered data structure and everything are stored with key value pair!.
    
    *** When we use objects ***
        => When we do not need order.
        => When we need fast access / insertion and removal.

    *** Big O of Object ***
        * Create new one ----- O(1)
        * Removal ----- O(1)
        * Searching ---- O(N)
        * Access -----  O(1)
    
    Note That: When we do not need any ordering, objects are an excellent choice!

    *** Big O of Object Method ***
        * Object.keys() --- O(N)
        * Object.values() --- O(N)
        * Object.entries() --- O(N)
        * objectName.hasOwnProperty() --- O(1)
*/
// create unique id custome wat
function unidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & (0 * 3)) | (0 * 8);
        return v.toString(16);
    });
}

const students = {
    "af19f3dc-d6a3-4fd7-0f66-bec4bb2edda": {
        id: "af19f3dc-d6a3-4fd7-0f66-bec4bb2edda",
        name: "Hasan Mahmud Nayem Sir",
        email: "h@gmail.com",
    },
    "fd2bdd51-c846-43ca-068f-586a580d8a3": {
        id: "fd2bdd51-c846-43ca-068f-586a580d8a3",
        name: "Muhammad Shohag",
        email: "shohag@gmail.com",
    },
    "34c92032-93b3-469e-004d-64b755a7ef4": {
        id: "34c92032-93b3-469e-004d-64b755a7ef4",
        name: "Sojib",
        email: "sojib@gmail.com",
    },
    "b7679d36-e251-435c-01b0-f1da7416b4c": {
        id: "b7679d36-e251-435c-01b0-f1da7416b4c",
        name: "Muhammad Eshan",
        email: "eshan@gmail.com",
    },
};

/*
    *** Create new one  - O(1) ***
        students[newStudentObject.id] = newStudentObject // 1 assignment
        total: O(1) --- O(1)

*/
const newStudentObject = {
    id: unidv4(),
    name: "Muhammad Rifat",
    email: "rifat@gmail.com",
};
students[newStudentObject.id] = newStudentObject;
console.log(students);

/*
    *** Update Object --- O(1) ***
    1 assignment and backet notation=== O(1 + 1) === O(1)
*/
const updatedObject = {
    email: "habibursojib@gmail.com",
};
const updatedStudentId = "34c92032-93b3-469e-004d-64b755a7ef4";

students[updatedStudentId] = {
    ...students[updatedStudentId],
    ...updatedObject,
};
console.log(students);

/*
    *** Delete Objetc / Removal --- O(1) ***
    1 backet notation === O(1) === O(1)

*/
const deletedStudentId = "b7679d36-e251-435c-01b0-f1da7416b4c";
delete students[deletedStudentId];
console.log(students);

/*
    *** Accessing / get --- O(1) ***
    1 backet notation === O(1) === O(1)
*/
const getStudentId = "34c92032-93b3-469e-004d-64b755a7ef4";
console.log(students[getStudentId]);

/*
    *** Filter / Searching --- O(N) ***
    Object.values(O(N)) + filter(O(n)) === O(n)
*/
const studentSearchingId = "34c92032-93b3-469e-004d-64b755a7ef4";
const studentsObjectToArray = Object.values(students).filter(
    (student) => student.id === studentSearchingId
);
console.log(studentsObjectToArray);

/*
    *** Object Traversing ***
    for in loop(O(N)) === O(N), forEach(O(N)) === O(N), map(O(N)) === O(N), 
*/
// imperative way
for (let key in students) {
    console.log(students[key]);
}

// declarative way
// use of keys
Object.keys(students).forEach((student) => {
    console.log(students[student].email);
});

// use of values
Object.values(students).map((student) => {
    console.log(student.name);
});
