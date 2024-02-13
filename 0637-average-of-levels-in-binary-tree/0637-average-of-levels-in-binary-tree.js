/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const result = [];
    const q = [];
    q.push(root);
    
    while(q.length){   
        let len = q.length;
        let count = 0;
        
        for(let i = 0; i < len; i++){
            let current = q.shift();
            if(current.left) q.push(current.left);
            if(current.right) q.push(current.right);
            count += current.val;
        }
        
        result.push(count / len);
    }
    
    return result;
};