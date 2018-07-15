/**
 * Created by heshan on 2017/9/7.
 */
function restoreTree(vin,next) {
    var len = next.length;
    if(!next || len === 0){
        return;
    }
    var treeNode = {
        val:next[len -1],
    }
    for(var i =0;i<len;i++){
        if(vin[i] === next[len - 1]){
            treeNode.left = restoreTree(vin.slice(0,i),next.slice(0,i));
            treeNode.right = restoreTree(vin.slice(i+1),next.slice(i,len-1));
        }
    }
    return treeNode;
}

console.log(restoreTree([4,7,2,1,5,3,8,6],[7,4,2,5,8,6,3,1]));