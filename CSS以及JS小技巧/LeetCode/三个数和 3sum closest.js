/**
 * Created by heshan on 2017/9/2.
 */
var threeSumClosest = function(nums,target) {
    nums.sort(function(a,b){return a-b;})
    var len = nums.length, res =nums[0] + nums[1] + nums[len-1];
    for(var i =0;i<len-2;i++){
        for(var left = i+1,right =len-1;left<right;){
            var tem = nums[i] + nums[left] + nums[right];
            if(tem > target){
                while(nums[right] === nums[right-1])right--;
                right--;
            }
            else{
                while(nums[left+1] ===nums[left])left++;
                left++;
            }
            if(Math.abs(res - target) > Math.abs(tem - target)){
                res = tem;
            }
        }
        /*去重*/
        while(nums[i] === nums[i+1])i++;
    }
    return res;
};