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
        maxDivisorFun(+(inputArr[0].trim()));
        inputArr = [];
    }

});
function maxDivisorFun(num){
    var res = 0;
  for(var i = num; i> 0 ;i--)
  {
      res += maxDivisor(i);
  }
  console.log(res);
}
function maxDivisor(n) {
      while((n & 1) ===0)
      {
          n=n>>1;
      }
      return n;
}


