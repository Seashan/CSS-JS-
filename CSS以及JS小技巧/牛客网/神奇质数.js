
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
        changeLine(inputArr[0].split(" "));
        inputArr = [];
        count=0;
    }

});
function changeLine(arr){
    var min=arr[0];
    var max=arr[1];
    for(var i=min;i<=max;i++)
    {
       if(i<10)return
       else{
           str=i.toString().split("");
           countAdd(str);
       }
    }
   console.log(count)
}

function countAdd(str){
    for(var j=0;j<str.length;j++)
    {
        for(var k=0;k<str.length;k++)
        {
            if(j!==k)
            {
                var num=str[j]+str[k];

                if(isPrime(parseInt(num))&&(parseInt(num)>10))
                {
                    count++;
                  return;
                }
            }
        }
    }
}

function isPrime(number) {

    if (typeof number !== "number"|| number<2) {
        // 不是数字或者数字小于2
        return false;
    }

    if (number === 2) {//2是质数
        return true;
    } else if (number % 2 === 0) {//排除偶数
        return false;
    }
    var squareRoot = Math.sqrt(number);


    for(var i = 3; i <= squareRoot; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}