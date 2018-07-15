/**
 * Created by heshan on 2017/9/18.
 */
function FindPath(root, expectNumber)
{
    if(expectNumber === 0) return [];
    var sum = 0;
    var res = [];
    (function(stack,sum,node){
        sum += node.val;
        stack.push(node.val);
        if(sum === expectNumber && node.left == null && node.right == null){
            res.push(stack.slice());
        }
        if(node.left != null){
            arguments.callee(stack,sum,node.left);
        }
        if(node.right != null){
            arguments.callee(stack,sum,node.right);
        }
        stack.pop();
    })([],sum,root)

    return res;
}
var res = FindPath([10,5,12,4,7],22);
console.log(res)