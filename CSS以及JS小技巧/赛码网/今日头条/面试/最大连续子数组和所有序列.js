
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
        var arr = inputArr[0].split(" ")
        var res = maxSubArray(arr);
        console.log(res);
        inputArr = [];
    }

})
var maxSubArray = function(nums) {
    var max = 0;
    var tem=0;
    var currentIndex = 0;
    var arrs =[];
    for(var i=0;i<nums.length;i++){
        tem+= parseInt(nums[i]);
        if(tem <= 0){
            if(parseInt(nums[i]) >0)
            {
                currentIndex = i;
                tem = parseInt(nums[i]);
            }
            else{
                currentIndex = i+1;
                tem = 0;
            }
        }
        if(tem>max){
            max = tem;
            /*当max的值更换时，重新更新数组*/
            arrs = [];
        }
        if(tem == max){
            arrs.push(nums.slice(currentIndex,i+1));
        }
    }
    return arrs;
};