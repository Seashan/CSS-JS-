/**
 * Created by heshan on 2017/6/1.
 */
/*插入排序主要利用了移位，以及中间变量的使用*/
function insertOrder(arr){
    var len=arr.length;
    for(var i=1;i<len;i++)
    {
        var preIndex=i-1;
        var current=arr[i];
        while(preIndex>=0&&current<arr[preIndex])
        {
            arr[preIndex+1]=arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1]=current;
    }
    console.log(arr);
    return arr
}
insertOrder([4,1,7,2,6,3])