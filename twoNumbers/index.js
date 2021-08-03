/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/
/*
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/*
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

/*
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Brute Force Solution
/* var twoSum = function(nums, target) {
    for(let index = 0; index<nums.length; index++){
        let firstNumber = nums[index];
        for(let jndex = 0; jndex< nums.length; jndex++){
            if((target - firstNumber) == nums[jndex]){
                return [index,jndex]
            }
        }
    }
    return null
};*/
//Optimized Solution
/*
var twoSum = function(nums, target) {
    for(let index = 0; index<nums.length; index++){
        let difference = target - nums[index];
        let indexOfComplementaryNumber = nums.indexOf(difference,index +1) 
        
        if( (index + 1) < nums.length && indexOfComplementaryNumber != -1){
            return [index,indexOfComplementaryNumber];
        }
    }
    return null
};*/

//Final Solution
var twoSum = function(nums, target) {
    var history = new Map();
    
    for(let index = 0; index<nums.length; index++){
        let differenceTarget = target - nums[index];
        if(history.has(differenceTarget)){
            complementaryNumberPosition = history.get(differenceTarget)
            return [complementaryNumberPosition,index]
            
            
        }
        history.set(nums[index],index)
    }
    return null
};