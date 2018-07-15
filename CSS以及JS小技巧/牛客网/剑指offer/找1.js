/**
 * Created by heshan on 2017/6/1.
 */
function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    var count=0
    var tem=n;
    while(n){
        while(tem)
        {
            if(tem%10===1)
            {
                count++;
            }
             tem=parseInt(tem/10);
        }
        n--;
        tem=n;
    }
    console.log(count);
    return count;
}
NumberOf1Between1AndN_Solution(13);