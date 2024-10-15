//Leetcode 26 (remove duplicates)
var removeDuplicates = function(nums) {
    let j = 1
    let k = 0;
    for(let i=1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            nums[j] = nums[i]
            j++
        }
    }
    return k
};

//leetcode 27 (remove element)
var removeElement = function(nums, val) {
    let k = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[k] = nums[i];
            k++
        }
    }
    return k
};

//1929 concatenate array 
var getConcatenation = function(nums) {
    return ans = [...nums,...nums]
    //return nums.concat(nums)
};

//155 min stack
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
};

MinStack.prototype.push = function(val) {
    this.stack.push(val)
    //push min val to minVal
    const minVal = this.minStack.length === 0 ? val : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(minVal);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1]
};



//20 valid parentheses
var isValid = function(s) {
    let stack = [];
    const closeToOpen = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }

    for(let char of s) {
        if(char in closeToOpen) {
            //if key (closing bracket) check stack for a match
            if (stack.length === 0 || stack[stack.length - 1] !== closeToOpen[char]) {
                return false; // No match found or stack is empty
            }
            stack.pop(); // Remove the matching opening bracket from the stack
        } else {
            //if open bracket
            stack.push(char);
        }
    }

    return stack.length === 0;
}


var isValid2 = function(s) {
    // Stack to store opening brackets
    let stack = [];

    // HashMap to store valid pairs of opening and closing brackets
    let bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Traverse the string
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            // Push opening brackets onto the stack
            stack.push(char);
        } else {
            // If the character is a closing bracket, check for a match
            if (stack.length === 0 || stack[stack.length - 1] !== bracketMap[char]) {
                return false; // No match found or stack is empty
            }
            stack.pop(); // Remove the matching opening bracket from the stack
        }
    }

    // If the stack is empty, all opening brackets had matching closing brackets
    return stack.length === 0;
};