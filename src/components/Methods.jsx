import {useState} from 'react';

const arrayNums = [1, 3, 6, 8, 4, 3, 2, 8, 6, 5, 6, 7, 0]
const objName = {
    name: "kelly",
    school: "bss",
    grade: "7",
    city: "Toronto"
}
const arrObjNames = [
    {name: "bri", age: "49"},
    {name: "kat", age: "26"},
    {name: "ben", age: "78"},
    {name: "carrie", age: "57"},
]

const handleClick = () => {

}

//map --> creates new array by applying a function to each element --> RETURNS new array 
//const doubled = nums.map(num => num * 2);  // [2, 4, 6, 8]

//filter --> creates new array that pass a function to each element --> RETURNS new array
//const even = nums.filter(num => num % 2 === 0);  // [2, 4]
//filter out repeated values --> const mergedUnique = arr1.concat(arr2).filter((item, index, array) => array.indexOf(item) === index);

//reduce --> executes reducer on each element --> RETURNS value (doesn't change array)
//const sum = nums.reduce((acc, curr) => acc + curr, 0);  // 10

//forEach --> executes function on each element --> RETURNS undefined
//nums.forEach(num => console.log(num));

//sort --> sorts array in place based on function --> RETURNS reference to array, now sorted
//nums.sort((a, b) => a - b);  // [1, 1, 3, 4, 5]

//some --> checks if at least one element passes function requirements --> RETURNS true/false
//const hasEven = nums.some(num => num % 2 === 0);  // true

//every --> checks if all elemente passes function requirements --> RETURNS true/false
//const hasEven = nums.some(num => num % 2 === 0);  // true

//includes --> checks if a string contains another string --> RETURNS true/false
//const containsHello = str.includes("hello");  // true

//find --> finds first element that passes requirements --> RETURNS element of array or object
//const user = users.find(user => user.name === 'Bob');  // { name: 'Bob' }

//findIndex --> finds index of first element that passes requirements --> RETURNS index
//const index = nums.findIndex(num => num === 30);  // 2

//splice --> add or removes elements to array --> RETURNS removed elements
//nums.splice(1, 2);  // Removes 2 elements starting at index 1 => nums becomes [1, 4] 

//slice --> extract part of array os string --> RETURNS shallow copy
//const part = arr.slice(1, 3);  // [2, 3] (from index 1 to 2, non-inclusive of 3)

//Object.keys --> RETURNS array of keys
//const keys = Object.keys(user);  // ['name', 'age']

//Object.values --> RETURNS array of values
//const values = Object.values(user);  // ['Alice', 25]

//Object.entries --> RETURNS array of key/value pairs 
//const entries = Object.entries(user);  // [['name', 'Alice'], ['age', 25]]

//Array.concat --> merges arrays with modifying originals --> RETURNS new array
//const combined = arr1.concat(arr2);  // [1, 2, 3, 4]

//Math.max & Math.min --> finds highest or lowest number in array --> RETURNS value
//const max = Math.max(...nums);  // 4

//JSON.stringify --> object to JSON string --> RETURNS JSON string
//const str = JSON.stringify(obj);  // '{"name":"Alice","age":25}'

//JSON.parse --> JSON string to object --> RETURNS object
//const parsed = JSON.parse(str);   // { name: 'Alice', age: 25 }

//join --> array to string --> RETURNS string
//const result = fruits.join(' - '); // Output: "apple - banana - cherry"
//defualt separator is comma

//split --> string to array --> RETURNS array
//const limitedWords = text.split(' ', 1); console.log(limitedWords);  // Output: ["Hello,"]

//indexOf --> find first element that matches in string or array --> RETURNS index or -1 if not found
//const index = sentence.indexOf("quick"); // Output: 4

//charAt --> RETURNS character at a specified index in a string
//const character = text.charAt(4); // Output: "S"

//toUpperCase & toLowerCase --> converts all the characters in a string to uppercase or lowercase
//const upperText = text.toUpperCase(); // Output: "HELLO WORLD"

export default function Methods() {
    return(
        <div>
            <button type="button" onClick={handleClick}>Click Me</button>

        </div>
    )
}