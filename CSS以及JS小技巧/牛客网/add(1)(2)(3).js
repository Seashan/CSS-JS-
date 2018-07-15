/**
 * Created by heshan on 2017/5/24.
 */
/*参数为一个的版本*/
function add(num){
    var sum = num;
    var fun = function(m){
        sum+=m;
        return fun;
    }
    fun.valueOf = function () {
        return sum;
    }
    return fun;
}

/*参数为多个的版本*/

 function add() {
     var args = Array.prototype.slice.apply(arguments);
    var tmp = function () {
        var arg1 = Array.prototype.slice.apply(arguments);
        return add.apply(null,args.concat(arg1));
    };
    tmp.valueOf = function () {
        return args.reduce(function(a, b) {
            return a + b;
        })
    }
    return tmp;
}
console.log(add(1,2,3)(2)(3));  //11
console.log(add(1)(2)(3)(4) + 5);   //10