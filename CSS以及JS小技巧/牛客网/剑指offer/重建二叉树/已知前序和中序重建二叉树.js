/**
 * Created by heshan on 2017/9/7.
 */
function restoreTree(pre,vin){
    if(!pre || pre.length === 0){
        return;
    }
    var treeNode = {
        val:pre[0],
    }
    for(var i = 0;i<pre.length;i++){
        if(vin[i] === pre[0]){
            treeNode.left = restoreTree(pre.slice(1,i+1),vin.slice(0,i));
            treeNode.right = restoreTree(pre.slice(i+1),vin.slice(i+1));
        }
    }
    return treeNode;
}

console.log(restoreTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]));