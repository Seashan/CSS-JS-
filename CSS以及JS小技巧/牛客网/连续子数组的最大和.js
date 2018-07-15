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
        var max = maxSubArray(inputArr[0].split(" "));
        console.log(max);
        inputArr = [];
    }

});
var maxSubArray = function(nums) {
    var max = 0;
    var tem=0;
    for(var i=0;i<nums.length;i++){
        tem+= parseInt(nums[i]);
        tem = tem > 0 ? tem:parseInt(nums[i])>0? parseInt(nums[i]):0;
        if(tem>max){
            max = tem;
        }
    }
    /*注意考虑到数组的元素全是负数的情况，全是负数的时候直接返回最大值*/
    return max==0? nums.sort(function (a,b) {
            return parseInt(b)-parseInt(a);
        })[0]:max;
};