function choose(arr, size) {
    var allResult = [];
    (function (arr, size, result) {
        var arrLen = arr.length;
        if (size > arrLen) {
            return;
        }
        if (size == arrLen) {
            allResult.push([].concat(result, arr)) ;
        } else {
            for (var i = 0 ; i < arrLen; i++) {
                var newResult = [].concat(result);
                newResult.push(arr[i]);

                if (size == 1) {
                    allResult.push(newResult);
                } else {
                    var newArr = [].concat(arr);
                    newArr.splice(0, i + 1);
                    arguments.callee(newArr, size - 1, newResult);
                }
            }
        }
    })(arr, size, []);
    return allResult;
}

 console.log(choose([1, 2, 3, 4, 5, 6], 3).length)
 console.log(choose([1, 2, 3, 4, 5, 6], 3));