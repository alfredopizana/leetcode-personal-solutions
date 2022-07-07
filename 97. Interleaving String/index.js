/* Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where they are divided into non-empty substrings such that:

s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
Note: a + b is the concatenation of strings a and b.

 

Example 1:


Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
Example 3:

Input: s1 = "", s2 = "", s3 = ""
Output: true
 

Constraints:

0 <= s1.length, s2.length <= 100
0 <= s3.length <= 200
s1, s2, and s3 consist of lowercase English letters.

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
 var isInterleave = function(s1, s2, s3) {
    if( (s1.length+s2.length) != s3.length)
        return false;
    return findAPath(s1,s2,s3,0)
};

function findAPath(s1,s2,s3,position){
    
    
    if (s1.length > 0 && s1[0] == s3[position]){
        let s1Path = findAPath(s1.substring(1),s2,s3,position+1)
        console.log("s1: "+s1+ " s2:" +s2 + " s3[position]:"+s3[position]+" position:"+ position)
        //console.log("Path1: "+s1Path)
        //console.log("Eval: "+(s1[0] == s3[position]))
        if(s1Path)
            return true;
    }
    if (s2.length > 0 && s2[0] == s3[position]){
        let s2Path = findAPath(s1,s2.substring(1),s3,position+1)
        console.log("s1: "+s1+ " s2:" +s2 + " s3[position]:"+s3[position]+"  position:"+ position)
        //console.log("Path2: "+s2Path)
        
        if(s2Path)
            return true;
    }
    //console.log("NOT: s1: "+s1+ " s2:" +s2 + "s3[position]:"+s3[position]+"  position:"+ position)
    if(s1.length == 0 && s2.length == 0 && position+1 >= s3.length )
        return true;
    //console.log("DEFAULT: s1: "+s1+ " "+s1[0]+" s2:" +s2+" " +s2[0]+ " s3[position]:"+s3[position]+"  position:"+ position)
    return false;
} 
//console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac")) //! True
//console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc")) //! False
//console.log(isInterleave("", "", "")) // True
//console.log(isInterleave("a", "", "c")) // False
//console.log(isInterleave("aabcc","dbbca","aadbbcbcac")) // True


/*console.log(isInterleave(
    "abababababababababababababababababababababababababababababababababababababababababababababababababbb",
    "babababababababababababababababababababababababababababababababababababababababababababababababaaaba",
    "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb")) // True



*/