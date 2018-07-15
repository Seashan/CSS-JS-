/**
 * Created by heshan on 2017/9/2.
 */
/*三个数的和利用两个输的和的思想，排序后，先取一个，剩下的两个利用两个数的和的思想做，同时注意去重*/
var threeSum = function(nums,target) {
    var res =[],len = nums.length;
    nums.sort(function(a,b){return a-b;})
    for(var i =0;i<len-2;i++){
        for(var left = i+1,right =len-1;left<right;){
            var tem = nums[i] + nums[left] + nums[right];
            if(tem === target){
                res.push([nums[i],nums[left],nums[right]]);
                /*去重*/
                while(nums[left+1] ===nums[left])left++;
                while(nums[right] === nums[right-1])right--;
                left++;
                right--;
            }
            else if(tem >target){
                /*去重*/
                while(nums[right] === nums[right-1])right--;
                right--;
            }
            else{
                /*去重*/
                while(nums[left+1] ===nums[left])left++;
                left++;
            }
        }
        /*去重*/
        while(nums[i] === nums[i+1])i++;
    }
    return res;
};