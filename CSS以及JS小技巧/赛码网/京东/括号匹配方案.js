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
        var res = parentheses(inputArr[0].split(""));
        console.log(res);
        inputArr = [];

    }

});

function parentheses(arr){
    var count = 1;
    while(arr.length > 0){
               var tmp = arr.indexOf(")");
               arr.splice(tmp,1);
               arr.shift();
               count = count * tmp;
    }
    return count;
}