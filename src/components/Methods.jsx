// import {useState} from 'react';

// const arrayNums = [1, 3, 6, 8, 4, 3, 2, 8, 6, 5, 6, 7, 0]
// const objName = {
//     name: "kelly",
//     school: "bss",
//     grade: "7",
//     city: "Toronto"
// }
// const arrObjNames = [
//     {name: "bri", age: 49},
//     {name: "kat", age: 26},
//     {name: "ben", age: 78},
//     {name: "carrie", age: 57},
// ]

// const handleClick = () => {
//     //map
//     const mapArr = arrayNums.map(num => num + 1);
//     const mapObj = arrObjNames.map(name => name.age + " years old");
//     console.log('mapArr', mapArr)
//     console.log('mapObj', mapObj)

//     //filter
//     const filterArr = arrayNums.filter(num => num % 20 === 0);
//     const filterObj = arrObjNames.filter(name => name.name.charAt(0) === 'b' || name.name.charAt(0) === 'k');
//     console.log('filterArr', filterArr)
//     console.log('filterObj', filterObj)

//     //reduce
//     const reduceArr = arrayNums.reduce((acc, element) => acc + element +100, 100);
//     const reduceObj = arrObjNames.reduce((acc, element) => acc + element.age, 0);
//     const reduceFullObj = arrObjNames.reduce((acc, person) => {
//         acc[person.name] = person.age;
//         return acc;
//     }, {});
//     console.log('reduceArr', reduceArr);
//     console.log('reduceObj', reduceObj);
//     console.log('reduceFullObj', reduceFullObj);

//     //forEach
//     // const forEachArr = arrayNums.forEach(num => console.log(num + 1));
//     // const forEachObj = arrObjNames.forEach(name => console.log(name.age + " years old"));

//     //sort
//     const sortArr = arrayNums.sort((a,b) => {
//         if(a.age === b.age) {
//             if(a.name > b.name) return 1
//             if(a.name < b.name) return -1
//         }
//         return a.age - b.age;
//     });
//     console.log('sortArr', sortArr);

//     //some
//     const someArr = arrayNums.some(num => num %2 === 0)
//     const someObj = arrObjNames.some(name => name.name === "bri")
//     console.log('someArr', someArr);
//     console.log('someObj', someObj);

//     //every
//     const everyArr = arrayNums.every(num => num %2 === 0)
//     const everyObj = arrObjNames.every(name => name.name === "bri")
//     console.log('everyArr', everyArr);
//     console.log('everyObj', everyObj);
// }

// //map --> creates new array by applying a function to each element --> RETURNS new array 
// //const doubled = nums.map(num => num * 2);  // [2, 4, 6, 8]

// //filter --> creates new array that pass a function to each element --> RETURNS new array
// //const even = nums.filter(num => num % 2 === 0);  // [2, 4]
// //filter out repeated values --> const mergedUnique = arr1.concat(arr2).filter((item, index, array) => array.indexOf(item) === index);

// //reduce --> executes reducer on each element --> RETURNS value (doesn't change array)
// //const sum = nums.reduce((acc, curr) => acc + curr, 0);  // 10

// //forEach --> executes function on each element --> RETURNS undefined
// const forEach = nums.forEach(num => console.log(num));

// //sort --> sorts array in place based on function --> RETURNS reference to array, now sorted
// //nums.sort((a, b) => a - b);  // [1, 1, 3, 4, 5]

// //some --> checks if at least one element passes function requirements --> RETURNS true/false
// //const hasEven = nums.some(num => num % 2 === 0);  // true

// //every --> checks if all elemente passes function requirements --> RETURNS true/false
// //const hasEven = nums.some(num => num % 2 === 0);  // true

// //includes --> checks if a string contains another string --> RETURNS true/false
// //const containsHello = str.includes("hello");  // true

// //find --> finds first element that passes requirements --> RETURNS element of array or object
// //const user = users.find(user => user.name === 'Bob');  // { name: 'Bob' }

// //findIndex --> finds index of first element that passes requirements --> RETURNS index
// //const index = nums.findIndex(num => num === 30);  // 2

// //splice --> add or removes elements to array --> RETURNS removed elements
// //nums.splice(1, 2);  // Removes 2 elements starting at index 1 => nums becomes [1, 4] 

// //slice --> extract part of array os string --> RETURNS shallow copy
// //const part = arr.slice(1, 3);  // [2, 3] (from index 1 to 2, non-inclusive of 3)

// //Object.keys --> RETURNS array of keys
// //const keys = Object.keys(user);  // ['name', 'age']

// //Object.values --> RETURNS array of values
// //const values = Object.values(user);  // ['Alice', 25]

// //Object.entries --> RETURNS array of key/value pairs 
// //const entries = Object.entries(user);  // [['name', 'Alice'], ['age', 25]]

// //Array.concat --> merges arrays with modifying originals --> RETURNS new array
// //const combined = arr1.concat(arr2);  // [1, 2, 3, 4]

// //Math.max & Math.min --> finds highest or lowest number in array --> RETURNS value
// //const max = Math.max(...nums);  // 4

// //JSON.stringify --> object to JSON string --> RETURNS JSON string
// //const str = JSON.stringify(obj);  // '{"name":"Alice","age":25}'

// //JSON.parse --> JSON string to object --> RETURNS object
// //const parsed = JSON.parse(str);   // { name: 'Alice', age: 25 }

// //join --> array to string --> RETURNS string
// //const result = fruits.join(' - '); // Output: "apple - banana - cherry"
// //defualt separator is comma

// //split --> string to array --> RETURNS array
// //const limitedWords = text.split(' ', 1); console.log(limitedWords);  // Output: ["Hello,"]

// //indexOf --> find first element that matches in string or array --> RETURNS index or -1 if not found
// //const index = sentence.indexOf("quick"); // Output: 4

// //charAt --> RETURNS character at a specified index in a string
// //const character = text.charAt(4); // Output: "S"

// //toUpperCase & toLowerCase --> converts all the characters in a string to uppercase or lowercase
// //const upperText = text.toUpperCase(); // Output: "HELLO WORLD"

// export default function Methods() {
//     return(
//         <div>
//             <button type="button" onClick={handleClick}>Click Me</button>

//         </div>
//     )
// }