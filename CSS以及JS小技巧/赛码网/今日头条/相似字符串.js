/**
 * Created by heshan on 2017/8/22.
 */
var str = readLine();
var o = {};
var k = 0;
var res = "";
for(var i = 0; i < str.length; i++){
    var c = str.charAt(i);
    if(!o[c]){
        o[c] = String.fromCharCode(97 + k);/*找字典序中最小的串*/
        k++
    }
    res += o[c];
}
print(res);

/*防止1024个字符超出*/

function readLine() {
    var line = "";
    var next = read_line();
    while(next.length >= 1024) {
        line += next;
        next = read_line();
    }
    line += next;
    return line;
}