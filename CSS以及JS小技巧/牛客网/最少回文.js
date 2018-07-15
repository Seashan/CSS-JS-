/*查找字符串组成的最少的回文的个数，
通过直接查找字符串中字符个数为奇数个的字符的个数即可，
因为偶数个字符可以直接添加到两边，
而奇数个则必须单独结合偶数个的字符组成一个字符，
不可奇数个的字符和奇数个的字符爱一起组成回文
str= abbaa 则最少组成一个ababa
str = abc 则最少组成三个a,b,c
*/
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on("line", function (input) {
    inputArr.push(input);
    if (inputArr.length === 1)
    {
        findHuiWen(inputArr[0].split(" "));
        inputArr = [];
    }

});

function findHuiWen(arr){
    var arrStr = arr[0].split("");
    if (arrStr.length <= 0) {
      console.log(0);
     }
   var count = arrStr.reduce(function(set,s){
       return (set.delete(s) ? set : set.add(s));
   },new Set());
    console.log(count.size || 1);
}