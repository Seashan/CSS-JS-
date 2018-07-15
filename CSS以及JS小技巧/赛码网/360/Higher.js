/**
 * Created by heshan on 2017/8/26.
 */
function Higher(arr1) {
    for(var i = 0;i < arr1.length;i++){
        arr1[i] = parseInt(arr1[i]);
    }
    var res = [];
    res.push(0);
    for(var i = 1;i < arr1.length ;i++){
        res[i] = 0;
        for(var j = 0;j < i;j++){
            if(arr1[j] > arr1[i]){
                res[i]++;
            }
        }
    }
    return res.join(" ")
}
var str = Higher([4,5,1,3,2,5,2,1,5]);
console.log(str)