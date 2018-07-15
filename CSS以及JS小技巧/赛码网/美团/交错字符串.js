/**
 * Created by heshan on 2017/8/31.
 */
function cross(str,n) {
    str = str.split(" ")
    var res = str[0];
    for(var i = 1;i < n;i++){
        if(res[res.length - 1] != str[i]){
            res += str[i];
        }
    }
    return res.length;
}
console.log(cross("1 1 0 0 1 1 0 0",8))


