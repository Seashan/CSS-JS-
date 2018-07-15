/**
 * Created by heshan on 2017/9/3.
 */
function Decare(arr) {
    return arr.reduce(function (objA,objB) {
        var resArr = [];
        for(var i =0 ;i<objA.length;i++){
            for(var j =0 ;j<objB.length;j++){
                resArr.push(objA[i] + "" + objB[j]);
            }
        }
        return resArr;
    })
}
var res = Decare([[1,2,3],[4,5],[6,7]]);
console.log(res)