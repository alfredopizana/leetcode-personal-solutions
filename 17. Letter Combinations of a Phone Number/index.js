/*
17. Letter Combinations of a Phone Numberb - Medium

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

*/


/*
We need to define which letters are contained on every number
e.g.
2 = [a,b,c]
3 = [d,e,f]
4 = [g,h,i]
5 = [j,k,l]
*/

/**
 * @param {string} digits
 * @return {string[]}
 */

 /**
 * @param {string} digits
 * @return {string[]}
 */
function Dictionary(){
    this.digits = []
    this.digits[2] = ["a","b","c"]
    this.digits[3] = ["d","e","f"]
    this.digits[4] = ["g","h","i"]
    this.digits[5] = ["j","k","l"]
    this.digits[6] = ["m","n","o"]
    this.digits[7] = ["p","q","r","s"]
    this.digits[8] = ["t","u","v"]
    this.digits[9] = ["w","x","y","z"]
}
function Node(value){
    this.data = value;
    this.children = [];
    this.dictionary = new Dictionary();
    this.generateChildren = (numbers)=>{
        let currentNumber = parseInt(numbers.charAt(0))
        let pendingNumbers = numbers.substring(1)
        let combinations = this.dictionary.digits[currentNumber];
        for(let index=0; index < combinations.length; index++){
            let child =  new Node(combinations[index]);
            if(pendingNumbers.length > 0)
                child.generateChildren(pendingNumbers);
            this.children.push(child)
        }
    }
    this.getRecursiveCombinations = ()=>{
        let combinations = []
        for(let index = 0; children.lenght;index++){
            
            combinations.push(children[index].getRecursiveCombinations())
        }
        return combinations
    }
}
let node = new Node("")
node.generateChildren("23")
var letterCombinations = function(digits) {
    
};
