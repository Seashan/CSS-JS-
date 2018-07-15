const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on("line", function (input) {
    inputArr.push(input);
    if(inputArr.length === 1)
    {
        res(inputArr[0].split(" "));
        inputArr = [];
    }

});
function res(arr) {
    console.log(rev(rev(arr[0]) + rev(arr[1])));
}
function rev(num){
 return parseInt(num.toString().split("").reverse().join(""));
}

