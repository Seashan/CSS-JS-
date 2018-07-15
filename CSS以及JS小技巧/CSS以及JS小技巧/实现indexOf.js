/**
 * Created by heshan on 2017/9/16.
 */
function indexOf(str,s,index) {
    index = index || 0;
    var reg = new RegExp(s);
    return str.slice(index).match(reg).index;
}


var res = indexOf("abcdaljdfl","abc");
console.log(res)