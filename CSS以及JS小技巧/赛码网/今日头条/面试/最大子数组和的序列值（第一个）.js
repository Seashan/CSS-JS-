/**
 * Created by heshan on 2017/9/3.
 */
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
        var max = maxSubArray(arr);
        console.log(arr.splice(max[0],(max[1]-max[0] +1)));
        inputArr = [];
    }

})
var maxSubArray = function(nums) {
    var max = 0;
    var tem=0;
    var start = 0;
    var currentIndex = 0;
    var end = 0;
    var arr =[];
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
            start = currentIndex;
            end = i;
            /*当max的值更换时，重新更新数组*/
            arr.length = 0;
            arr.push(nums.slice(currentIndex,i-currentIndex+1));
        }
        if(tem == max){
            arr.push(nums.slice(currentIndex,i-currentIndex+1));
        }
    }
    return [start,end];
};