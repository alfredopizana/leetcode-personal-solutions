/**
 * @param {number} n
 * @return {number}
 */
 let memo = [];
 /*
 6 = 8
 5 = 5
 4 = 3
 3 = 2
 2 = 1
 1 = 1
 */
 var fib = function(n) {
     
     if(memo[n])
         return memo[n];
     if(n==0)
         return 0
     if(n==1)
         return 1;
     memo[n] = fib(n -1) + fib(n-2);
     return memo[n]; 
 };