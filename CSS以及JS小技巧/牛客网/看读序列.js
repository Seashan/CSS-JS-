/**
 * Created by heshan on 2017/5/22.
 */
function lookAndSayAndSum(n) {
 var arr=lookAndSay(n).split('');
 if(arr.length===1)return 1
 var res=arr.reduce(function (x,y) {
     return parseInt(x)+parseInt(y)
 })
return res;
}

function lookAndSay(n){
    var str="1"
    if(n===1)return str;
    for(let i=2;i<=n;i++)
    {
        var result="";
        while(str!=='')
        {
            var next=str[0];
            var index=0;
            var arr=str;
            while(arr[0]===next)
            {
                index++;
                arr=arr.substring(1);
            }
            result+=index+next;
            str=str.substring(index);
        }
        str=result;
    }
    return str;

}

lookAndSayAndSum(5)
