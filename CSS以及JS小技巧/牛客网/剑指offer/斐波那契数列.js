 /*方法一的事件性能非常差*/
function Fibonacci(n) {
    // write code here
    if (n > 39) {
        return;
    }
    if (n === 1) {
        return 1;
    }
    if (n === 0) {
        return 0;
    }
    return arguments.callee(n - 1) + arguments.callee(n - 2);
}


/*方法二性能相对较优*/
 function Fibonacci2(n) {
    var result = [0, 1];
    var findTwo = 0 ;
    var findOne = 1
     var res = 0;
    if (n <=1) {
        return result[n];
    }
   for(var i = 2; i <= n;i++)
   {
       res = findOne + findTwo ;
       findTwo = findOne;
       findOne = res
   }
   return res;
}
console.log(Fibonacci2(4))