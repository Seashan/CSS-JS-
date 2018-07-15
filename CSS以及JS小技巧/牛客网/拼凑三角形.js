/*三条边减少一条边的大小使其能够构成三角形并且周长最大*/
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
       var res =  trangle(inputArr[0].trim().split(" "));
       console.log(res);
        inputArr = [];
    }

});
function trangle(arr) {
    var a = parseInt(arr[0]);
    var b = parseInt(arr[1]);
    var c =parseInt(arr[2]);
   if(isTangle(a,b,c)) return a+b+c;
   else{
       if(a + b <= c){
           c = a + b  -1;
           if(isTangle(a,b,c)){
               return a + b + c;
           }
       }
       if(a + c <= b){
           b = a + c -1;
           if(isTangle(a,b,c)){
               return a + b + c;
           }
       }
       if(b + c <=a){
           a = b + c -1;
           if(isTangle(a,b,c)){
               return a + b + c;
           }
       }
   }
}

function isTangle(a,b,c) {
    if(a + b > c && b+c > a&&a+c>b && Math.abs(a-c) < b&& Math.abs(a-b) < c && Math.abs(b-c)<a) return true;
    else return false;
}
