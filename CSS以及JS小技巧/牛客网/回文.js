/*利用首位指针进行操作，实现回文序列查找*/


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on("line", function (input) {
    inputArr.push(input);
    if(inputArr.length === 2)
    {
        findABC(inputArr);
        inputArr = [];
    }

});
function findABC(arr){
    var len = parseInt(arr[0]);
    var arrs = arr[1].split(" ");
    var count = 0;
    while(len > 1)
    {
        if(parseInt(arrs[0]) === parseInt(arrs[len-1]))
        {
            arrs.pop();
            arrs.shift();
            len -= 2;
        }
        else if(parseInt(arrs[0]) > parseInt(arrs[len - 1]))
        {
                var a = parseInt(arrs.pop());
                var b = parseInt(arrs.pop());
                arrs.push(a + b);
                len -= 1;
                count++;
            }
        else
          {
              var a = parseInt(arrs.shift());
              var b = parseInt(arrs.shift());
              arrs.unshift(a + b);
              len -= 1;
              count++;
           }
    }
    console.log(count);

}


