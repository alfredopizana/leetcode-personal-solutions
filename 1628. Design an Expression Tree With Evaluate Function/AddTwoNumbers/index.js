/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */

 const mathOperators = {
  '+': (a,b) => a+b,
  '-': (a,b) => a-b,
  '*': (a,b) => a*b,
  '/': (a,b) => a/b,
}


var Node = function () {
    if (this.constructor === Node) {
        throw new Error('Cannot instanciate abstract class');
    }
};

Node.prototype.evaluate = function () {
    throw new Error('Cannot call abstract method')
};

class TreeNode extends Node {
    constructor(root, left = null, right = null) {
        super();
        this.root = root;
        this.left = left;
        this.right = right;
    }
    evaluate(){
      if(!isNaN(this.root)) 
        return Number(this.root)

      const left = this.left.evaluate()
      const right = this.right.evaluate()
      return mathOperators[this.root](left,right);
    }
}





/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input 
 * and returns the expression tree represnting it as a Node.
 */

class TreeBuilder {
    /**
     * @param {string[]} s
     * @return {Node}
     */
    buildTree(postfix) {
      let stack = []
      for(let index = 0;index < postfix.length;index++){
        let right;
        let left;
        let rootValue = postfix[index]
        if(isNaN(rootValue))
        {
          right = stack.pop();
          left =  stack.pop();
        }
        let root = new TreeNode(rootValue,left,right)
        stack.push(root)
      }
      return stack.pop()
    }

}

/**
 * Your TreeBuilder object will be instantiated and called as such:
 * var obj = new TreeBuilder();
 * var expTree = obj.buildTree(postfix);
 * var ans = expTree.evaluate();
 */

var obj = new TreeBuilder();
var expTree = obj.buildTree(["3","4","+","2","*","7","/"]);
var ans = expTree.evaluate();
console.log(ans)

var expTree = obj.buildTree(["4","5","2","7","+","-","*"]);
var ans = expTree.evaluate();
console.log(ans)