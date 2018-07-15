/*全排列加上size参数的时候，就可以实现Anm的不完全排列*/
function permute(temArr,arr){
    var permuteArr=[];/*结果数组*/
    var len = arr.length ; /* 实现不全排列时设置为m*/
    function innerPermute(temArr){
        for(var i=0; i<len; i++) {
            if(temArr.length == len - 1) {
                if(temArr.indexOf(arr[i]) < 0) {
                    permuteArr.push(temArr.concat(arr[i]));
                }
                continue;
            }
            if(temArr.indexOf(arr[i]) < 0) {
                innerPermute(temArr.concat(arr[i]));
            }
        }
    }
    innerPermute(temArr);
    return permuteArr;
}

/*全排列的数字的长度最好不要超过8位，不然牛客网会超时*/
console.time('permute');

var arr1 = [1,2,3,4,5,6,7,8];
console.dir(permute([],arr1).length);
console.dir(permute([],arr1));
console.timeEnd('permute');
