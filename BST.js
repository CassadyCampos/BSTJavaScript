class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    getData() {
        return this.data;
    }
}

class BinarySearchTree {
    constructor() {
        this.root  = null;
    
    }e

    insert(data)  { 
        // Creating a node and initailising  
        // with data  
        var newNode = new Node(data); 
        
        this.root === null? this.root = newNode : this.insertNode(this.root, newNode);

        // // root is null then node will 
        // // be added to the tree and made root. 
        // if(this.root === null) 
        //     this.root = newNode; 
        // else
      
        //     // find the correct position in the  
        //     // tree and add the node 
        //     this.insertNode(this.root, newNode); 
    } 
    
    getRootNode() {
        return this.root;
    }

    // Method to insert a node in a tree 
    // it moves over the tree to find the location 
    // to insert a node with a given data  
    insertNode(node, newNode) 
    { 
        if (newNode.data < node.data) {
            node.left === null  ? node.left = newNode : this.insertNode(node.left, newNode);
        } else {
            node.right === null ? node.right = newNode : this.insertNode(node.right, newNode);
        }

    } 

    /**
     * Search Node method
     */
    searchNode(node, data) {
        if(node === null) 
            return null;
        // if data is less than node's data 
        // move left 
         else if(data < node.data) 
         return this.search(node.left, data); 

        // if data is less than node's data 
        // move left 
        else if(data > node.data) 
            return this.search(node.right, data); 

        // if data is equal to the node data  
        // return node 
        else if (data === node.data);
            return node; 
    } 

    /**
     * Remove data from node methoed
     *  
     */
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }
    
    /**
     * Method to search for the node
     */
    deleteNode(node, key) {
        if (node.data === null) {
            console.log("Node does not exist");
            return null;
        } else if (key < node.data) {
            nodeleft = this.deleteNode(node.left, key);
            return node;
        }
        else if (key > node.data ) {
            node.right = this.removeNode(node.right, key);
        }
    }
}


// create an object for the BinarySearchTree 
var BST = new BinarySearchTree(); 
  
// Inserting nodes to the BinarySearchTree 
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27); 

var root = BST.getRootNode();
console.log(BST.root.data);
var answer = BST.searchNode(BST, 9);
console.log(root.left.data);



// /**

//  * @return {TreeNode}
//  */
var bstToGst = function(root) {
    
};