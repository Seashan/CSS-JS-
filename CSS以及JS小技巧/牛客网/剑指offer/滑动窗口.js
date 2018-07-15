/**
 * Created by heshan on 2017/7/16.
 */
function maxInWindows(num, size)
{
    // write code here
    var len = num.length
    var result = [];
    for(var i=0; i<len-size+1 ;i++)
    {
        result.push(num.slice(i,size+i).sort(sort)[0])
    }
    return result;
}
function sort(a,b){
    return b-a;
}
console.log(maxInWindows([2,3,4,2,6,2,5,1],3))