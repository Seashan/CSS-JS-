/**
 * Created by heshan on 2017/7/12.
 */
function FindContinuousSequence(sum)
{
    // write code here
    if(sum < 3) {return [];}
    var small = 1;
    var big = 2;
    var result = [];
    var curSum = small + big ;
    var middle =Math.ceil(sum/2);
    while(small < middle)
    {
        if(curSum === sum)
        {
            result.push(print(small,big));
        }
        while(curSum > sum && small <middle)
        {
            curSum -= small;
            small++;
            if(curSum === sum)
            {
                result.push(print(small,big));
            }
        }
        big++;
        curSum+=big;
    }
    console.log(result);
    function print(small,big)
    {
        var res=[];
        for(var i=small;i<=big;i++)
        {
            res.push(i)
        }
        return res
    }
}


FindContinuousSequence(3);