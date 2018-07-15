

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
var dir = [0,5,3,1];
rl.on("line", function (input) {
    inputArr.push(input);
    if(inputArr[inputArr.length-1] === "0 0 0 0 0 0")
    {
        for(var i =0;i<inputArr.length-1;i++){
            var arr = inputArr[i].split(" ");
            arr = arr.map(function(val){
                return parseInt(val);
            })
            minPacket(arr);
        }
        inputArr = [];
    }

});

function minPacket(arr) {
    var ans=0;
    ans = arr[5] + arr[4] + arr[3] + (arr[2] + 3) / 4;
    var cnt_2 = arr[3] * 5 + dir[arr[2] % 4];
    if(arr[1] > cnt_2)
        ans +=(arr[1] - cnt_2 + 8) / 9;
    var cnt_1 = ans * 36-arr[5] * 36-arr[4] * 25 - arr[3] * 16 - arr[2] * 9 - arr[1] * 4;
    if(arr[1] > cnt_1)
        ans += (arr[0] - cnt_1 + 35) / 36;
     console.log(Math.floor(ans));

}
