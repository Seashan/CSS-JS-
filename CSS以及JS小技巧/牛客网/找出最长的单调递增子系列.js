/**
 * Created by heshan on 2017/8/11.
 */
function maxArr(arr){
    var lenArr= [];
    for(var i =0;i<arr.length;i++){
        lenArr[i] = 1;
        for(var j =0 ;j<i;j++){
            if(arr[i]>arr[j] && lenArr[j] +1 > lenArr[i])
            {
                lenArr[i] = lenArr[j]+1;
            }
        }
    }
    return lenArr.sort(function(a,b){
        return b-a;
    })[0]
}
console.log(maxArr([10,9,2,5,6,7,8,3,9,101,18]))