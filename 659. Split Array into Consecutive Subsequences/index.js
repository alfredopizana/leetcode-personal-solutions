/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isPossible = function(nums) {
    
    /*
        create a list of subsequences
        iterate the nums array
            for each num in the array with position "index", look for the subsequence than can take that number
                //TBD - Find the best solution to find the subsequence iterating the list of subsequences and checking the last digit
                //Validate if the last digit + 1 is the same of the current num
                //If the condition is meet then add that number to the current subsequence,
                //If not create a new subsequence
                
        iterate throught the subsequences to validate it contains more than 3
        If any of the subsequence is less than 3 then return false, otherwhise re
    */
    if(nums.length == 0)
        return false;
    let subsequences = [[nums[0]]];
    for(let numIndex = 1; numIndex < nums.length ; numIndex++){
        const num = nums[numIndex]
        
        let subsequenceAdded = false;
        for(let subsequenceIndex = subsequences.length -1; subsequenceIndex >= 0  ; subsequenceIndex--){
            
            let subsequenceLength = subsequences[subsequenceIndex].length;
            
            let isNumberASubsequence = num === (subsequences[subsequenceIndex][subsequenceLength - 1]+1);
            if( isNumberASubsequence ){
                subsequences[subsequenceIndex].push(num)
                subsequenceAdded = true;
                break;
            }
        }
        if( !subsequenceAdded )
        {
            subsequences.push([num])
        }
    }
    return subsequences.every(sequence=>sequence.length >= 3)
};