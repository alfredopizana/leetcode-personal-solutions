/**
 * @param {string} s
 * @return {number}
 */

//Brute Force Solution
 var lengthOfLongestSubstring = function(s) {
    let longestSubstring = 0;
    console.log(s.length)
    for(let startPosition = 0; startPosition < s.length ; startPosition++){
        const setOfLetters = new Set();
        console.log({longestSubstring})
        let currentSubstringLength = 0
        for(let index = startPosition; index < s.length ; index++){
           

            
            const currentLetter = s.charAt(index) 

            if(setOfLetters.has(currentLetter)){
                
                console.log({longestSubstring},"break")
                break;
            }
            setOfLetters.add(currentLetter)
            currentSubstringLength+=1;
            if(currentSubstringLength > longestSubstring)
                    longestSubstring = currentSubstringLength
            console.log({currentSubstringLength})
        }
        if(longestSubstring >= (s.length+1 / 2) )
            break
    }
    return longestSubstring;
};

console.log(lengthOfLongestSubstring("anviaj"))