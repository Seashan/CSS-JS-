/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){return "";}
    if(strs.length === 1){return strs[0];}
    var str = strs[0];
    var min = strs[0].length;
    for(var i = 1;i<strs.length;i++){
        if(strs[i].length < min){
            str = strs[i];
            min = str.length;
        }
    }

    while(str){
        var reg = new RegExp("^"+str);
        var str1 = str;
        for(var i = 0 ;i<strs.length;i++){
            if(!reg.test(strs[i])){
                str = str.slice(0,str.length-1);
                break;
            }
        }
        if(i === strs.length && str === str1)return str;
    }
    return "";
};
console.log(longestCommonPrefix(["flower","flow","flight"]))