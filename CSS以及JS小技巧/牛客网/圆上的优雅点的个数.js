const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
var count=0;
rl.on("line", function (input) {
    inputArr.push(input);
    if(inputArr.length==1)
    {
        beauty(+inputArr[0]);
        inputArr = [];
        count=0;
    }

});
function beauty(num){
    var count = 0;
    if(num <= 0) {
        return 0;
    }
    var r = Math.floor(Math.sqrt(num));
    for(var i = 0 ;i<=r;i++){
        var y = Math.sqrt(num - Math.pow(i,2));
        if(y === parseInt(y))
        {
         if(i === 0 || y ===0)
         {
             count += 2;
         }
        else{
             count += 4;
         }
        }
    }
     console.log(count);
}