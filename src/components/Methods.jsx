// We provided a small React application with some starter code. Your goal is to modify the application so that it displays a 
// tile for every letter in the alphabet in uppercase format. Then if a tile is clicked, that letter is appended to the current 
// string that exists in the element with ID outputString.

// If at any point there are 3 consecutive letters that are the same, replace them with an underscore. 
// For example, if A, B, C, F, F, F, G is clicked in that order, the string that appears in outputString would be ABC_G. 
// If 6 of the same letter appears after, for example, clicking A six times followed by a B, then outputString would be __B.

// You are free to add classes and styles, but make sure you leave the component ID's and classes provided as they are. 
// Submit your code once it is complete and our system will validate your output.

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

export default function Methods() {
    return(
        <div>

        </div>
    )
}