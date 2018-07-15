/**
 * Created by heshan on 2017/3/6.
 */
function fishNum(num,arr){
    var count=0;
    for(var i=0;i<arr.length;i++)
    {
        var arr1=arr[i];
        var length=arr1.split('').length;
        var flag=false;
        for(var j=0;j<length-1;j++)
        {
            var res=arr1.substr(1);
            res=res+arr1[0];
            if(arr.indexOf(res)!=-1)
            {
                count++;
                flag=true;
            }
            arr1=res;
        }
        if(flag==true){arr.splice(i,1); i--}
    }
    console.log(count);
}

fishNum(10,['picture','turepic','ab','ba','sfsgg','gsd','hdfuf','hhfgh','as','sa'])
