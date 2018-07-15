/**
 * Created by heshan on 2017/9/9.
 */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on("line", function (input) {
    inputArr.push(input);
    if(inputArr.length==1)
    {
        var res = strPiece(inputArr[0].trim().split(""));
        console.log(res);
        inputArr = [];

    }

});

function strPiece (arr) {
    var obj = [];
    var index = 0;
    var result = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] !== arr[i + 1])
        {
            var str = arr.slice(index,i+1).join("");
            obj.push(str.length);
            index = i+1;
        }
    }
 return  ((obj.reduce(function (a,b) {
      return a + b;
  })) / obj.length).toFixed(2)

}