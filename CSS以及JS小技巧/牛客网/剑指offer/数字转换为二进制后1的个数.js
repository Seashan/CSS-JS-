/**
 * Created by heshan on 2017/7/1.
 */
function NumberOf1(n)
{
    // write code here
    var count = 0;
    if(/-/.test(n))
    {
        n = ~n;
        if(n===0)
        {
            n = n^0xffffffff;
        }
    }
    //console.log(n) ;
    var str = n.toString(2);
   // console.log(str)
    for( var i = 0;i<str.length;i++)
    {
        if(str.charAt(i) === "1")
            count++
    }
     console.log(count)
}
NumberOf1(-1)
