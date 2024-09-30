//Reverse this string and output the result. Write a basic assertion test to prove it worked.

//“Hello, Aja!”

//loop through string backwards 
//add to new variable 
//return new variable 

const str = "Hello, Aja!"
//const returnString = "";

const reversedString = (str) => str.toArray().reverse().join('');

// for(i = string.length-1; i >= 0; i--) {
//     returnString = returnString + string.charAt(i);
// }

console.log(returnString);
asserts(reversedString(str), "!ajA, olleH");