const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    if(inputArr.length==2)
    {
        var line1=inputArr[0].split(' ');
        var n=+line1[0];
        var A=+line1[1];
        var weights=inputArr[1].split(' ');
        finalWeight(n,A,weights);
        inputArr = [];

    }

});
function finalWeight(n,A,weights){
    var current=A;
    for(var i=0;i<n;i++)
    {
        if(+weights[i]===current)
        {
            A=current*2;
            current*=2;
        }
    }
    console.log(A)
}