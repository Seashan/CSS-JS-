const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*rl.setPrompt('>');*/
/*rl.prompt(['>'])*//*设置初始输入的时的光标*/
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    console.log(changeLine(inputArr));
    inputArr = [];

});
function changeLine(arr){
    var arrStr=arr[0].split('');
    var count=0;
    for(var i=0;count<arrStr.length;i++)
    {
        count++;
        if(arrStr[i].match(/[A-Z]/))
        {
            var big=arrStr.splice(i,1);
            arrStr=arrStr.concat(big);
            i--;
        }
    }
    return arrStr.join('');
}