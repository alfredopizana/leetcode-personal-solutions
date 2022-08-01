/**
 * @param {number} n
 * @return {number}
 */
 var bulbSwitch = function(n) {
    if(n=== 0)
        return 0;
    let state = Array(n).fill(0,1)
    state[0] = true;
    for(let index = 2 ; index <= n; index = index*index ){
        let switchedBulb = index*index
        if (switchedBulb > n){
            break;
        }
        state[switchedBulb-1] = !state[switchedBulb-1];

    }
    return state.filter(bulbOn => bulbOn).length
};

console.log(bulbSwitch(0));
console.log(bulbSwitch(1));
console.log(bulbSwitch(2));
console.log(bulbSwitch(3));
console.log(bulbSwitch(4));
console.log(bulbSwitch(5));
console.log(bulbSwitch(6));
console.log(bulbSwitch(7));
console.log(bulbSwitch(8));
console.log(bulbSwitch(9));
console.log(bulbSwitch(10));
console.log(bulbSwitch(11));
console.log(bulbSwitch(12));

console.log("100: " + bulbSwitch(100));

console.log("1000: " + bulbSwitch(1000));

console.log("99999999: " + bulbSwitch(99999999));