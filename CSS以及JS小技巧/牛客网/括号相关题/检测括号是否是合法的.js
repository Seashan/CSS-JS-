/**
 * Created by heshan on 2017/9/9.
 */
function validParentheses(str){
    var res = [];
    for(var i = 0;i < str.length; i++){
        if(str[i] === "(" || str[i] === "[" || str[i] === "{"){
            res.push(str[i]);
        }else if(str[i] === ")" && res.length > 0 && res[res.length -1] === "(") {
            res.pop();
        }else if(str[i] === "]" && res.length > 0 && res[res.length -1] === "[") {
            res.pop();
        }
        else if(str[i] === "}" && res.length > 0 && res[res.length -1] === "{") {
            res.pop();
        }else{
            return false;
        }
    }
    return res.length === 0 ? true:false;
}
console.log(validParentheses("((())){}{{{[]}}}"))


/*检测只包含()组合的字符串的括号是否合法*/
function valid(str) {
    var arr = [];
    for(var i =0;i<str.length;i++){
        if(str[i] === "("){
            arr.push(str[i]);
        }else {
            if(arr.length > 0){
                arr.pop();
            }else {
                return false;
            }
        }
    }
    return arr.length === 0 ? true : false;
}
console.log(valid("()())()()"))


/*或者将上面的数组换成下面形式，该方式是最简洁的方式*/
function valid1(str) {
    var tem = 0;
    for(var k =0 ;k < str.length; k++){
        tem += (str[k] === "(" ? 1:-1);
        if(tem < 0) return false;
    }
    /*排除 “(” 多于 “）” 的情况*/
    return tem === 0 ? true : false;
}
console.log(valid1("()())()()"))