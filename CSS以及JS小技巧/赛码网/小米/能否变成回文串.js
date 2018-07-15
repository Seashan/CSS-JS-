/**
 * Created by heshan on 2017/9/18.
 */
function fun(str) {
    var str1 = str.split("").reverse().join("");
    var  comStr = LCS(str,str1);
    var len = str.length;
    return len - comStr.length;
}

function LCS(s1, s2){
        var sstr= "" ;
        var L1=s1.length
        for ( var j=L1;j> 0 ;j--)
            for ( var i= 0 ;i<=L1-j;i++){
                sstr = s1.substr(i,j);
                if (s2.indexOf(sstr)>= 0 ) return sstr;
            }
        return "" ;
}



var res = fun("abcb");
console.log(res > 1 ? false:true)