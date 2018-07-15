/**
 * Created by heshan on 2017/9/16.
 */
/*余地种方类似的，但是要注意如果题目中直接存在出现次数大于2/n的元素，可以直接使用，
但是题目如果没有说一定存在，则还需要对最后数组中的元素进行次数统计，也就是第一种方法中的后面的循环*/
function find(arr){
    for(var i = 0 ;i < arr.length -1 ;i++){
        if(arr[i] !== arr[i+1]){
            arr.splice(i,2);
            i = i - 1;
        }
    }
    console.log(arr.length > 0? arr[0] : -1);
}
find([1,2,1,2,1,2,1,2,2,2,4,5,5,7])