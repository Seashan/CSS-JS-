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
        var maxK = findNumK(inputArr[0].split(""));
        console.log(maxK);
        inputArr = [];
    }

});
var findNumK = function(arr) {
   var count = 0;
   var res = arr.length;
   for(var i =0 ;i<arr.length ;i++){
       for(var k = 0 ;k < i;k++){
           if(arr[k] == "G"){
               count++;
           }
       }
      for(var j = i+1 ;j<arr.length;j++){
           if(arr[j] == "R"){
               count++;
           }
      }
      res = Math.min(res, count);
   }
   return res;
};