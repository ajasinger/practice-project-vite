//Leetcode 26 (remove duplicates)
var removeDuplicates = function(nums) {
    const j = 1
    for(let i=1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            nums[j] = nums[i]
            j++
        }
    }
    return k
};

//leetcode 27 (remove element)
//remove all val in nums, modify array 
//return number of unique elements 
var removeElement = function(nums, val) {
    
};