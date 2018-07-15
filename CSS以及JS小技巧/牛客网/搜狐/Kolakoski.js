
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on("line", function (input) {
    inputArr.push(input);
    if(inputArr.length==2)
    {
        var n = +inputArr[0].split(" ")[0];
        var m = +inputArr[0].split(" ")[1];
        var arr = inputArr[1].split(" ");
        arr.map(function(val){
            return parseInt(val);
        })
        kolakoski(arr,n);
        inputArr = [];
    }

});
function kolakoski(arr,n) {
    var index = 0;
    var indexSequence = 0;
    var count = 0;
    var num = new Array(n);
    while(count < n){
        num[count++] = arr[index];
        var c = 1;
        while(count < n && c< num[indexSequence]){
            num[count] = num[count -1];
            c++;
            count++;
        }
        indexSequence++;
        index++;
        if(index == arr.length){
            index = 0;
        }
    }
    for(var i = 0;i<num.length;i++){
        console.log(num[i]);
    }
}