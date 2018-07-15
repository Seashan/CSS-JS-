/**
 * Created by heshan on 2017/9/18.
 */
function HuiWen(str) {
    var i =0;
    var j = str.length - 1;
    while(i < j){
        if(str[i] !== str[j])
        {
            if(j - i > 2 || (str[i] != str[i + 1] && str[i + 1] !=str[j])){
               return false;
            }
        }
        i++;
        j--;
    }
    return true;
}
console.log(HuiWen("abcffeba"))