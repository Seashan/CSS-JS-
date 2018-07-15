/**
 * Created by heshan on 2017/5/19.
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    if(inputArr.length==1)
    {
        changeLine(inputArr);
        inputArr = [];
    }


});
function changeLine(arr){
    arr=arr[0];
    var count=0;
    while(arr.indexOf('0')===-1&&arr.length!=1)
    {
        count++;
        arr=(arr.split('').reduce(function(x,y){return x*y})).toString();
    }
    console.log(arr.length==1?count:count+1)
}