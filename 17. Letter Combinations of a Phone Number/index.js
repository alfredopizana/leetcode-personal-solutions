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
function Dictionary() {
    this.digits = []
    this.digits[2] = ["a", "b", "c"]
    this.digits[3] = ["d", "e", "f"]
    this.digits[4] = ["g", "h", "i"]
    this.digits[5] = ["j", "k", "l"]
    this.digits[6] = ["m", "n", "o"]
    this.digits[7] = ["p", "q", "r", "s"]
    this.digits[8] = ["t", "u", "v"]
    this.digits[9] = ["w", "x", "y", "z"]
}
function Node(value) {
    this.data = value;
    this.children = [];
    this.dictionary = new Dictionary();
    this.combinations = []
    this.generateChildren = (numbers) => { // "2 -> 34"
        if(!numbers)
            return
        let currentNumber = parseInt(numbers.charAt(0)) // 2
        let pendingNumbers = numbers.substring(1) // 34
        let combinations = this.dictionary.digits[currentNumber];
        for (let index = 0; index < combinations.length; index++) {
            let child = new Node(combinations[index]);
            if (pendingNumbers.length > 0)
                child.generateChildren(pendingNumbers);
            this.children.push(child)
        }
    }
    this.getRecursiveCombinations = () => {
        let nodeIsLeaf =  this.children.length === 0
        if(!this.data && nodeIsLeaf)
            return []
        if(nodeIsLeaf)
            return [this.data]
        for (let index = 0; index < this.children.length; index++) {
            let childNode = this.children[index]
            if (childNode) {
                let childCombinations = childNode.getRecursiveCombinations()
                let childMappedCombinations = []
                
                    childMappedCombinations = childCombinations.map(item => {
                        return (this.data + item)
                    })
                
                this.combinations = [...this.combinations, ...childMappedCombinations]
            }

        }
        return this.combinations
    }
}

var letterCombinations = function (digits) {
    let node = new Node("")
    node.generateChildren(digits)
    return node.getRecursiveCombinations()
};

// O (4^2)
//let node = new Node("")
//node.generateChildren("234")
console.log(letterCombinations("23"))