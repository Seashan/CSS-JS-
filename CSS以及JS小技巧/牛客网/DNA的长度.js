/**
 * Created by heshan on 2017/7/25.
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
        findDNA(inputArr[0].split(" "));
        inputArr = [];
    }

});

function findDNA(arr){
    var str = arr[0];
    var match = str.match(/([ATCG]+)/g);
    var max = match[match.length-1].length;
    for(var j = match.length - 2;j >= 0;j--){
        if(match[j].length > max)
        {
            max = match[j].length;
        }
    }
     console.log(max);
}