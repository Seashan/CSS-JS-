/**
 * Created by heshan on 2017/6/1.
 */
function selectOrder(arr){
    var len=arr.length;
    for(var i=0;i<len;i++)
    {
        for(var j=i+1;j<len;j++)
        {
            if(arr[i]>arr[j])
                swap(arr,i,j)
        }
    }
    //console.log(arr)
    return arr
}
function swap(array,i,j){
    var tem=array[i];
    array[i]=array[j];
    array[j]=tem;
}