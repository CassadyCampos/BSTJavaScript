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
    
    }

    getRootNode() {
        return this.root;
    }
    
    /**
     * Wrapper function to insert a node into the tree with value data.
     */
    insert(data)  { 
        /**
         * Creating a node and initializing it with data
         */
        var newNode = new Node(data); 
        
        this.root === null? this.root = newNode : this.insertNode(this.root, newNode);


    }    

    /**
     * Method to insert the newNode into the tree starting at node
     */
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
        /**
         * Data is less than the node we are looking ats data, so move left
         */
         else if(data < node.data) 
         return this.search(node.left, data); 

        /**
         * Data is greater than the node we are looking ats data, so move right
         */
        else if(data > node.data) 
            return this.search(node.right, data); 

        /**
         * Data is equal to the node we are looking ats data, we have found it,
         * return the node.
         */
        else if (data === node.data);
            return node; 
    } 

    /**
     * 
     * Method to remove a node from a tree that holds the value of data.
     * Wrapper function.
     */
    remove(data) { 
        
        this.root = this.removeNode(this.root, data); 
    } 
  
    /**
     * Removes the ndoe from the tree with the value key.
     */
    removeNode(node, key) { 
    
        /**
         * If the root is null then we cannot find the node
         */
        if(node === null) 
            return null; 
  
        /**
         * If the value of our key is smaller than the node we are looking at,
         * then we must recurse into its left subtree 
         * */ 
        else if(key < node.data) 
        { 
            node.left = this.removeNode(node.left, key); 
            return node; 
        } 
  
        /**
         * If the value of our key is greater than the node we are looking at,
         * then we must recurse into its right subtree.
         */
        else if(key > node.data) 
        { 
            node.right = this.removeNode(node.right, key); 
            return node; 
        } 
  
        /**
         * Here we must have found the node with the same value as key.
         * So we perform one of the three cases for deletion of a node
         */
        else { 
            /**
             * Easy deletion of node with no children
             */
            if(node.left === null && node.right === null) { 
                node = null; 
                return node; 
            } 
  
            /**
             * Deleting a node with one child
             */
            if(node.left === null) { 
                node = node.right; 
                return node; 
            } else if(node.right === null) { 
                node = node.left; 
                return node; 
            } 
  
            /**
             * Here we delete a node with two children.
             * We promote the maximum node in its left subtree
             */
            var aux = this.findMaxNode(node.left); 
            node.data = aux.data; 
  
            node.left = this.removeNode(node.left, aux.data); 
            return node; 
        } 
  
    } 

    /**
     * Method to find the max valued node in the tree
     */
    findMaxNode(node) { 
        // if left of a node is null 
        // then it must be the maximum node
        if(node.right === null) 
            return node; 
        else
            return this.findMaxNode(node.right); 
    } 
    
    preorder(node) { 
        if(node != null) { 
            console.log(node.data); 
            this.preorder(node.left); 
            this.preorder(node.right); 
        } 
    } 
}



var BST = new BinarySearchTree(); 

 
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

BST.preorder(BST.root);
BST.insert(100);
console.log('space');
BST.preorder(BST.root);
BST.remove(15);
console.log('space');
BST.preorder(BST.root);