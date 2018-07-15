
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
        oddStr(inputArr[0].split(" "));
        inputArr = [];
    }

});

function oddStr(arr) {
   var arrStr = arr[0].split("");
    arrStr.pop();
    arrStr.pop();
   var len = arrStr.length;
   while (len > 0)
   {
       if(arrStr.slice(len / 2).join("") === arrStr.slice(0, len / 2).join(""))
       {
           console.log(len);
           return ;
       }
       arrStr.pop();
       arrStr.pop();
       len = arrStr.length;
   }
}


