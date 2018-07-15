/**
 * @param {string} s
 * @return {number}
 */

/*其思想和求数组中每个数右边第一个大于大的数很像*/
var longestValidParentheses = function(s) {
    var max = 0;
    var stack = [];
    var index = 0;
    for(var i = 0;i < s.length;i++) {
       if(s[i] === "(") stack.push(i);
       else{
           if( stack.length === 0) index = i + 1;
           else{
               stack.pop();
               if( stack.length === 0) max = Math.max(max,i - index + 1);
               else{
                   max = Math.max(max, i - stack[stack.length - 1] );
               }
           }
       }
    }
    return max;
 };
console.log(longestValidParentheses("()"));