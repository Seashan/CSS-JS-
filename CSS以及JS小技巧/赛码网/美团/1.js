/**
 * Created by heshan on 2017/8/31.
 */
function aa(arr,arr1,m) {
    for(var i =0 ;i < m;i++){
        var index =  arr.indexOf(arr1[i]) ;
        index >= 0 ? arr.splice(index,1):"";
    }
    arr.sort().map(function(val){console.log(val)});
}
aa(["sina","qq","taobao","jd"],["baidu","qq","baidu"],3)
