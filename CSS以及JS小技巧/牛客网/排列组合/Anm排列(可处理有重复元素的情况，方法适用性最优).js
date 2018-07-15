/**
 * Created by heshan on 2017/7/7.
 */
function queue(arr, size) {
    if (size > arr.length) { return; }
    var allResult = [];

    (function (arr, size, result) {
        var isRepeated ={};/*用于对重复元素进行处理*/
        if (result.length == size) {
            allResult.push(result);
        } else {
            for (var i = 0, len = arr.length; i < len; i++) {
                if(!isRepeated[arr[i]]){
                    var newArr = [].concat(arr),/*对数组进行赋值，保证原数组不被修改*/
                        curItem = newArr.splice(i, 1);
                    arguments.callee(newArr, size, [].concat(result, curItem));
                }
              isRepeated[arr[i]] = true;
            }
        }
    })(arr, size, []);

    return allResult;
}
function showResult(result) {
    console.log("The number of result sets: " + result.length);
    for (var i = 0, len = result.length; i < len; i++) {
        console.log(result[i]);
    }
}

showResult(queue([1, 1, 3,2], 4));
