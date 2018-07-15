/**
 * Created by heshan on 2017/6/1.
 */
function bubble(arr){
    var len=arr.length;
    for(var i=0;i<len-1;i++)
    {
        for(var j=0;j<len-i-1;j++)
        {
            if(arr[j]>arr[j+1])
                swap(arr,j,j+1);
        }
    }
    console.log(arr)
    return arr;
}
function swap(array,i,j){
    var tem=array[i];
    array[i]=array[j];
    array[j]=tem;
}
bubble([1,8,3,7,2,5])