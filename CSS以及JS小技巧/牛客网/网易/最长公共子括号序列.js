/**
 * 从一个字符串S中移除零个或者多个字符得到的序列称为S的子序列。
 * 例如"abcde"的子序列有"abe","","abcde"等。不一定要是连续的
 */
function maxParentheses(str){
    var result = [];
    var len = str.length;
    for(var i =0;i < len;i++){
        var curStr = str.slice(0,i) + str.slice(i+1);
         for(var j = 0;j < len - 1 ;j++){
             var res = curStr.slice(0,j) + str[i] + curStr.slice(j);
             var tem = 0;
             for(var k =0 ;k < len; k++){
                 tem += (res[k] === "(" ? 1:-1);
                 if(tem < 0) break;
             }
             if(tem === 0 && result.indexOf(res) < 0){
                 result.push(res);
             }
         }
    }
    return result.length - 1;
}
console.log(maxParentheses("(())()"))