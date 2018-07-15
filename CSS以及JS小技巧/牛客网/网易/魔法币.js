/**
 * Created by heshan on 2017/9/9.
 */
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
        var res = magicCoin(parseInt(inputArr[0].trim()));
        console.log(res);
        inputArr = [];

    }

});

function magicCoin(num) {
    var str = "";
     while(num > 0){
         if(num % 2 === 1){
             str += "1";
             num = (num - 1) / 2;
         }
         else{
             str += "2";
             num = (num -2) / 2;
         }
    }

   return str.split("").reverse().join("");

}