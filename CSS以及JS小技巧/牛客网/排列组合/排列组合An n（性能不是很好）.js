/**
 * Created by heshan on 2017/7/6.
 */
function permutate(array/*需要进行全排列的一维数组*/, permutatedArray/*存放返回结果*/) {
    if (!permutatedArray) {
        permutatedArray = [];
    }
    if (array.length > 1) {
        //弹出第一个数
        var elementCur = array.shift();
        //排列剩余的数组
        permutate(array, permutatedArray);
        //返回剩余的数组的排列长度
        var permutatedArrayLen = permutatedArray.length;
        //第一个数与其他剩余数组所有数组组合
        for (var j = 0; j < permutatedArrayLen; j++) {
            //弹出不齐的组
            var p = permutatedArray.shift();
            //把当前元素放到排列好的数组的所有位置
            for (var i = 0; i <= p.length; i++) {
                //复制排列好的数组
                var r = p.slice(0);
                //插入数据到数组的位置
                r.splice(i, 0, elementCur);
                //保存
                permutatedArray.push(r)
                    }
        }
        //退出条件
    } else {
        permutatedArray.push([array[0]]);
    }
    return permutatedArray;
}
console.time('permutate');

var arr1 = [1,2,3,4,5,6,7,8];
console.log(permutate(arr1));
console.timeEnd('permutate');

