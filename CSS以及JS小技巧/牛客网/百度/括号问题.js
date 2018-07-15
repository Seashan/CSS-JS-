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
       var res =  parenthess(inputArr[0].split(" "));
       console.log(res);
        inputArr = [];
    }

});

function parenthess(str) {
    var result ="";
    var res = 0;
    for(var i = 0;i<str.length;i++){
        result += str.charAt(i);
        if(str.charAt(i) == '['){
            res+=1;
        }else if(str.charAt(i) == ']'){
            res-=1;
        }
        if(res < 0){
            result='['+ result;
            res +=1;
        }
    }
    if(res>0){
        for(var i = 0;i<res;i++){
            result +=']';
        }
    }
    return result;
}

