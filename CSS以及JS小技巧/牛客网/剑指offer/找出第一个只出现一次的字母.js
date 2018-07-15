/**
 * Created by heshan on 2017/6/5.
 */
function FirstNotRepeatingChar(str)
{
    // write code here
    var find={};
    for(var i=0;i<str.length;i++)
    {
        if(!find[str[i]])find[str[i]]=1;
        else find[str[i]]++;
    }
    for(var key in find)
{
    if(find[key]===1) {console.log(str.indexOf(key));return }
}
    return -1;
}
FirstNotRepeatingChar("google")