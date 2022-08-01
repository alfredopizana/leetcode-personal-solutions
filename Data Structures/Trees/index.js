//Binary Search Tree
/*
class Node{
    constructor(data, left = null, right=null) {
        this.data = data
        this.left =  left
        this.right = rigtht
    }
}
*/
function Node(nodeData) {
    this.data = nodeData;
    this.left = null;
    this.right = null;

    this.insert = (value) => {
        if (value <= this.data) {
            if (!this.left) {
                this.left = new Node(value)
                return;
            }
            this.left.insert(value)
            return;
        }
        if (!this.right) {
            this.right = new Node(value);
            return;
        }
        this.right.insert(value)
    }
    this.contains = value => {
        if (value === this.data)
            return true;
        if (value < this.data) {
            if (this.left === null) {
                return false;
            }
            return this.left.contains(value);
        }
        if (this.right === null)
            return false;
        return this.right.contains(value);
    }
    this.printInOrder = () => {
        if (this.left != null)
            this.left.printInOrder()
            if(this.data)
        console.log(this.data)
        if (this.right != null)
            this.right.printInOrder()
    }
    this.findMin = () => {
        if (this.left != null)
            return this.left.findMin()
        else
            return this.data
    }
    this.findMinNode = () => {
        if (this.left != null)
            return this.left.findMinNode()
        else
            return this
    }
    this.findMax = () => {
        if (this.right)
            return this.right.findMax()
        else
            return this.data
    }

    /*
    this.find = (value)=>{
        if(value === this.data){
            return true;
        }
        if(value < this.data){
            if(this.left != null)
                return this.left.find(value)
            return false
        }
        if(this.right != null)
            return this.right.find(value)
        return false
    }*/
    this.remove = (value) => {
        /*
            To remove a node in the tree even if it's the root, we need to find the value
            to do this we will do semething similar to the find funciton
            we are going to evalute the current value in the node with the value we want to delete
            if we find the value in tree we will procced to remove it setting it to a null value
            then, we need fi find which value is going to replace our removed node value

            If we find the value we have differente scenarios
            1. Node has no children -> we will return null 
            2. Node has no left child 
            3. Node has no right child


        */
        function removeNode(node, value) {
            if (node === null) {
                return null;
            }
            //we find the node witht the data
            if (value === node.data) {

                //We have three scenarios here
                //Node has no children
                //Node has no left child 
                //Node has no right child

                if (!node.left && !node.right)
                    return null
                if (!node.left)
                    return node.right
                if (!node.right)
                    return node.left

                //Reaching this point means we have to leaves as children

                let tempNode = node.right.findMinNode()
                node.data = tempNode.data

                node.right = removeNode(node.right, tempNode.data)
                return node
            }
            else if (value < node.data) {
                node.left = removeNode(node.left, value)
                return node;
            } else {
                node.right = removeNode(node.right, value)
                return node;
            }
        }
        return removeNode(this, value)
    }
}

let node = new Node(10)
let nodeArray = [5, 8, 4, 2, 1, 3, 15, 2, 2, 0, 3, 12, 13, 11, 14, 25, 22, 23, 18]
for (let x = 0; x < nodeArray.length; x++) {
    node.insert(nodeArray[x])
}
node.printInOrder()
console.log("node left right: " + node.left.right.data)
console.log("find min: " + node.findMin())
console.log("find max: " + node.findMax())
console.log("contains 8: " + node.contains(8))
console.log("contains 3: " + node.contains(3))
console.log("contains 2: " + node.contains(2))
console.log("contains 18: " + node.contains(18))
console.log("contains 40: " + node.contains(40))
console.log("contains -1: " + node.contains(-1))
console.log("min node: " + node.findMinNode().data)
console.log("In order print")
node = node.remove(0).remove(2).remove(2).remove(2).remove(1).remove(10).printInOrder()
