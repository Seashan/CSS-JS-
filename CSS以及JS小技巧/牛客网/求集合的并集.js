/**
 * Created by heshan on 2017/8/1.
 */

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on("line", function (input) {
    inputArr.push(input);
    if(inputArr.length==3)
    {
        union(inputArr[1].split(" ").map(x => parseInt(x)),inputArr[2].split(" ").map(x => parseInt(x)));
        inputArr = [];
    }

});
function union(data1,data2) {
    var set=new Set([...data1,...data2]);
    var result=[...set];
    result.sort((a,b)=>(a-b));
    console.log(result.join(" "));
}


