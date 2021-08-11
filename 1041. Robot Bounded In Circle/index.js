/**
 * @param {string} instructions
 * @return {boolean}
 */
/*

We need to evaluate if the robot return to position 0,0
The robot can point to Top, Right, Bottom, Left

If pointing to Top and the instruction is G then we increase 1 to Y
If the robot is pointing to right the instruccion is G we increase 1 to X
If pointing to Bottom and the instruccion is G we decrese 1 in Y
and if the Robot is pointing to left and the instruction is G we decrease 1 to X

We can generate some sort of linked list were we can get our next and prev face depending on where the robot is currently pointing

The logic is the following.
When we receive a rotation instruction if we receive right we are rotating clockwise so we can we the next node

If the instruction is to rotate to the left we are going to rotate counterclockwise so we should we our previous node


Top -> Right -> Bottom -> Left
In order to represent this easily without using a complex list we can
define it with indexes

0 -> 1 -> 2 -> 3


Operation:
Robot direciton plus one or minus one depending on the direction. we can apply the remainder operator to reset it. Edge case if the direction is set to Zero and we receive left direction we will automatically set the value to the last one.

e.g.

robotDirection = 0
Instruction = R
Result = 1


*/

/*
Considerations: 
We are goin gto receive the directions as a string so we will need to iterate it somehow, on javascript we can use a function to get the chartAt or we can split it to convert the string to an array.
We In the case the robot does not end on the coordinated (0,0) in the first interation, if we repeat it 4 times it should end up on the initial position. 
We can  assume that  our robot will end up on the initial point if robotDirection if different than the initial direction, in this case if it's different from 0
*/

var isRobotBounded = function(instructions) {
    //Coordinates
    let axis = { x: 0, y:0 }
    let robotDirection = 0
    //Loop to iterate the instructions
    for(let x=0; x<instructions.length;x++){
        let instruction = instructions.charAt(x);
        if(instruction === "L" || instruction === "R"){
            robotDirection = getNewDirection(instruction,robotDirection)
            continue;
        }
        
        //At this point we can assume the robot is going straight one unit
        if(robotDirection === 0){
            axis.y+=1;
            continue
        }
        if(robotDirection === 1){
            axis.x+=1;
            continue
        }
        if(robotDirection === 2){
            axis.y-=1;
            continue
        }
        if(robotDirection === 3){
            axis.x-=1;
            continue
        }
    }
    return ( axis.x === 0 && axis.y === 0) || robotDirection != 0
};

let getNewDirection = (rotationInstruction,currentDirection) =>{
    if(rotationInstruction === "R")
        return (currentDirection+1) % 4;
    //This can also be solve increase 3 to the currentDirection
    if(currentDirection === 0)
        return 3;
    return currentDirection - 1;
}