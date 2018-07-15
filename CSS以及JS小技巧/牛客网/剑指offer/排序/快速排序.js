/**
 * Created by heshan on 2017/6/1.
 */
/*快排的思想就是选取参照，将大的元素放入Left数组，小的元素放入right数组，递归进行组合*/
function fastOrder(arr){
    if(arr.length<=1)
    {
        return arr;
    }
    var len=arr.length;
    var left=[];
    var right=[];
    var tem=arr.splice(Math.floor(len/2),1)[0];
    for(var i=0;i<arr.length;i++)
    {
      if(arr[i]<tem)left.push(arr[i])
        else right.push(arr[i]);
    }
   return fastOrder(left).concat(tem).concat(fastOrder(right));
}
console.log(fastOrder([1,5,8,3,5,2,3]));