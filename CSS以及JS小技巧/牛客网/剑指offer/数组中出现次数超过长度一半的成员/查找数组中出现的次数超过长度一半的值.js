/**
 * Created by heshan on 2017/5/31.
 */
function MoreThanHalfNum_Solution(numbers)
{
    if( numbers==null ) console.log(0) ;
    var result = 0;
    var count = 0;
    var len = numbers.length;
    //注意到目标数 超过数组长度的一半，对数组同时去掉两个不同的数字，到最后剩下的一个数就是该数字
    for(var i=0; i<len; i++){
        if( count==0 ){
            result = numbers[i];
            count++;
        }else{
            if( result==numbers[i] ){
                count++;
            }else{
                count--;
            }
        }
    }

    /*对最后的记过进行统计，可能没有大于n/2的情况[1,2,1,2,1,2,3,3]，上面的返回值为3*/
    var k = 0;
    for(var i=0; i<len; i++){
        if( numbers[i]==result ){
            k++;
        }
    }

    console.log((2*k>len)?result:0);

}
MoreThanHalfNum_Solution([1,2,1,2,1,2,1,2,2,2,4,5])