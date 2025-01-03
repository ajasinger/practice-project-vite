//Leetcode 26 (remove duplicates)
var removeDuplicates = function(nums) {
    let j = 1
    for(let i=1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            nums[j] = nums[i]
            j++
        }
    }
    return j
};

//TIME = O(n) & SPACE = O(1) 
//TIME: iteration is length of the array O(n) 
//SPACE: saving 2 variables 


//leetcode 27 (remove element)
var removeElement = function(nums, val) {
    let j = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[j] = nums[i];
            j++
        }
    }
    return j
};

//TIME = O(n) & SPACE = O(1) 
//TIME: iteration is length of the array O(n) 
//SPACE: saving 2 variables 


//1929 concatenate array 
var getConcatenation = function(nums) {
    return ans = [...nums,...nums]
    //return nums.concat(nums)
};

//TIME & SPACE = O(n) 
//TIME: iteration is length of the array twice O(n) 
//SPACE: new array is created so O(n)


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

var isValid3 = function(s) {
    const brackets = {
        '}' : '{',
        ')' : '(',
        ']' : '['
    }
    let stack = []

    for(let i=0; i < s.length; i++){
        const char = s[i];

        if(char === '{' || char === '(' || char === '[') {
            bracketsArray.push(char);
        } else {
            if (stack.pop() !== brackets[char]) {
                return false;
            }
        }
    }

    return stack.length === 0
};

//TIME & SPACE = O(n) 
//TIME:
//iteration is length of the string O(n) 
//push & pop are O(1)
//hash map lookup is O(1)
//SPACE: max space is length/2 --> n/2 so O(n)


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

MinStack.prototype.pop = function() {
    const poppedValue = this.stack.pop();

    if(poppedValue === this.getMin()) {
        this.minStack.pop();
    }
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1]
};

//Solution 2 
var MinStack2 = function() {
    this.stack = []
    this.minStack = []

};

MinStack2.prototype.push = function(val) {
    this.stack.push(val);
    //push current min val into minStack
    if(this.minStack.length === 0 || val <= this.getMin()) {
        this.minStack.push(val);
    }
};

MinStack2.prototype.pop = function() {
    const poppedValue = this.stack.pop();

    if(poppedValue === this.getMin()) {
        this.minStack.pop();
    }
};

MinStack2.prototype.top = function() {
    return this.stack[this.stack.length -1]
};

MinStack2.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};

//TIME & SPACE = O(1)

//206 Reverse Linked List 
//Iterative solution
var reverseList = function(head) {
    //set 2 pointers
    let prev = null; 
    let current = this.head;

    while(current !== null) {
        //store reference of next node 
        const nextNode = current.next
        //set next pointer of current node to previous node to reverse order 
        //(points to null if now end tail of list)
        current.next = prev;
        //move prev pointer to current node 
        prev = current;
        //move current node to stored next node 
        current = nextNode;
    }

    //set new head 
    this.head = prev;
    //return prev;
};

//O(n) time because we touch n nodes 
//O(1) space becasue not creating space that scales as input does, keep constant variables

//Recursive solution
var reverseList2 = function(head) {
    //base case if list is empty or next node is null (at end of list)
    if (head === null || head.next === null) {
        return head;
    }

    //Recursive call: reverse the rest of the list starting from head.next
    const newHead = reverseList2(head.next);

    // Connect the next node back to the current head
    head.next.next = head; 

    // Set head.next to null to prevent a cycle
    head.next = null;

    // Return the new head of the reversed list
    return newHead;
};

//O(n) time because we touch n nodes 
//O(n) 
