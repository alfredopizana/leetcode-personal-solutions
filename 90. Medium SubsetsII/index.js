/*
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]


Input: nums = [0]
Output: [[],[0]]

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
//Recursive Solution
 var subsetsWithDup = function(nums) {
    //From Zero To length
        let unique = new Set(),res = [];
    nums.sort((a,b)=>a-b);
    
    const traverse = (index, state)=>{
	
		//If reached the end of the List then check if this is a unique subset
        if(index >= nums.length){
            if(!unique.has(state.join('-'))){
                unique.add(state.join('-'));
                res.push(state);
            }
            return;
        }
		
		//Reject the value at this index
        traverse(index + 1, [...state]);
		
		//Accept the value at this index
        traverse(index + 1, [...state, nums[index]]);
    }
    
    traverse(0, []);
    return res;
};
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
 var subsetsWithDup = function(nums) {
    //From Zero To length
    let setOfUniquesChains = new Set()
    nums.sort((a,b)=>{a-b})
    let result = [];
    for(let x=0;x < nums.length;x++){
        for(let y=x;y <nums.length;y++){
            let chain = nums.slice(x,y+1).join('-')
            if(!setOfUniquesChains.has(chain)){
                setOfUniquesChains.add(chain)
                result = [...result,nums.slice(x,y+1)]
            }
        }
        
    }
    return result;
};*/

function getCombinations(valuesArray)
{

var combi = [];
var temp = [];
var slent = Math.pow(2, valuesArray.length);

for (var i = 0; i < slent; i++)
{
    temp = [];
    for (var j = 0; j < valuesArray.length; j++)
    {
        if ((i & Math.pow(2, j)))
        {
            console.log({i: i,pow: Math.pow(2,j)},"result: "+ (i & Math.pow(2, j)))
            temp.push(valuesArray[j]);
        }
    }
    if (temp.length > 0)
    {
        if(!combi.includes(temp))
            combi.push(temp);
    }
}

combi.sort((a, b) => a.length - b.length);
console.log(combi.join("\n"));
return combi;
}
//let combinations = getCombinations([1,2,2])
//console.log(combinations);

/*
    Example 1:
    Input: nums = [1,2,2]
    Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

    1.- Generate a set of combinations base on the start array is sent

    Generate a function that receives 
*/

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }
function substrings(str1)
{
    var array1 = [];
    for (var x = 0, y=1; x < str1.length; x++,y++) 
    {
        array1[x] = str1.slice(x, y);
    }
    console.log(array1)
    var combi = [];
    var temp= "";
    var slent = Math.pow(2, input.length);
    console.log("slent: " + slent)
    for (var i = 0; i < slent ; i++)
    {

        temp= "";
        for (var j=0;j<input.length;j++) {
            
            if ((i & Math.pow(2,j))){ 
                temp += input[j];
            }
        }
        if (temp !== "")
        {
            //if(!combi.includes(temp))
            combi.push(temp);
        }
    }
    console.log(combi.join("\n"));
}
var start = new Date()
var end = new Date()
function subsets(input)
{
    let str = [];
    var array1 = [];
    /*for (var x = 0, y=1; x < str1.length; x++,y++) 
    {
        array1[x] = str1.slice(x, y);
    }*/
    console.log(array1)
    var combi = [];
    var temp= "";
    var slent = Math.pow(2, input.length);
    console.log("slent: " + slent)
    let counter = 0;
    for (var i = 0; i < slent ; i++)
    {

        temp= "";
        for (var j=0;j<i.toString(2).length;j++) {
            //console.log({binaryI:dec2bin(i),binaryPow: dec2bin(Math.pow(2, j)), i: i,j:j,pow: Math.pow(2,j)},"result: "+ (i & Math.pow(2, j)))
            if ((i & Math.pow(2,j))){ 
                temp += input[j];
            }
            
            counter ++;
        }
        //console.log(`index i: ${i} combination: ${temp}  binary: ${dec2bin(i)} inpunt: ${input} inputLength: ${input.length}`)
        //if (temp !== [])
        //{
            if(!combi.includes(temp))
            combi.push(temp);
        //}
    }
    let result = combi.join("\n");
    //console.log(result);
    console.log(combi)
    //console.log(combi.map(x=>x.split("")))
    console.log(counter)
}

subsets([1,2,2,3,4,5,6,7,7,7,8,9,0,11,12,13,14]);
end = new Date() - start
console.log('Execution time subsets: %dms', end)

start = new Date()
function subsets2(input)
{
    let str = [];
    var array1 = [];
    /*for (var x = 0, y=1; x < str1.length; x++,y++) 
    {
        array1[x] = str1.slice(x, y);
    }*/
    console.log(array1)
    var combi = [];
    var temp= "";
    var slent = Math.pow(2, input.length);
    console.log("slent: " + slent)
    let counter = 0;
    for (var i = 0; i < slent ; i++)
    {

        temp= new Set();
        for (var j=0;j<input.length;j++) {
            //console.log({binaryI:dec2bin(i),binaryPow: dec2bin(Math.pow(2, j)), i: i,j:j,pow: Math.pow(2,j)},"result: "+ (i & Math.pow(2, j)))
            if ((i & Math.pow(2,j))){ 
                temp += input[j];
            }
            
            counter ++;
        }
        //console.log(`index i: ${i} combination: ${temp}  binary: ${dec2bin(i)} inpunt: ${input} inputLength: ${input.length}`)
        //if (temp !== [])
        //{
            if(!combi.includes(temp))
            combi.push(temp);
        //}
    }
    let result = combi.join("\n");
    //console.log(result);
    console.log(combi)
    //console.log(combi.map(x=>x.split("")))
    console.log(counter)
}

subsets2([1,2,2,3,4,5,6,8,9,0,11,12,13,14,17]);
end = new Date() - start
console.log('Execution time subsets2: %dms', end)